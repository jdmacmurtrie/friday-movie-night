import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../actions";
import { FinalMovie } from "../components/FinalMovie";

class MovieRecommendations extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getMovies(`/api/v1/toppings?params=${this.props.toppings.toppings.join(",")}`);
  }

  handleClick() {
    this.props.clearMovieRecommendations();
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
            <button onClick={this.handleClick}>
              <Link to="/toppings/new">Select Different Toppings</Link>
            </button>
          </span>
          <span className="back-button">
            <button onClick={this.handleClick}>
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
    toppings: state.getMovies.toppings,
    movies: state.getMovies.movieRecommendations.movies,
    genre: state.getMovies.movieRecommendations.genre
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: url => dispatch(actions.fetchMovieRecommendationRequest(url)),
    clearMovieRecommendations: () => dispatch(actions.clearMovieRecommendations())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieRecommendations);
