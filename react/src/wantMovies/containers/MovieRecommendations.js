import React from 'react';
import { browserHistory } from 'react-router'
import FinalMovies from '../components/FinalMovies'

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
    return (
      <div>
      <div className="top-bar recommended">
        Your movie recommendations
      </div>

      <div className="movie-choices">
        <div className="movie-panal">
          <div className="row">
            <div className="3-small columns" id="movie">
            <FinalMovies movies={this.state.movies}/>
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
