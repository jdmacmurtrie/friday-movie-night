import React from 'react';

const PizzaForm = props => (
    <form>
      <div className="">
        <label>Extra Cheese</label>
      </div>
      <div className="">
        <input type="checkbox"
          value="Extra Cheese"
          name="Extra Cheese"
          onChange={props.handleChange}
        />
      </div>

      <div className="">
        <label>Pepperoni</label>
      </div>
      <div className="">
        <input type="checkbox"
          value="Pepperoni"
          name="Pepperoni"
          onChange={props.handleChange}
        />
      </div>

      <div className="">
        <label>Sausage</label>
      </div>
      <div className="">
        <input type="checkbox"
          value="Sausage"
          name="Sausage"
          onChange={props.handleChange}
        />
      </div>

      <div className="">
        <label>Ham</label>
      </div>
      <div className="">
        <input type="checkbox"
          value="Ham"
          name="Ham"
          onChange={props.handleChange}
        />
      </div>

      <div className="">
        <label>Pineapple</label>
      </div>
      <div className="">
        <input type="checkbox"
          value="Pineapple"
          name="Pineapple"
          onChange={props.handleChange}
        />
      </div>

      <div className="">
        <label>Green Pepper</label>
      </div>
      <div className="">
        <input type="checkbox"
          value="Green Pepper"
          name="Green Pepper"
          onChange={props.handleChange}
        />
      </div>

      <div className="">
        <label>Mushroom</label>
      </div>
      <div className="">
        <input type="checkbox"
          value="Mushroom"
          name="Mushroom"
          onChange={props.handleChange}
        />
      </div>

      <div className="">
        <label>Grilled Chicken</label>
      </div>
      <div className="">
        <input type="checkbox"
          value="Grilled Chicken"
          name="Grilled Chicken"
          onChange={props.handleChange}
        />
      </div>

      <div className="">
        <label>Olives</label>
      </div>
      <div className="">
        <input type="checkbox"
          value="Olives"
          name="Olives"
          onChange={props.handleChange}
        />
      </div>

      <div className="">
        <label>Bacon</label>
      </div>
      <div className="">
        <input type="checkbox"
          value="Bacon"
          name="Bacon"
          onChange={props.handleChange}
        />
      </div>
    </form>
  );

export default PizzaForm
