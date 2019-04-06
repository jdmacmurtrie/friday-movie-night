import { ActionKeys } from "./actions";

const initialState = {
  toppings: []
};

export const toppings = (state = initialState, action) => {
  switch (action.type) {
    case ActionKeys.ADD_TO_TOPPINGS_LIST:
      return Object.assign({}, state, {
        toppings: [...state.toppings, action.topping]
      });
    case ActionKeys.REMOVE_FROM_TOPPINGS_LIST:
      return Object.assign({}, state, {
        toppings: state.toppings.filter(topping => topping !== action.topping)
      });
    default:
      return state;
  }
};
