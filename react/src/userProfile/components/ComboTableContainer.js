export const ComboTableContainer = props => {
  let combos = props.userCombos.map(combo => {
    let handleDelete = () => {
      props.deleteCombo(combo.id);
    };
    return (
      <ComboTable key={combo.id} combo={combo} handleDelete={handleDelete} />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Genre</th>
          <th className="topping-half">Topping</th>
          <th />
        </tr>
      </thead>
      <tbody>{combos}</tbody>
    </table>
  );
};
