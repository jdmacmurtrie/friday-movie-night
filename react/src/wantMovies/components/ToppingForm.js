import React from "react";
import PropTypes from "prop-types";
import { toppingsList } from "../../constants";

export const ToppingForm = props => {
  const checkboxes = toppingsList.map(topping => (
    <label className="check-box" key={topping}>
      <input
        type="checkbox"
        value={topping}
        name={topping}
        checked={props.chosenToppings.includes(topping)}
        onChange={props.handleChange}
      />
      <span>{topping}</span>
    </label>
  ));

  return <div className="row checkbox-panal">{checkboxes}</div>;
};

ToppingForm.propTypes = {
  handleChange: PropTypes.func
};
