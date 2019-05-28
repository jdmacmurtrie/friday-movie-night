import { ActionKeys } from "./actions";
import { combineReducers } from "redux";

const initialTitleGenre = {
  title: "",
  genre: "Genre",
  chooseByGenre: false
};

export const titleGenre = (state = initialTitleGenre, action) => {
  switch (action.type) {
    case ActionKeys.ADD_TITLE:
      return Object.assign({}, state, {
        title: action.title
      });
    case ActionKeys.ADD_GENRE:
      return Object.assign({}, state, {
        genre: action.genre
      });
    case ActionKeys.CHOOSE_BY_GENRE:
      return Object.assign({}, state, {
        chooseByGenre: action.chooseByGenre
      });
    case ActionKeys.CLEAR_TITLE_GENRE:
      return Object.assign({}, state, initialTitleGenre);
    default:
      return state;
  }
};

const initialToppingRecommendations = {
  toppings: []
};

export const toppingRecommendations = (state = initialToppingRecommendations, action) => {
  switch (action.type) {
    case ActionKeys.FETCH_TOPPING_RECOMMENDATIONS_SUCCESS:
      return Object.assign({}, state, {
        toppings: action.toppings.toppings
      });
    case ActionKeys.FETCH_TOPPING_RECOMMENDATIONS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        toppings: initialToppingRecommendations
      });
    case ActionKeys.CLEAR_TOPPING_RECOMMENDATIONS:
      return Object.assign({}, state, initialToppingRecommendations);
    default:
      return state;
  }
};

export const getToppings = combineReducers({
  titleGenre,
  toppingRecommendations
});
