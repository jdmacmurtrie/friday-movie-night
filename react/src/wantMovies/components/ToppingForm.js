import React from 'react';

const ToppingForm = props => (
  <form>
    <div className="container">
      <div className="row checkbox-panal">
        <label className="check-box">
          <input type="checkbox"
            value="Extra Cheese"
            name="Extra Cheese"
            onChange={props.handleChange}
          />
          <span>Extra Cheese</span>
        </label>

        <label className="check-box">
          <input type="checkbox"
            value="Pepperoni"
            name="Pepperoni"
            onChange={props.handleChange}
          />
          <span>Pepperoni</span>
        </label>

        <label className="check-box">
          <input type="checkbox"
            value="Mushroom"
            name="Mushroom"
            onChange={props.handleChange}
          />
          <span>Mushroom</span>
        </label>

        <label className="check-box">
          <input type="checkbox"
            value="Pineapple"
            name="Pineapple"
            onChange={props.handleChange}
          />
          <span>Pineapple</span>
        </label>

        <label className="check-box">
          <input type="checkbox"
            value="Bacon"
            name="Bacon"
            onChange={props.handleChange}
          />
          <span>Bacon</span>
        </label>

        <label className="check-box">
          <input type="checkbox"
            value="Olives"
            name="Olives"
            onChange={props.handleChange}
          />
          <span>Olives</span>
        </label>

        <label className="check-box">
          <input type="checkbox"
            value="Ham"
            name="Ham"
            onChange={props.handleChange}
          />
          <span>Ham</span>
        </label>

        <label className="check-box">
          <input type="checkbox"
            value="Grilled Chicken"
            name="Grilled Chicken"
            onChange={props.handleChange}
          />
          <span>Grilled Chicken</span>
        </label>

        <label className="check-box">
          <input type="checkbox"
            value="Green Pepper"
            name="Green Pepper"
            onChange={props.handleChange}
          />
          <span>Green Pepper</span>
        </label>

        <label className="check-box">
          <input type="checkbox"
            value="Sausage"
            name="Sausage"
            onChange={props.handleChange}
          />
          <span>Sausage</span>
        </label>
      </div>
    </div>
  </form>
);

export default ToppingForm
