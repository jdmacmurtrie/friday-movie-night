import React from 'react';
import { browserHistory, Link } from 'react-router'

import MovieForm from '../components/MovieForm'
import MovieDropdown from '../components/MovieDropdown'
import SearchBy from '../components/SearchBy'
import GetSuggestionsButton from '../../sharedComponents/GetSuggestionsButton'

class MovieFormContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selection: 'title',
      genre: '',
      movie: '',
      queryString: ''
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSearchClear = this.handleSearchClear.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChangeSearch(event) {
    this.setState({ selection: event.target.value });
    this.handleSearchClear();
  }
jk
  handleSearchClear() {
    this.setState({
      genre: '',
      movie: '',
      queryString: ''
     });
  }

  handleChangeText(event) {
    this.setState({ movie: event.target.value });
    if (event.target.value.trim() !== '') {
      this.setState({ queryString: "title," + event.target.value })
    }
  }

  handleChangeDropdown(event) {
    this.setState({
      genre: event.target.value,
      queryString: "genre," + event.target.value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let queryString = this.state.queryString
    browserHistory.push(`/movies/recommendations/${queryString}`)
  }

  render () {
    let headline, movieForm, movieDropdown, button;
    let selection = this.state.selection
    let queryString = this.state.queryString

    if (selection == 'genre') {
      movieDropdown = <MovieDropdown
                        value={this.state.genre}
                        handleChangeDropdown={this.handleChangeDropdown}
                      />
      headline = "What genre will you be watching?"
    } else if (selection == 'title') {
      headline = "What movie will you be watching?"
      movieForm = <MovieForm
                    value={this.state.movie}
                    handleChangeText={this.handleChangeText}
                  />
    }

    if (queryString !== '' && queryString !== '') {
      button = <GetSuggestionsButton className="get-toppings-button"/>
    }

    return (
      <div className="movie-form-page">
        <form onSubmit={this.handleFormSubmit}>
        <div className="movie-wrapper">
          <div className="movie-headline">
            <h2>{headline}</h2>
            <img src='https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-film-reel-filled-100.png' alt="film reel" height="150" width="150"/>
            <hr/>
          </div>
          <SearchBy handleChangeSearch={this.handleChangeSearch}/>
          <div className="movie-choice">
            {movieForm}
            {movieDropdown}
          </div>
        </div>
        {button}
        </form>
      </div>
    );
  }
}

export default MovieFormContainer
