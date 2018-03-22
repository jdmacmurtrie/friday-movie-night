import React from 'react';

const SearchBy = props => {
  return (
    <div className="radio-button-wrapper">
      <form>
        <label className="title-radio">
          <input type="radio"
          value="title"
          name="radio"
          onClick={props.handleChangeSearch}
          defaultChecked
          />
          Title
        </label>
        <label className="genre-radio">
          <input type="radio"
            value="genre"
            name="radio"
            onClick={props.handleChangeSearch}
          />
          Genre
        </label>

      </form>
    </div>
  );
}

export default SearchBy
