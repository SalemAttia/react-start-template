import React, { Component } from "react";
import { Intro } from "../../Components";
import PropTypes from "prop-types";
import "../../assets/home.css"

class Home extends Component {
  constructor() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Intro />
      </div>
    );
  }
}

Home.propTypes = {
  lang: PropTypes.string,
};

export default Home;