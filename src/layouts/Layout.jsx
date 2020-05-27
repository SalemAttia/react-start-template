import React, { Component } from "react"
import counterpart from "counterpart";
import PropTypes from "prop-types";
import { ErrorBoundary } from "../common"
import { Header } from "./Components";
import en from "../lang/en";
import ar from "../lang/ar";
import "./assets/variables.css";
import "./assets/Layout.css";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("ar", ar);

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  componentDidMount() {
    localStorage.setItem("lang", "en");
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
    const {children} = this.props;
    const { hasError} = this.state;
  
    if(hasError) {
      return <p>Something went wrong please refresh the page</p>
    }
  
    return (
      <ErrorBoundary>
        <Header />
        {children}
      </ErrorBoundary>
    )
   
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  match: PropTypes.object,
  location: PropTypes.object
};

export default Layout;
