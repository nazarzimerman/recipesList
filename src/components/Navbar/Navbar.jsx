import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink to="/" className={styles.link}>
            OPPSKRIFTER
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/" className={styles.link}>
            TRINN-FOR-TRINN-VIDEO
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/" className={styles.link}>
            ARTIKLER
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/" className={styles.link}>
            POPULÆRT NÅ
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
