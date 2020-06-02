import React from "react";
import Counter from "../Counter/Counter";
import Ingredients from "../Ingredients/IngredientsList";
import RecipeService from "../../services/RecipeService";
import styles from "./Recipe.module.css"

class Recipe extends React.Component {


    state = {
        persons: 0,
        recipe: {ingredientsList: []}
    }

    componentDidMount() {
        const recipeService = new RecipeService()
        let recipe = recipeService.getById(+this.props.match.params.id)
        this.setState({recipe: recipe})
    }

    handlePersonsChange = (persons) => {
        this.setState({persons: persons})
    }


    render() {
        const divStyle = {
            backgroundImage: "url(" + this.state.recipe.img + ")"
        };


        console.log(this.state.recipe.img);
        return (
            <div className={styles.container}>
                <div className={styles.imgBg} style={divStyle}>
                    <h2 className={styles.title}>{this.state.recipe.title}</h2>
                    <div className={styles.backgroundColor}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.counterBox}>
                        <h2>Persons</h2>
                        <Counter persons={this.state.persons} onChange={this.handlePersonsChange}/>
                    </div>
                    <Ingredients data={this.state.recipe.ingredientsList} persons={this.state.persons}/>
                    <div className={styles.tutorial}>
                        {this.state.recipe.tutorial}
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;
