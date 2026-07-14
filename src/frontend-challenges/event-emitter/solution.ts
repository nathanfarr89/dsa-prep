/**
 * Solution: Pub/Sub Event Emitter
 */

type Listener = (...args: any[]) => void

export class EventEmitter {
  private listenersByEvent = new Map<string, Listener[]>()

  on(event: string, listener: Listener): () => void {
    const listeners = this.listenersByEvent.get(event)

    if (listeners) {
      listeners.push(listener)
    } else {
      this.listenersByEvent.set(event, [listener])
    }

    return () => this.off(event, listener)
  }

  off(event: string, listener: Listener): void {
    const listeners = this.listenersByEvent.get(event)
    if (!listeners) return

    this.listenersByEvent.set(
      event,
      listeners.filter((registered) => registered !== listener),
    )
  }

  emit(event: string, ...args: unknown[]): void {
    const listeners = this.listenersByEvent.get(event)
    if (!listeners) return

    // Iterate a copy so a listener unsubscribing mid-emit can't skip
    // (or double-call) another listener.
    for (const listener of [...listeners]) {
      listener(...args)
    }
  }
}
