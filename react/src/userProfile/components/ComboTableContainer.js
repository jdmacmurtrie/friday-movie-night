import React from 'react';
import ComboTable from './ComboTable'

const ComboTableContainer = props => {

  let combos = props.userCombos.map(combo => {
    let handleDelete = () => {
      props.deleteCombo(combo.id)
    }
    return(
        <ComboTable
          key={combo.id}
          combo={combo}
          handleDelete={handleDelete}
        />
      )
    }
  )

  return(
    <table>
      <thead>
        <tr>
          <th>Genre</th>
          <th>Topping</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { combos }
      </tbody>
    </table>
  );
}

export default ComboTableContainer;
