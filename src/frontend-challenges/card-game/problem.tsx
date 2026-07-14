/**
 * Challenge: Card Game — Deck, Shuffle, Deal
 * Difficulty: Medium (this is a very common "build a small app" frontend
 * interview prompt)
 *
 * Implement three pure functions and a small React component:
 *
 *   1. createDeck()          — build a standard 52-card deck, unshuffled.
 *   2. shuffleDeck(deck)     — return a new array with the cards randomly
 *                              shuffled (Fisher-Yates), WITHOUT mutating
 *                              the array you were given.
 *   3. dealHand(deck, size)  — return the first `size` cards as the hand,
 *                              and the rest as the remaining deck.
 *   4. <CardGame />          — a component with a "Shuffle & Deal" button
 *                              that creates a deck, shuffles it, deals a
 *                              5-card hand, and displays the hand and how
 *                              many cards are left in the deck.
 *
 * This exercise is really three interview skills in one:
 *  - modeling data (what IS a card / a deck?)
 *  - a real algorithm with a classic wrong-but-plausible naive approach
 *    (see hints.md for why `sort(() => Math.random() - 0.5)` is broken)
 *  - wiring pure logic up to React state without over-complicating it
 */

import type { ReactElement } from 'react'

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

/** Builds a standard 52-card deck in a fixed (unshuffled) order. */
export function createDeck(): Card[] {
  // TODO: implement — one card per (suit, rank) combination, 52 total.
  throw new Error('Not implemented')
}

/**
 * Returns a new, randomly shuffled array containing the same cards as
 * `deck`. Must not mutate `deck`.
 */
export function shuffleDeck(deck: Card[]): Card[] {
  // TODO: implement Fisher-Yates shuffle
  throw new Error('Not implemented')
}

export interface DealResult {
  hand: Card[]
  remainingDeck: Card[]
}

/**
 * Deals `handSize` cards off the top of `deck`. Returns the dealt hand and
 * whatever's left of the deck. Must not mutate `deck`.
 */
export function dealHand(deck: Card[], handSize: number): DealResult {
  // TODO: implement
  throw new Error('Not implemented')
}

const HAND_SIZE = 5

export function CardGame(): ReactElement {
  // TODO: implement
  //  - useState for the current hand (Card[]) and the remaining deck count
  //  - a "Shuffle & Deal" button that: creates a deck, shuffles it, deals
  //    a HAND_SIZE-card hand, and stores the results in state
  //  - render the hand (use `cardLabel(card)` for display) and the number
  //    of cards left in the deck
  throw new Error('Not implemented')
}
