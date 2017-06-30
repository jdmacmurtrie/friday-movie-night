import React from 'react';

const MovieForm = props => {
  return (
    <div>
      <h2>Please enter your movie:</h2>
      <p>(Try to be as exact as possible)</p>
      <form>
        <input
          type="text"
          onChange={props.handleChangeText}
        />
      </form>
    </div>
  );
}

export default MovieForm
