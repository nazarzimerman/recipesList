import React from "react";
import Counter from "../Counter/Counter";
import Ingredients from "../Ingredients/IngredientsList";
import RecipeService from "../../services/RecipeService";

class Recipe extends React.Component {
  
  
  state={
    persons: 0,
    recipe: {ingredientsList:[]}
  }

  componentDidMount(){
    const recipeService = new RecipeService()
    let recipe = recipeService.getById(+this.props.match.params.id)
    this.setState({recipe: recipe})
  }

  handlePersonsChange = (persons) => {
    this.setState({persons:persons})
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <img  src={this.state.recipe.img}/>
        <h2>{this.state.recipe.title}</h2>
        <Counter persons={this.state.persons} onChange={this.handlePersonsChange} />
        <Ingredients data={this.state.recipe.ingredientsList} persons={this.state.persons}/>
      </div>
    );
  }
}

export default Recipe;
