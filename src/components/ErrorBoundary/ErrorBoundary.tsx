import React from 'react';
import ErrorScreen from '../Interface/components/ErrorScreen/ErrorScreen';

interface IErrorBoundaryState {
  error: string;
  errorInfo: string;
}

export class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (!this.state.errorInfo) return this.props.children;
    return <ErrorScreen message={this.state.error && this.state.error.toString()} />;
  }
}
