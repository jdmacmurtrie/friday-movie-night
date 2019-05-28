import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetSuggestionsButton } from "../../sharedComponents/GetSuggestionsButton";
import { actions } from "../actions";
import { MovieDropdown } from "../components/MovieDropdown";
import { MovieForm } from "../components/MovieForm";
import { SearchBy } from "../components/SearchBy";

class MovieFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  componentDidMount() {
    this.props.clearTitleGenre();
  }

  handleChangeSearch(event) {
    const selection = event.target.value === "genre";
    this.props.changeSearchBy(selection);
  }

  handleChangeTitle(event) {
    this.props.addTitle(event.target.value);
  }

  handleChangeGenre(event) {
    this.props.addGenre(event.target.value);
  }

  render() {
    const { title, genre, chooseByGenre } = this.props;
    const selection = chooseByGenre ? "genre" : "movie";
    const showButton = this.props.title.trim() !== "" || this.props.genre !== "Genre";

    return (
      <div className="movie-form-page">
        <div className="movie-wrapper">
          <div className="movie-headline">
            <h2>What {selection} will you be watching?</h2>
            <img
              src="https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-film-reel-filled-100.png"
              alt="film reel"
              height="150"
              width="150"
            />
            <hr />
          </div>
          <SearchBy handleChangeSearch={this.handleChangeSearch} />
          <div className="movie-choice">
            {chooseByGenre ? (
              <div className="dropdown-wrapper">
                <MovieDropdown value={genre} handleChangeGenre={this.handleChangeGenre} />
              </div>
            ) : (
              <MovieForm value={title} handleChangeText={this.handleChangeTitle} />
            )}
          </div>
        </div>
        {showButton && (
          <Link to={"/movies/recommendations"}>
            <GetSuggestionsButton className="get-toppings-button" />
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.getToppings.titleGenre.title,
    genre: state.getToppings.titleGenre.genre,
    chooseByGenre: state.getToppings.titleGenre.chooseByGenre
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTitle: title => dispatch(actions.addTitle(title)),
    addGenre: genre => dispatch(actions.addGenre(genre)),
    changeSearchBy: chooseByGenre => dispatch(actions.chooseByGenre(chooseByGenre)),
    clearTitleGenre: () => dispatch(actions.clearTitleGenre())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieFormContainer);
