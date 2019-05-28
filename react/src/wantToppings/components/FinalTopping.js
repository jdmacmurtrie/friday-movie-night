import React from "react";

export const FinalTopping = props => (
  <li className="topping">
    <img src={props.topping.image} height="200" width="200" />
    <br />
    <div>{props.topping.name}</div>
  </li>
);
