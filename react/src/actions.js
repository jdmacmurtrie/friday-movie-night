export const ActionKeys = {
  ADD_TO_TOPPINGS_LIST: "ADD_TO_TOPPINGS_LIST",
  REMOVE_FROM_TOPPINGS_LIST: "REMOVE_FROM_TOPPINGS_LIST"
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
  }
};
