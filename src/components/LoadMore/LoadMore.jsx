import React from "react";
import styles from "./LoadMore.module.css"

class LoadMore extends React.Component{



    render(){
        return(
            <div>
            <button className={styles.button} onClick={this.props.onClick}>Load More</button>
            </div>
        )
    }
}

export default LoadMore ;