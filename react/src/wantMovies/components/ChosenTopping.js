import React from 'react';

const ChosenTopping = props => {
  debugger
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

export default ChosenTopping
