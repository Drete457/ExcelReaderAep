import { Component, ErrorInfo, ReactNode } from 'react';
import { CAlert, CButton, CCard, CCardBody } from '@coreui/react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 p-4">
          <CCard className="app-card" style={{ maxWidth: '500px' }}>
            <CCardBody className="text-center">
              <CAlert color="danger" className="mb-4">
                <h4 className="alert-heading">Ocorreu um erro inesperado</h4>
                <p className="mb-0">
                  Lamentamos, mas algo correu mal. Por favor, tenta recarregar a
                  página ou contacta o suporte se o problema persistir.
                </p>
              </CAlert>
              {this.state.error && (
                <details className="text-start mb-4">
                  <summary className="text-muted" style={{ cursor: 'pointer' }}>
                    Detalhes técnicos
                  </summary>
                  <pre
                    className="mt-2 p-2 bg-light rounded small"
                    style={{ overflow: 'auto', maxHeight: '150px' }}
                  >
                    {this.state.error.message}
                  </pre>
                </details>
              )}
              <div className="d-flex gap-2 justify-content-center">
                <CButton color="primary" onClick={this.handleReset}>
                  Tentar novamente
                </CButton>
                <CButton
                  color="secondary"
                  variant="outline"
                  onClick={() => window.location.reload()}
                >
                  Recarregar página
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
