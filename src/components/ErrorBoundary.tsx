import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = 'Something went wrong.';
      try {
        const errorData = JSON.parse(this.state.error?.message || '{}');
        if (errorData.error) {
          errorMessage = `Firestore Error: ${errorData.error} (Operation: ${errorData.operationType}, Path: ${errorData.path})`;
        }
      } catch (e) {
        // Not a JSON error message, use the raw message
        errorMessage = this.state.error?.message || errorMessage;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-paper p-6">
          <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl text-center">
            <h2 className="text-3xl font-serif text-ink mb-4">Unexpected Error</h2>
            <p className="text-ink/60 mb-8 leading-relaxed">
              {errorMessage}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-ink text-paper text-[0.7rem] uppercase tracking-[0.3em] font-medium hover:bg-gold transition-all duration-500 rounded-full"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
