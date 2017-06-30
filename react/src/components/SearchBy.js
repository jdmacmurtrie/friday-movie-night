import React from 'react';

const SearchBy = props => {
  return (
    <div>
      <form >
        <label>Genre</label>
        <input type="radio"
          value="genre"
          name="radio"
          onClick={props.handleChangeSearch}
          defaultChecked
          />

        <label>Title</label>
        <input type="radio"
          value="title"
          name="radio"
          onClick={props.handleChangeSearch}
          />
      </form>
    </div>
  );
}

export default SearchBy
