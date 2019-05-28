import { combineReducers } from "redux";
import { getMovies } from "./wantMovies/reducers";
import { getToppings } from "./wantToppings/reducers";

export const reducers = combineReducers({
  getMovies,
  getToppings
});
