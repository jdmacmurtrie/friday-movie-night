import React from 'react';

const MovieDropdown = props => {
let history = "History"
// because History by itself is a no-no
  return (
    <div className="dropdown-wrapper">
      <select name="genres" onChange={props.handleChangeDropdown}>
        <option value="none">(select a genre)</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Family">Family</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Mystery">Mystery</option>
        <option value="Western">Western</option>
        <option value="Adventure">Adventure</option>
        <option value="Documentary">Documentary</option>
        <option value="Animation">Animation</option>
        <option value="Thriller">Thriller</option>
        <option value="Drama">Drama</option>
        <option value="War">War</option>
        <option value="Music">Musical</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="History">{history}</option>
      </select>
    </div>
  );
}

export default MovieDropdown
