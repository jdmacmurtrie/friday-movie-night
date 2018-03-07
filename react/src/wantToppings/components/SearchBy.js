import React from 'react';

const SearchBy = props => {
  return (
    <div className="row search-by">
      <form >
        <div className="small-6 columns genre">
          <label>Genre</label>
          <input type="radio"
            value="genre"
            name="radio"
            onClick={props.handleChangeSearch}
            defaultChecked
          />
        </div>
      
        <div className="small-6 columns title">
        <label>Title</label>
          <input type="radio"
            value="title"
            name="radio"
            onClick={props.handleChangeSearch}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBy
