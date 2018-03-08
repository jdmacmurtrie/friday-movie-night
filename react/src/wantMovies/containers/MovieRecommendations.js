import React from 'react';
import { browserHistory } from 'react-router'
import FinalMovie from '../components/FinalMovie'

class MovieRecommendations extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    fetch(`/api/v1/toppings?params=${this.props.params.params}`, {
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
      this.setState({ movies: body.movies })
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
      <div className="top-bar recommended">
        Your movie recommendations
      </div>

      <div className="movie-choices">
        <div className="movie-panal">
          <div className="row">
            <div className="3-small columns" id="movie">
              <ul>
                {finalMovies}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a href={'/toppings/new'} className="small-12 columns button">
      Select Different Toppings
      </a>
      <a href={'/'} className="small-12 columns button">
        Back to the Beginning!
      </a>
      </div>
    );
  }
}

export default MovieRecommendations
