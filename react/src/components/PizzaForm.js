import React from 'react';

const PizzaForm = props => {

  return (
    <form className="checkbox-panal">
      <div className="small-6 medium-3 columns">
        <label>Extra Cheese</label>
      </div>
      <div className="small-6 medium-3 columns">
        <input type="checkbox"
          value="Extra Cheese"
          name="Extra Cheese"
          onChange={props.handleChange}/>
      </div>

      <div className="small-6 medium-3 columns">
        <label>Pepperoni</label>
      </div>
      <div className="small-6 medium-3 columns">
        <input type="checkbox"
          value="Pepperoni"
          name="Pepperoni"
          onChange={props.handleChange}/>
      </div>

      <div className="small-6 medium-3 columns">
        <label>Sausage</label>
      </div>
      <div className="small-6 medium-3 columns">
        <input type="checkbox"
          value="Sausage"
          name="Sausage"
          onChange={props.handleChange}/>
      </div>

      <div className="small-6 medium-3 columns">
        <label>Ham</label>
      </div>
      <div className="small-6 medium-3 columns">
        <input type="checkbox"
          value="Ham"
          name="Ham"
          onChange={props.handleChange}/>
      </div>

      <div className="small-6 medium-3 columns">
        <label>Pineapple</label>
      </div>
      <div className="small-6 medium-3 columns">
        <input type="checkbox"
          value="Pineapple"
          name="Pineapple"
          onChange={props.handleChange}/>
      </div>

      <div className="small-6 medium-3 columns">
        <label>Green Pepper</label>
      </div>
      <div className="small-6 medium-3 columns">
        <input type="checkbox"
          value="Green Pepper"
          name="Green Pepper"
          onChange={props.handleChange}/>
      </div>

      <div className="small-6 medium-3 columns">
        <label>Mushroom</label>
      </div>
      <div className="small-6 medium-3 columns">
        <input type="checkbox"
          value="Mushroom"
          name="Mushroom"
          onChange={props.handleChange}/>
      </div>

      <div className="small-6 medium-3 columns">
        <label>Grilled Chicken</label>
      </div>
      <div className="small-6 medium-3 columns">
        <input type="checkbox"
          value="Grilled Chicken"
          name="Grilled Chicken"
          onChange={props.handleChange}/>
      </div>

      <div className="small-6 medium-3 columns">
        <label>Olives</label>
      </div>
      <div className="small-6 medium-3 columns">
        <input type="checkbox"
          value="Olives"
          name="Olives"
          onChange={props.handleChange}/>
      </div>

      <div className="small-6 medium-3 columns">
        <label>Bacon</label>
      </div>
      <div className="small-6 medium-3 columns">
        <input type="checkbox"
          value="Bacon"
          name="Bacon"
          onChange={props.handleChange}/>
      </div>
    </form>
  );
}

export default PizzaForm
