import React from 'react';

const FinalToppings = props => {
  let toppings
  if(props.toppings) {
   toppings= props.toppings.map(topping => {
    return(
      <img className="topping-name" src={topping.image}></img>
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
