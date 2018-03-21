import React from 'react';

const ComboTable = props => {
  return (
    <tr>
      <td>{props.combo.genre}</td>
      <td>{props.combo.topping}</td>
      <td className="delete-button">
        <button onClick={props.handleDelete}>Delete</button>
      </td>
    </tr>

  );
}

export default ComboTable
