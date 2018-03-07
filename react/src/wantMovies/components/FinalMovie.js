import React from 'react';

const FinalMovie = props => {
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.movie.poster}`}
        alt={`${props.movie.title}: ${props.movie.description}`}
        className="poster">
      </img>
    </li>
  );
}

export default FinalMovie
