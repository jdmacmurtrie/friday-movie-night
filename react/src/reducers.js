import { ActionKeys } from "./actions";
import { combineReducers } from "redux";

const initialToppings = {
  toppings: []
};

export const toppings = (state = initialToppings, action) => {
  switch (action.type) {
    case ActionKeys.ADD_TO_TOPPINGS_LIST:
      return Object.assign({}, state, {
        toppings: [...state.toppings, action.topping]
      });
    case ActionKeys.REMOVE_FROM_TOPPINGS_LIST:
      return Object.assign({}, state, {
        toppings: state.toppings.filter(topping => topping !== action.topping)
      });
    default:
      return state;
  }
};

const initialMovieRecommendations = {
  movies: [],
  genre: ""
};

export const movieRecommendations = (state = initialMovieRecommendations, action) => {
  switch (action.type) {
    case ActionKeys.FETCH_MOVIE_RECOMMENDATIONS_SUCCESS:
      return Object.assign({}, state, {
        movies: action.movies.movies,
        genre: action.movies.genre.name
      });
    case ActionKeys.FETCH_MOVIE_RECOMMENDATIONS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        movies: initialMovieRecommendations
      });
    default:
      return state;
  }
};

export const reducers = combineReducers({
  toppings,
  movieRecommendations
});
