import { useEffect, useMemo, useState } from 'react'
import { CARDS, DECKS, type Flashcard } from './data'
import './Flashcards.css'

const KNOWN_STORAGE_KEY = 'interview-prep:flashcards:known'

function loadKnownIds(): Set<string> {
  try {
    const raw = localStorage.getItem(KNOWN_STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function saveKnownIds(known: Set<string>): void {
  localStorage.setItem(KNOWN_STORAGE_KEY, JSON.stringify([...known]))
}

/** Fisher-Yates — the same shuffle taught in card-game/solution.tsx. */
function shuffleArray<T>(items: T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

const ALL_DECKS = 'All Decks'

export function Flashcards() {
  const [deckFilter, setDeckFilter] = useState<string>(ALL_DECKS)
  const [onlyUnmastered, setOnlyUnmastered] = useState(false)
  const [known, setKnown] = useState<Set<string>>(() => loadKnownIds())
  const [order, setOrder] = useState<Flashcard[]>(CARDS)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    saveKnownIds(known)
  }, [known])

  useEffect(() => {
    const filtered = CARDS.filter((card) => {
      if (deckFilter !== ALL_DECKS && card.deck !== deckFilter) return false
      if (onlyUnmastered && known.has(card.id)) return false
      return true
    })
    setOrder(filtered)
    setIndex(0)
    setFlipped(false)
    // Only re-filter when the filter controls change, not on every `known` update
    // (marking a card known mid-session shouldn't yank it out from under you).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deckFilter, onlyUnmastered])

  const deckCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const card of CARDS) {
      counts.set(card.deck, (counts.get(card.deck) ?? 0) + 1)
    }
    return counts
  }, [])

  const current = order[index]
  const masteredInView = order.filter((card) => known.has(card.id)).length

  function goNext() {
    setFlipped(false)
    setIndex((i) => (order.length === 0 ? 0 : (i + 1) % order.length))
  }

  function goPrev() {
    setFlipped(false)
    setIndex((i) => (order.length === 0 ? 0 : (i - 1 + order.length) % order.length))
  }

  function shuffleNow() {
    setOrder((current) => shuffleArray(current))
    setIndex(0)
    setFlipped(false)
  }

  function markKnown() {
    if (!current) return
    setKnown((prev) => new Set(prev).add(current.id))
    goNext()
  }

  function markStillLearning() {
    if (!current) return
    setKnown((prev) => {
      const next = new Set(prev)
      next.delete(current.id)
      return next
    })
    goNext()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      setFlipped((f) => !f)
    } else if (e.key === 'ArrowRight') {
      goNext()
    } else if (e.key === 'ArrowLeft') {
      goPrev()
    }
  }

  return (
    <div className="flashcards">
      <div className="flashcards-controls">
        <label>
          Deck
          <select value={deckFilter} onChange={(e) => setDeckFilter(e.target.value)}>
            <option value={ALL_DECKS}>{ALL_DECKS} ({CARDS.length})</option>
            {DECKS.map((deck) => (
              <option key={deck} value={deck}>
                {deck} ({deckCounts.get(deck) ?? 0})
              </option>
            ))}
          </select>
        </label>

        <label className="flashcards-checkbox">
          <input
            type="checkbox"
            checked={onlyUnmastered}
            onChange={(e) => setOnlyUnmastered(e.target.checked)}
          />
          Only show cards I haven't mastered
        </label>

        <button type="button" onClick={shuffleNow} disabled={order.length < 2}>
          Shuffle
        </button>
      </div>

      {order.length === 0 ? (
        <p className="flashcards-empty">
          Nothing left in this filter — nice work. Uncheck "only unmastered" to review everything
          again.
        </p>
      ) : (
        <>
          <p className="flashcards-progress">
            Card {index + 1} / {order.length} · {masteredInView} mastered in this view
          </p>

          <div
            className={`flashcard ${flipped ? 'is-flipped' : ''}`}
            onClick={() => setFlipped((f) => !f)}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={flipped ? 'Answer, click to see question' : 'Question, click to reveal answer'}
          >
            <div className="flashcard-inner">
              <div className="flashcard-face flashcard-front">
                <span className="flashcard-deck-label">{current.deck}</span>
                <p>{current.front}</p>
                <span className="flashcard-hint">tap or press space to flip</span>
              </div>
              <div className="flashcard-face flashcard-back">
                <span className="flashcard-deck-label">{current.deck}</span>
                <p>{current.back}</p>
                <span className="flashcard-hint">tap or press space to flip back</span>
              </div>
            </div>
          </div>

          <div className="flashcards-nav">
            <button type="button" onClick={goPrev}>
              ← Prev
            </button>
            <button type="button" onClick={goNext}>
              Next →
            </button>
          </div>

          <div className="flashcards-assessment">
            <button type="button" className="still-learning" onClick={markStillLearning}>
              Still learning
            </button>
            <button type="button" className="got-it" onClick={markKnown}>
              Got it ✓
            </button>
          </div>
        </>
      )}
    </div>
  )
}
