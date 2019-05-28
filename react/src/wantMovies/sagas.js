import { call, put, takeLatest } from "redux-saga/effects";
import { fetchRecommendations } from "../utils/api";
import { ActionKeys } from "./actions";

function* fetchMovieRecommendations(action) {
  try {
    const movies = yield call(fetchRecommendations, action.url);
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
