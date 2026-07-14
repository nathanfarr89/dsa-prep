/**
 * Solution: Card Game — Deck, Shuffle, Deal
 */

import { useState } from 'react'

export type Suit = 'spades' | 'hearts' | 'diamonds' | 'clubs'
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

export interface Card {
  suit: Suit
  rank: Rank
}

export const SUITS: Suit[] = ['spades', 'hearts', 'diamonds', 'clubs']
export const RANKS: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

const SUIT_SYMBOLS: Record<Suit, string> = {
  spades: '♠',
  hearts: '♥',
  diamonds: '♦',
  clubs: '♣',
}

export function cardLabel(card: Card): string {
  return `${card.rank}${SUIT_SYMBOLS[card.suit]}`
}

export function createDeck(): Card[] {
  const deck: Card[] = []

  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({ suit, rank })
    }
  }

  return deck
}

/**
 * Fisher-Yates shuffle. Walking backwards and swapping each element with a
 * uniformly random earlier-or-equal position guarantees every permutation
 * is equally likely — unlike `sort(() => Math.random() - 0.5)`, which is
 * biased.
 */
export function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

export interface DealResult {
  hand: Card[]
  remainingDeck: Card[]
}

export function dealHand(deck: Card[], handSize: number): DealResult {
  return {
    hand: deck.slice(0, handSize),
    remainingDeck: deck.slice(handSize),
  }
}

const HAND_SIZE = 5

export function CardGame() {
  const [hand, setHand] = useState<Card[]>([])
  const [remainingCount, setRemainingCount] = useState(0)

  function handleShuffleAndDeal() {
    const deck = shuffleDeck(createDeck())
    const { hand: dealtHand, remainingDeck } = dealHand(deck, HAND_SIZE)
    setHand(dealtHand)
    setRemainingCount(remainingDeck.length)
  }

  return (
    <div>
      <button onClick={handleShuffleAndDeal}>Shuffle &amp; Deal</button>
      <p>Cards left in deck: {remainingCount}</p>
      <ul aria-label="hand">
        {hand.map((card) => (
          <li key={`${card.suit}-${card.rank}`}>{cardLabel(card)}</li>
        ))}
      </ul>
    </div>
  )
}
