import { takeLatest, call, put } from "redux-saga/effects";
import { ActionKeys } from "./actions";
import { fetchMovies } from "./utils/api";

function* fetchMovieRecommendations(action) {
  try {
    const movies = yield call(fetchMovies, action.url);
    yield put({
      type: ActionKeys.FETCH_MOVIE_RECOMMENDATIONS_SUCCESS,
      movies
    });
  } catch (error) {
    yield put({ type: ActionKeys.FETCH_MOVIE_RECOMMENDATIONS_FAILURE, error });
  }
}

export function* watchFetchMovieRecommendations() {
  yield takeLatest(ActionKeys.FETCH_MOVIE_RECOMMENDATIONS_REQUEST, fetchMovieRecommendations);
}
