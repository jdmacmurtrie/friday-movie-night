import React, { Component } from 'react';

const PizzaForm = props => {

  return (
    <form>
      <label>Extra Cheese</label>
      <input type="checkbox"
        value="Extra Cheese"
        name="Extra Cheese"
        className="checkbox"
        onChange={props.handleChange}/>

      <label>Pepperoni</label>
      <input type="checkbox"
        value="Pepperoni"
        name="Pepperoni"
        className="checkbox"
        onChange={props.handleChange}/>

      <label>Sausage</label>
      <input type="checkbox"
        value="Sausage"
        name="Sausage"
        className="checkbox"
        onChange={props.handleChange}/>

      <label>Ham</label>
      <input type="checkbox"
        value="Ham"
        name="Ham"
        className="checkbox"
        onChange={props.handleChange}/>

      <label>Pineapple</label>
      <input type="checkbox"
        value="Pineapple"
        name="Pineapple"
        className="checkbox"
        onChange={props.handleChange}/>

      <label>Green Pepper</label>
      <input type="checkbox"
        value="Green Pepper"
        name="Green Pepper"
        className="checkbox"
        onChange={props.handleChange}/>

      <label>Mushroom</label>
      <input type="checkbox"
        value="Mushroom"
        name="Mushroom"
        className="checkbox"
        onChange={props.handleChange}/>

      <label>Grilled Chicken</label>
      <input type="checkbox"
        value="Grilled Chicken"
        name="Grilled Chicken"
        className="checkbox"
        onChange={props.handleChange}/>

      <label>Olives</label>
      <input type="checkbox"
        value="Olive"
        name="Olive"
        className="checkbox"
        onChange={props.handleChange}/>

      <label>Bacon</label>
      <input type="checkbox"
        value="Bacon"
        name="Bacon"
        className="checkbox"
        onChange={props.handleChange}/>
    </form>
  );
}

export default PizzaForm
