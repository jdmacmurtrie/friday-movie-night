import React from "react";
import { genres } from "../../constants";
import PropTypes from "prop-types";

export const MovieDropdown = props => {
  const genreOptions = genres.map(genre => (
    <option key={genre} value={genre}>
      {genre}
    </option>
  ));

  return (
    <select name="genres" onChange={props.handleChangeGenre}>
      <option value={props.genreValue}>Genre</option>
      {genreOptions}
    </select>
  );
};

MovieDropdown.propTypes = {
  genreValue: PropTypes.string,
  handleChangeGenre: PropTypes.func
};
