import { all } from "redux-saga/effects";
import { watchFetchMovieRecommendations } from "./wantMovies/sagas";

export default function* rootSaga() {
  yield all([watchFetchMovieRecommendations()]);
}
