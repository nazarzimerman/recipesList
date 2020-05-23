import { RECIPE_LIST_DATA } from "../constants/recipes";


const RecipeService = function () {
  return {
    getAll: function () {
      return RECIPE_LIST_DATA;
    },

    getById: function (id) {
      return RECIPE_LIST_DATA.find(el => el.id === id)
    },
  };
};

export default RecipeService;