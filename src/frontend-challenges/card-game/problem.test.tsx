import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardGame, createDeck, dealHand, shuffleDeck } from './problem'
import type { Card } from './problem'

function cardKey(card: Card): string {
  return `${card.suit}-${card.rank}`
}

function sortedKeys(deck: Card[]): string[] {
  return deck.map(cardKey).sort()
}

describe('createDeck', () => {
  it('creates a standard 52-card deck', () => {
    expect(createDeck()).toHaveLength(52)
  })

  it('has no duplicate cards', () => {
    const keys = createDeck().map(cardKey)
    expect(new Set(keys).size).toBe(52)
  })

  it('has 13 cards per suit', () => {
    const deck = createDeck()
    const spadesCount = deck.filter((card) => card.suit === 'spades').length
    expect(spadesCount).toBe(13)
  })
})

describe('shuffleDeck', () => {
  it('returns the same set of cards, just reordered', () => {
    const deck = createDeck()
    const shuffled = shuffleDeck(deck)
    expect(sortedKeys(shuffled)).toEqual(sortedKeys(deck))
  })

  it('does not mutate the original deck', () => {
    const deck = createDeck()
    const originalOrder = [...deck]
    shuffleDeck(deck)
    expect(deck).toEqual(originalOrder)
  })

  it('actually reorders the deck (extremely unlikely to no-op by chance)', () => {
    const deck = createDeck()
    const shuffled = shuffleDeck(deck)
    expect(shuffled.map(cardKey)).not.toEqual(deck.map(cardKey))
  })
})

describe('dealHand', () => {
  it('deals the requested number of cards into the hand', () => {
    const deck = createDeck()
    const { hand } = dealHand(deck, 5)
    expect(hand).toHaveLength(5)
  })

  it('removes the dealt cards from the remaining deck', () => {
    const deck = createDeck()
    const { hand, remainingDeck } = dealHand(deck, 5)
    expect(remainingDeck).toHaveLength(47)
    expect(sortedKeys([...hand, ...remainingDeck])).toEqual(sortedKeys(deck))
  })

  it('does not mutate the original deck', () => {
    const deck = createDeck()
    const originalOrder = [...deck]
    dealHand(deck, 5)
    expect(deck).toEqual(originalOrder)
  })
})

describe('<CardGame />', () => {
  it('deals a 5-card hand and updates the remaining count on click', () => {
    render(<CardGame />)

    fireEvent.click(screen.getByRole('button', { name: /shuffle.*deal/i }))

    const hand = screen.getByLabelText('hand')
    expect(within(hand).getAllByRole('listitem')).toHaveLength(5)
    expect(screen.getByText(/47/)).toBeInTheDocument()
  })
})
