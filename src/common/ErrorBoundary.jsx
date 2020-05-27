import React, { Component } from "react"
import PropTypes from "prop-types"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasError: false
    }
  }
  
  componentDidCatch(error, info) {
    console.log("eror", error);
    console.log("info", info);
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if(hasError) {
      return <p style={{ margin: "6% auto", textAlign: "center"}}>SomeThing went Wrong!!! please refresh the page</p>;
    }
    return children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary
