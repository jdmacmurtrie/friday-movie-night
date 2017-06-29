import React, { Component } from 'react';

const Topping = props => {
  let toppings = props.toppings.map(topping => {
    return(
      <li>
        {topping}
      </li>
    )
  })
  return (
    <ul>
      {toppings}
    </ul>
  );
}

export default Topping
