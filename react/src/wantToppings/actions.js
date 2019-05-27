export const ActionKeys = {
  SELECT_MOVIE_GENRE: "SELECT_MOVIE_GENRE",
  CLEAR_MOVIE_GENRE: "CLEAR_MOVIE_GENRE",
  FETCH_TOPPING_RECOMMENDATIONS_REQUEST: "FETCH_TOPPING_RECOMMENDATIONS_REQUEST",
  FETCH_TOPPING_RECOMMENDATIONS_SUCCESS: "FETCH_TOPPING_RECOMMENDATIONS_SUCCESS",
  FETCH_TOPPING_RECOMMENDATIONS_FAILURE: "FETCH_TOPPING_RECOMMENDATIONS_FAILURE",
  CLEAR_TOPPING_RECOMMENDATIONS: "CLEAR_TOPPING_RECOMMENDATIONS"
};

export const actions = {
  selectMovieGenre: function selectMovieGenre(topping) {
    return {
      type: ActionKeys.SELECT_MOVIE_GENRE,
      topping
    };
  },
  clearMovieGenre: function clearMovieGenre() {
    return {
      type: ActionKeys.CLEAR_MOVIE_GENRE
    };
  },
  fetchToppingRecommendationRequest: function fetchToppingRecommendationRequest(url) {
    return { type: ActionKeys.FETCH_TOPPING_RECOMMENDATIONS_REQUEST, url };
  },
  fetchToppingRecommendationSuccess: function fetchToppingRecommendationSuccess(movies) {
    return {
      type: ActionKeys.FETCH_TOPPING_RECOMMENDATIONS_SUCCESS,
      payload: movies
    };
  },
  fetchToppingRecommendationFailure: function fetchToppingRecommendationFailure(error) {
    return { type: ActionKeys.FETCH_TOPPING_RECOMMENDATIONS_FAILURE, error };
  },
  clearToppingRecommendations: function clearToppingRecommendations() {
    return {
      type: ActionKeys.CLEAR_TOPPING_RECOMMENDATIONS
    };
  }
};
