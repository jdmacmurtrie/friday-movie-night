import React from "react";
// import { browserHistory } from "react-router";

import { MovieForm } from "../components/MovieForm";
import { MovieDropdown } from "../components/MovieDropdown";
import { SearchBy } from "../components/SearchBy";
import { GetSuggestionsButton } from "../../sharedComponents/GetSuggestionsButton";

export class MovieFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "title",
      genre: "",
      movie: "",
      queryString: ""
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSearchClear = this.handleSearchClear.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChangeSearch(event) {
    this.setState({
      selection: event.target.value
    });
    this.handleSearchClear();
  }

  handleSearchClear() {
    this.setState({
      genre: "",
      movie: "",
      queryString: ""
    });
  }

  handleChangeText(event) {
    this.setState({
      movie: event.target.value
    });
    if (event.target.value.trim() !== "") {
      this.setState({
        queryString: "title," + event.target.value
      });
    }
  }

  handleChangeDropdown(event) {
    this.setState({
      genre: event.target.value,
      queryString: "genre," + event.target.value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    // const { queryString } = this.state;
    // browserHistory.push(`/movies/recommendations/${queryString}`);
  }

  render() {
    const { queryString, genre, movie, selection } = this.state;

    return (
      <div className="movie-form-page">
        <form onSubmit={this.handleFormSubmit}>
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
              {selection === "genre" ? (
                <div className="dropdown-wrapper">
                  <MovieDropdown
                    value={genre}
                    handleChangeDropdown={this.handleChangeDropdown}
                  />
                </div>
              ) : selection === "title" ? (
                <MovieForm
                  value={movie}
                  handleChangeText={this.handleChangeText}
                />
              ) : (
                undefined
              )}
            </div>
          </div>
          {queryString && (
            <GetSuggestionsButton className="get-toppings-button" />
          )}
        </form>
      </div>
    );
  }
}
