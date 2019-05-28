export const ActionKeys = {
  ADD_TITLE: "ADD_TITLE",
  ADD_GENRE: "ADD_GENRE",
  CHOOSE_BY_GENRE: "CHOOSE_BY_GENRE",
  CLEAR_TITLE_GENRE: "CLEAR_TITLE_GENRE",
  FETCH_TOPPING_RECOMMENDATIONS_REQUEST: "FETCH_TOPPING_RECOMMENDATIONS_REQUEST",
  FETCH_TOPPING_RECOMMENDATIONS_SUCCESS: "FETCH_TOPPING_RECOMMENDATIONS_SUCCESS",
  FETCH_TOPPING_RECOMMENDATIONS_FAILURE: "FETCH_TOPPING_RECOMMENDATIONS_FAILURE",
  CLEAR_TOPPING_RECOMMENDATIONS: "CLEAR_TOPPING_RECOMMENDATIONS"
};

export const actions = {
  addTitle: function addTitle(title) {
    return {
      type: ActionKeys.ADD_TITLE,
      title
    };
  },
  addGenre: function addGenre(genre) {
    return {
      type: ActionKeys.ADD_GENRE,
      genre
    };
  },
  chooseByGenre: function chooseByGenre(chooseByGenre) {
    return {
      type: ActionKeys.CHOOSE_BY_GENRE,
      chooseByGenre
    };
  },
  clearTitleGenre: function clearTitleGenre() {
    return {
      type: ActionKeys.CLEAR_TITLE_GENRE
    };
  },
  fetchToppingRecommendationRequest: function fetchToppingRecommendationRequest(url) {
    return { type: ActionKeys.FETCH_TOPPING_RECOMMENDATIONS_REQUEST, url };
  },
  fetchToppingRecommendationSuccess: function fetchToppingRecommendationSuccess(toppings) {
    return {
      type: ActionKeys.FETCH_TOPPING_RECOMMENDATIONS_SUCCESS,
      payload: toppings
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
