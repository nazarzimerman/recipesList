import React from "react";
import style from "./Seacrh.module.css"

class Search extends React.Component {
  search = (event) => {
    const value = event.target.value;
    this.props.onChange(value);
  };

  render() {
    return (
      <div className={style.search}>
        <input className={style.input} type="text" onChange={this.search} />
      </div>
    );
  }
}

export default Search;
