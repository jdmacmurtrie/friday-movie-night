import React from "react";
import PropTypes from "prop-types";
import { toppings } from "../../constants";

export const ToppingForm = props => {
  const checkboxes = toppings.map(topping => (
    <label className="check-box" key={topping}>
      <input
        type="checkbox"
        value={topping}
        name={topping}
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
