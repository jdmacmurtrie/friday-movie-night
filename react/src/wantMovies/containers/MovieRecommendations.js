import React from 'react';
import { browserHistory, Link } from 'react-router'
import FinalMovie from '../components/FinalMovie'

class MovieRecommendations extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
      genre: ''
    }
  }

  componentDidMount() {
    fetch(`/api/v1/toppings?params=${this.props.params.params}`, {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        movies: body.movies,
        genre: body.genre.name
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let recommendations = this.state.movies
    let finalMovies = recommendations.map(movie => {
      return(
        <FinalMovie
          key={movie.id}
          movie={movie}
        />
      )
    })

    return (
      <div>
        <div className="movie-recommendations-container">
          <div className="headline">
            <h1>Based on your toppings, <br/> how about some {this.state.genre} movies?</h1>
          </div>
          <div className="movie-back-buttons">
            <span className="back-button">
              <button><Link to='/toppings/new'>Select Different Toppings</Link></button>
            </span>
            <span className="back-button">
              <button><Link to='/'>Back to the Beginning!</Link></button>
            </span>
          </div>
          <ul className="movie-recommendations-wrapper">
            {finalMovies}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieRecommendations
