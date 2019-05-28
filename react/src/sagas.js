import { all } from "redux-saga/effects";
import { watchFetchMovieRecommendations } from "./wantMovies/sagas";
import { watchFetchToppingRecommendations } from "./wantToppings/sagas";

export default function* rootSaga() {
  yield all([watchFetchMovieRecommendations(), watchFetchToppingRecommendations()]);
}
