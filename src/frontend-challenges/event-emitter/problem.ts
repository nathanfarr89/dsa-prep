/**
 * Challenge: Implement a Pub/Sub Event Emitter
 * Difficulty: Medium (this is the mechanism behind React's synthetic
 * events, Node's EventEmitter, and any hand-rolled "global store" you've
 * ever seen implemented with subscribe/notify)
 *
 * Implement a generic EventEmitter class with:
 *
 *   on(event, listener)   — register `listener` to be called whenever
 *                           `event` is emitted. Returns an `unsubscribe`
 *                           function that removes just that listener.
 *   off(event, listener)  — remove a specific listener for `event`.
 *   emit(event, ...args)  — call every listener currently registered for
 *                           `event`, in the order they were registered,
 *                           passing `args` through to each.
 *
 * Example:
 *   const emitter = new EventEmitter()
 *   const unsubscribe = emitter.on('greet', (name: string) => console.log(`hi ${name}`))
 *   emitter.emit('greet', 'Ada') // logs "hi Ada"
 *   unsubscribe()
 *   emitter.emit('greet', 'Grace') // nothing logged, listener was removed
 */

type Listener = (...args: any[]) => void

export class EventEmitter {
  on(event: string, listener: Listener): () => void {
    // TODO: implement — remember to return an unsubscribe function
    throw new Error('Not implemented')
  }

  off(event: string, listener: Listener): void {
    // TODO: implement
    throw new Error('Not implemented')
  }

  emit(event: string, ...args: unknown[]): void {
    // TODO: implement
    throw new Error('Not implemented')
  }
}
