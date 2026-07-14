import { useState } from 'react'
import './App.css'
import { ErrorBoundary } from './ErrorBoundary'
import { Flashcards } from './flashcards/Flashcards'
import { CardGame } from './frontend-challenges/card-game/problem'

const DSA_TOPICS = [
  { dir: 'src/dsa/00-big-o', title: 'Big-O & Complexity (read first, no exercise)' },
  { dir: 'src/dsa/01-arrays-strings', title: 'Arrays & Strings — two pointers, sliding window' },
  { dir: 'src/dsa/02-hash-maps-sets', title: 'Hash Maps & Sets' },
  { dir: 'src/dsa/03-linked-lists', title: 'Linked Lists' },
  { dir: 'src/dsa/04-stacks-queues', title: 'Stacks & Queues' },
  { dir: 'src/dsa/05-trees', title: 'Trees — DFS & BFS' },
  { dir: 'src/dsa/06-graphs', title: 'Graphs — grid BFS/DFS' },
  { dir: 'src/dsa/07-recursion-backtracking', title: 'Recursion & Backtracking' },
  { dir: 'src/dsa/08-sorting-searching', title: 'Sorting & Searching' },
  { dir: 'src/dsa/09-dynamic-programming', title: 'Dynamic Programming' },
]

const FRONTEND_CHALLENGES = [
  { dir: 'src/frontend-challenges/card-game', title: 'Card Game — deck, shuffle, deal (live below)' },
  { dir: 'src/frontend-challenges/debounce-throttle', title: 'Debounce & Throttle' },
  { dir: 'src/frontend-challenges/event-emitter', title: 'Pub/Sub Event Emitter' },
  { dir: 'src/frontend-challenges/deep-clone-flatten', title: 'Deep Clone & Flatten Object' },
]

type Tab = 'hub' | 'flashcards'

function App() {
  const [tab, setTab] = useState<Tab>('hub')

  return (
    <div className="app">
      <header>
        <h1>Frontend Interview Prep</h1>
        <nav className="tabs">
          <button
            type="button"
            className={tab === 'hub' ? 'tab is-active' : 'tab'}
            onClick={() => setTab('hub')}
          >
            Practice Hub
          </button>
          <button
            type="button"
            className={tab === 'flashcards' ? 'tab is-active' : 'tab'}
            onClick={() => setTab('flashcards')}
          >
            Flashcards
          </button>
        </nav>
      </header>

      {tab === 'hub' ? (
        <>
          <p>
            Start with the <code>README.md</code> at the project root for the study plan and
            principles. Each folder below has a <code>problem.ts(x)</code> to implement, a{' '}
            <code>hints.md</code> to check when stuck, and a <code>solution.ts(x)</code> to
            compare against. Run <code>npm test</code> to check your work against{' '}
            <code>problem.test.ts</code>.
          </p>

          <section>
            <h2>Data Structures &amp; Algorithms</h2>
            <ul className="topic-list">
              {DSA_TOPICS.map((topic) => (
                <li key={topic.dir}>
                  <code>{topic.dir}</code> — {topic.title}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Frontend Challenges</h2>
            <ul className="topic-list">
              {FRONTEND_CHALLENGES.map((challenge) => (
                <li key={challenge.dir}>
                  <code>{challenge.dir}</code> — {challenge.title}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Card Game — Live Preview</h2>
            <p>
              Once you implement <code>src/frontend-challenges/card-game/problem.tsx</code>, this
              renders it live so you can click through it.
            </p>
            <ErrorBoundary label="CardGame">
              <CardGame />
            </ErrorBoundary>
          </section>
        </>
      ) : (
        <section>
          <h2>Flashcards</h2>
          <p>
            Quick recall drills on patterns, complexity, and gotchas — good for reviewing on your
            phone away from the keyboard. Progress is saved on this device.
          </p>
          <Flashcards />
        </section>
      )}
    </div>
  )
}

export default App
