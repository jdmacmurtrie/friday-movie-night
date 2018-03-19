import React from 'react';

const FinalToppings = props => {
  let toppings
  if(props.toppings) {
   toppings = props.toppings.map(topping => {
    return(
      <li className="topping">
        <img src={topping.image} height="200" width="200"/>
        <br/>
        <div>{topping.name}</div>
      </li>
    )
  })
}
  return (
    <ul className="toppings-list-container">
      {toppings}
    </ul>
  );
}

export default FinalToppings
