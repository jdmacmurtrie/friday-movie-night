import React, { Component } from 'react';

const FinalMovies = props => {
  let movies

  if(props.movies) {
    debugger
    movies= props.movies.map(movie => {
      return(
        <li>
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster}`}
            alt={`${movie.title}: ${movie.description}`}
            className="poster">
          </img>
        </li>
      )
    })
  }
  return (
    <ul>
      {movies}
    </ul>
  );
}

export default FinalMovies
