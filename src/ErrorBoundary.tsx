import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  label: string
}

interface State {
  error: Error | null
}

/**
 * Catches the "Not implemented" throws from unfinished problem/challenge
 * stubs so one unsolved exercise doesn't take down the whole page — shows
 * a friendly placeholder instead.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`[${this.props.label}] threw while rendering:`, error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="not-implemented">
          <strong>{this.props.label}</strong> isn't implemented yet.
          <div className="not-implemented-detail">{this.state.error.message}</div>
        </div>
      )
    }

    return this.props.children
  }
}
