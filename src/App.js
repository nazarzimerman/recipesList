import React from "react";
import RecipeList from "./components/RecipeList/RecipeList.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import Recipe from "./components/Recipe/Recipe.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div>
                    <Route path="/" component={RecipeList} exact/>
                    <Route path="/:id" component={Recipe}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
