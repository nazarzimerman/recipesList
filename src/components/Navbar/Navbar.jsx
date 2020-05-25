import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink to="/" className={styles.link}>
            Menu
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/" className={styles.link}>
            Recipe
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/" className={styles.link}>
            Video
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/" className={styles.link}>
            Tutorial
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
