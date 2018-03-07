import React from 'react';

const ChosenToppings = props => {
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

export default ChosenToppings
