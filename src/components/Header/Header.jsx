import React from "react";
import styles from "./Header.module.css";
import Search from "../Search/Search.jsx"

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <Search onChange={this.handleRecipeSearch}/>
            </header>
        )
    }
}

export default Header;