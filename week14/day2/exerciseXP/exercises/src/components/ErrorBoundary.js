import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

    render(){
        if (this.state.error) {
          return (
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          )
        }
      return this.props.children
    }
}

export default ErrorBoundary;