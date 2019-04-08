import React from "react";
import { FinalMovie } from "../components/FinalMovie";
import { Link } from "react-router";
import { connect } from "react-redux";
import { actions } from "../../actions";

class MovieRecommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genre: ""
    };
  }

  componentDidMount() {
    this.props.getMovies(`/api/v1/toppings?params=${this.props.toppings.toppings.join(",")}`);
  }

  render() {
    const finalMovies = this.props.movies.map(movie => <FinalMovie key={movie.id} movie={movie} />);

    return (
      <div className="movie-recommendations-container">
        <div className="headline">
          <h1>
            Based on your toppings, <br /> how about some {this.props.genre} movies?
          </h1>
        </div>
        <div className="movie-back-buttons">
          <span className="back-button">
            <button>
              <Link to="/toppings/new">Select Different Toppings</Link>
            </button>
          </span>
          <span className="back-button">
            <button>
              <Link to="/">Back to the Beginning!</Link>
            </button>
          </span>
        </div>
        <ul className="movie-recommendations-wrapper">{finalMovies}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toppings: state.toppings,
    movies: state.movieRecommendations.movies,
    genre: state.movieRecommendations.genre
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: url => dispatch(actions.fetchMovieRecommendationRequest(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieRecommendations);
