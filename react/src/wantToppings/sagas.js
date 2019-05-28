import { call, put, takeLatest } from "redux-saga/effects";
import { fetchRecommendations } from "../utils/api";
import { ActionKeys } from "./actions";

function* fetchToppingRecommendations(action) {
  try {
    const toppings = yield call(fetchRecommendations, action.url);
    yield put({
      type: ActionKeys.FETCH_TOPPING_RECOMMENDATIONS_SUCCESS,
      toppings
    });
  } catch (error) {
    yield put({ type: ActionKeys.FETCH_TOPPING_RECOMMENDATIONS_FAILURE, error });
  }
}

export function* watchFetchToppingRecommendations() {
  yield takeLatest(ActionKeys.FETCH_TOPPING_RECOMMENDATIONS_REQUEST, fetchToppingRecommendations);
}
