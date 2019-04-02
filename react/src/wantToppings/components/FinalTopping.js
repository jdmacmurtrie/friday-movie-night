import React from 'react';

const FinalTopping = props => (
  <li className="topping">
    <img src={props.topping.image} height="200" width="200"/>
    <br/>
    <div>{props.topping.name}</div>
  </li>
);

export default FinalTopping
