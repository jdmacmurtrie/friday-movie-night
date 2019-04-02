import React from "react";
import { toppings } from "../../constants";
import { MovieDropdown } from "../../wantToppings/components/MovieDropdown";

export const ComboForm = props => {
  const toppingOptions = toppings.map(topping => (
    <option value={topping} key={topping}>
      {topping}
    </option>
  ));

  return (
    <div className="all-dropdowns">
      <div className="dropdown">
        <MovieDropdown {...props} />
      </div>
      <div className="dropdown">
        <select name="topping" onChange={props.handleChangeTopping}>
          <option value={props.toppingValue}>Topping</option>
          {toppingOptions}
        </select>
      </div>
    </div>
  );
};
