import React from "react";
import { genres } from "../../constants";

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
