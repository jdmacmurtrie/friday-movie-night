import PropTypes from "prop-types";
import React from "react";

export const MovieForm = ({ value, handleChangeText }) => {
  return (
    <div className="movie-input-wrapper">
      <input
        value={value}
        className="movie-field title"
        type="text"
        onChange={handleChangeText}
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
