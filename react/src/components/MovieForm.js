import React from 'react';

const MovieForm = props => {
  return (
    <div>
      <form>
        <input
          className="movie-field title"
          type="text"
          onChange={props.handleChangeText}
          placeholder="Movie Title"
        />
      </form>
    </div>
  );
}

export default MovieForm
