import React from "react";
import styles from "./Indredients.module.css"


class Ingredients extends React.Component {
 

  render(){
    return(
    <div className={styles.ingredients}>
      {this.props.data.map( (el) => <ul>{el.title}: {el.amount*this.props.persons} {el.units}</ul>)}
    </div>
    )
  }


}


export default Ingredients;
