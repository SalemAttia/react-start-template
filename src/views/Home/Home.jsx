import React, { Component } from "react";
import { Intro } from "./components";
import PropTypes from "prop-types";

class Home extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <>
        <Intro />
      </>
    );
  }
}

Home.propTypes = {
  lang: PropTypes.string,
};

export default Home;