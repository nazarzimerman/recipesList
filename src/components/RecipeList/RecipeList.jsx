import React from "react";
import styles from "./RecipeList.module.css";
import RecipeService from "../../services/RecipeService.js";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import LoadMore from "../LoadMore/LoadMore.jsx";

class RecipeList extends React.Component {
    state = {
        recipes: [],
        visibleRecipeCount: 4,
    };

    componentDidMount() {
        const recipeService = new RecipeService();
        let recipes = recipeService.getAll();
        this.setState({recipes: recipes});
    }

    renderRecipe = (el) => {
        return (
            <div className={styles.container}>
                <Link className={styles.link} to={"/" + el.id}>
                    <div className={styles.imgWrapper}>
                        <img className={styles.img} src={el.img}/>
                    </div>
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
                </Link>
            </div>
        );
    };

    handleRecipeSearch = (value) => {
        this.setState({search: value})
    };

    handleLoadRecipeClick = () => {
        this.setState({visibleRecipeCount: this.state.visibleRecipeCount + 4})
    };


    render() {
        let filteredRecipes = this.state.recipes.filter(el => {
            return el.title.toLowerCase().includes(this.props.search.toLowerCase())
        });

        const fourFilterRecipes = filteredRecipes.slice(0, this.state.visibleRecipeCount);

        return (
            <div className={styles.headerContainer}>

                {fourFilterRecipes.map(this.renderRecipe)}
                {(filteredRecipes.length > this.state.visibleRecipeCount) && <LoadMore onClick={this.handleLoadRecipeClick}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        search: state.search.term
    }
};


export default connect(mapStateToProps)(RecipeList);
