import React from "react";
import styles from "./Counter.module.css";

class Counter extends React.Component {
  increment = () => {
    let userAmount = this.props.persons + 1;
    this.props.onChange(userAmount);
  };

  decrement = () => {
    if (this.props.persons > 0) {
      let userAmount = this.props.persons - 1;
      this.props.onChange(userAmount);
    }
  };

  render() {
    return (
      <div>
        <div className={styles.container}>
          <button className={styles.button} onClick={this.decrement}>
            -
          </button>
          <div className={styles.number}>{this.props.persons}</div>
          <button className={styles.button} onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
