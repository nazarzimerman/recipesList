import React from "react";
import styles from "./RecipeList.module.css";
import RecipeService from "../../services/RecipeService.js";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

class RecipeList extends React.Component {
  state = {
    recipes: [],
    search: ""
  };

  componentDidMount() {
    const recipeService = new RecipeService();
    let recipes = recipeService.getAll();
    this.setState({ recipes: recipes });
  }

  renderRecipe = (el) => {
    return (
      <Link className={styles.link} to={"/" + el.id}>
        <div className={styles.container}>
          <img className={styles.img} src={el.img} />
          <div className={styles.box}>
            <h2 className={styles.title}>{el.title}</h2>
            <ul className={styles.ingredients}>
              {el.ingredientsList.map((el) => (
                <li className={styles.list}>
                  {el.title}
                  {el.amount}
                  {el.units}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    );
  };

  handleRecipeSearch = (value) => {
    this.setState({search:value})
  };




  render() {
      let  filteredRecipes =  this.state.recipes.filter(el => (el.title.toLowerCase().includes(this.state.search.toLowerCase()) ))
    return (
      <div className={styles.headerContainer}>
        <Search onChange={this.handleRecipeSearch}  />
        {filteredRecipes.map(this.renderRecipe)}
      </div>
    );
  }
}

export default RecipeList;
