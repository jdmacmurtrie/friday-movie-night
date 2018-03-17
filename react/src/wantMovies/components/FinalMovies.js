import React from 'react';

const FinalMovies = props => {
  let movies

  if(props.movies) {
    movies= props.movies.map(movie => {
      let altText = `${movie.title}: ${movie.description}`
      return(
        <li className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster}`}
            title={altText}>
          </img>
        </li>
      )
    })
  }

  return (
    <ul className="movie-recommendations-wrapper">
      {movies}
    </ul>
  );
}

export default FinalMovies
