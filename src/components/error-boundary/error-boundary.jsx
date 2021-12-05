import { Component } from "react";
import ErrorMessage from "../error-message/error-message";

export default class ErrorBoundary extends Component {
  state = {
    error: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage/>
    }

    return this.props.children;
  }
}