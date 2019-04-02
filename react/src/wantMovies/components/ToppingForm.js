import React from "react";
import { toppings } from "../../constants";

export const ToppingForm = props => (
  <div className="row checkbox-panal">
    {toppings.map(topping => {
      <label className="check-box">
        <input
          type="checkbox"
          value={topping}
          name={topping}
          onChange={props.handleChange}
        />
        <span>{topping}</span>
      </label>;
    })}
  </div>
);
