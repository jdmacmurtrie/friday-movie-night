import PropTypes from "prop-types";
import React from "react";

export const MovieForm = props => {
  return (
    <div className="movie-input-wrapper">
      <input
        value={props.value}
        className="movie-field title"
        type="text"
        onChange={props.handleChangeText}
        autoFocus
        placeholder="How about Pirates of the Caribbean?"
      />
    </div>
  );
};

MovieForm.propTypes = {
  value: PropTypes.string,
  handleChangeText: PropTypes.func
};
