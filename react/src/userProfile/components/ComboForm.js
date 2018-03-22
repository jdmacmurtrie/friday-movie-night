import React from 'react';

const ComboForm = props => {
let history = "History"
// because History by itself is a no-no

  return (
    <div className="all-dropdowns">
      <div className="dropdown">
        <select name="genres" onChange={props.handleChangeGenre}>
          <option value={props.genreValue}>Genre</option>
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
      </div>
      <div className="dropdown">
        <select name="topping" onChange={props.handleChangeTopping}>
          <option value={props.toppingValue}>Topping</option>
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
    </div>
  );
}

export default ComboForm
