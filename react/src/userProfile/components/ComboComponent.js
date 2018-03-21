import React from 'react';

const ComboComponent = props => {
  return (
    <li className="combo-component">
      <div className="delete-button">
        <button onClick={props.handleDelete}>Delete</button>
      </div>
      {props.combo.genre} -> {props.combo.topping}
    </li>
  );
}

export default ComboComponent
