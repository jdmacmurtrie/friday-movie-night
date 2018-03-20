import React from 'react';

const FinalMovie = props => {
  let altText = `${props.movie.title}: ${props.movie.description}`
  return (
    <li className="movie-poster">
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.movie.poster}`}
        alt={altText}
      />
    </li>
  );
}

export default FinalMovie
