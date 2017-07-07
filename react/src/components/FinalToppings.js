import React, { Component } from 'react';

const FinalToppings = props => {
  let toppings
  if(props.toppings) {
   toppings= props.toppings.map(topping => {
    return(
      <li>
        {topping.name}
      </li>
    )
  })
}
  return (
    <ul>
      {toppings}
    </ul>
  );
}

export default FinalToppings
