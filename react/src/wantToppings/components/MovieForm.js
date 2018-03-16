import React from 'react';

const MovieForm = props => {
  return (
    <div className="movie-input-wrapper">
      <form onSubmit={props.handleFormSubmit}>
        <input
          className="movie-field title"
          type="text"
          onChange={props.handleChangeText}
          autoFocus
          placeholder="How about Pirates of the Caribbean?"
        />
      </form>
    </div>
  );
}

export default MovieForm
