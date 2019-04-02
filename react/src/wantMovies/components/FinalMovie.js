import React from "react";

export const FinalMovie = props => {
  return (
    <li className="movie-poster">
      <img
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
          props.movie.poster
        }`}
        title={`${props.movie.title}: ${props.movie.description}`}
      />
    </li>
  );
};
