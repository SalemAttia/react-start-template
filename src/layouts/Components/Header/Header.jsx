import React from "react";
// import PropTypes from "prop-types";
import styles from "./assets/Header.module.css";

const Header = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.headercontainer}>
      <a href="/">
        <img src='' alt="logo" />
      </a>
      <ul className={styles.navsection}>
        <li>
          <button type="button" className={styles.headernavbutton}>
            <img src='' alt="nav button" />
          </button>
        </li>
        
        <li>
          <select className={styles.select}>
            <option value="0">EN</option>
            <option value="1">AR</option>
          </select>
        </li>
        <li>
          <button type="button" className={styles.loginButton}>
            Login
          </button>
        </li>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
