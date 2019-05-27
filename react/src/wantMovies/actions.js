export const ActionKeys = {
  ADD_TO_TOPPINGS_LIST: "ADD_TO_TOPPINGS_LIST",
  REMOVE_FROM_TOPPINGS_LIST: "REMOVE_FROM_TOPPINGS_LIST",
  CLEAR_TOPPINGS_LIST: "CLEAR_TOPPINGS_LIST",
  FETCH_MOVIE_RECOMMENDATIONS_REQUEST: "FETCH_MOVIE_RECOMMENDATIONS_REQUEST",
  FETCH_MOVIE_RECOMMENDATIONS_SUCCESS: "FETCH_MOVIE_RECOMMENDATIONS_SUCCESS",
  FETCH_MOVIE_RECOMMENDATIONS_FAILURE: "FETCH_MOVIE_RECOMMENDATIONS_FAILURE",
  CLEAR_MOVIE_RECOMMENDATIONS: "CLEAR_MOVIE_RECOMMENDATIONS"
};

export const actions = {
  addToppings: function addTopping(topping) {
    return {
      type: ActionKeys.ADD_TO_TOPPINGS_LIST,
      topping
    };
  },
  removeTopping: function removeTopping(topping) {
    return {
      type: ActionKeys.REMOVE_FROM_TOPPINGS_LIST,
      topping
    };
  },
  clearToppings: function clearToppings() {
    return {
      type: ActionKeys.CLEAR_TOPPINGS_LIST
    };
  },
  fetchMovieRecommendationRequest: function fetchMovieRecommendationRequest(url) {
    return { type: ActionKeys.FETCH_MOVIE_RECOMMENDATIONS_REQUEST, url };
  },
  fetchMovieRecommendationSuccess: function fetchMovieRecommendationSuccess(movies) {
    return { type: ActionKeys.FETCH_MOVIE_RECOMMENDATIONS_SUCCESS, payload: movies };
  },
  fetchMovieRecommendationFailure: function fetchMovieRecommendationFailure(error) {
    return { type: ActionKeys.FETCH_MOVIE_RECOMMENDATIONS_FAILURE, error };
  },
  clearMovieRecommendations: function clearMovieRecommendations() {
    return {
      type: ActionKeys.CLEAR_MOVIE_RECOMMENDATIONS
    };
  }
};
