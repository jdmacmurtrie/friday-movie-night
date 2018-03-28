import React from 'react';

const ComboTable = props => {
  return (
    <tr>
      <td className="genre-half">{props.combo.genre}</td>
      <td className="topping-half">{props.combo.topping}</td>
      <td className="delete-combo-button">
        <button onClick={props.handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default ComboTable
