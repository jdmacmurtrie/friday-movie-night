import { ActionKeys } from "./actions";
import { combineReducers } from "redux";

const initialMovieGenre = {
  movieGenre: ""
};

export const movieGenre = (state = initialMovieGenre, action) => {
  switch (action.type) {
    case ActionKeys.SELECT_MOVIE_GENRE:
      return Object.assign({}, state, {
        movieGenre: [...state.movieGenre, action.movieGenre]
      });
    case ActionKeys.CLEAR_MOVIE_GENRE:
      return Object.assign({}, state, initialMovieGenre);
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
  movieGenre,
  toppingRecommendations
});
