import React from 'react';

const SuggestionForm = props => {
  // because History by itself is a no-no
let history = "History"

  return (
    <div className="combo-selections small-12 columns">
    <div>Select a Genre</div>
      <select name="genres"
        onChange={props.handleChangeGenre}
        className="select-box">
        <option value="none">(select a genre)</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Family">Family</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Mystery">Mystery</option>
        <option value="Western">Western</option>
        <option value="Adventure">Adventure</option>
        <option value="Documentary">Documentary</option>
        <option value="Animation">Animation</option>
        <option value="Thriller">Thriller</option>
        <option value="Drama">Drama</option>
        <option value="War">War</option>
        <option value="Music">Musical</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="History">{history}</option>
      </select>

      <div>Select a Topping</div>
      <select name="toppings"
        onChange={props.handleChangeTopping1}
        className="select-box">
        <option value="none">(select a genre)</option>
        <option value="Extra Cheese">Extra Cheese</option>
        <option value="Pepperoni">Pepperoni</option>
        <option value="Sausage">Sausage</option>
        <option value="Ham">Ham</option>
        <option value="Pineapple">Pineapple</option>
        <option value="Green Pepper">Green Pepper</option>
        <option value="Mushroom">Mushroom</option>
        <option value="Grilled Chicken">Grilled Chicken</option>
        <option value="Olives">Olives</option>
        <option value="Bacon">Bacon</option>
      </select>

      <div>Select a  Second Topping (optional)</div>
      <select name="toppings"
        onChange={props.handleChangeTopping1}
        className="select-box">
        <option value="none">(select a genre)</option>
        <option value="Extra Cheese">Extra Cheese</option>
        <option value="Pepperoni">Pepperoni</option>
        <option value="Sausage">Sausage</option>
        <option value="Ham">Ham</option>
        <option value="Pineapple">Pineapple</option>
        <option value="Green Pepper">Green Pepper</option>
        <option value="Mushroom">Mushroom</option>
        <option value="Grilled Chicken">Grilled Chicken</option>
        <option value="Olives">Olives</option>
        <option value="Bacon">Bacon</option>
      </select>
    </div>
  );
}

export default SuggestionForm
