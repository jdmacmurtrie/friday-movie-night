import React from 'react'
import MovieForm from '../components/MovieForm'
import MovieDropdown from '../components/MovieDropdown'
import SearchBy from '../components/SearchBy'
import { browserHistory, Link } from 'react-router'

class MovieContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selection: 'genre',
      genre: 'none',
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
      genre: 'none',
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
    let movieForm;
    let movieDropdown;
    let button;
    if (this.state.selection == 'title') {
      movieForm = <MovieForm
                    handleChangeText={this.handleChangeText}
                    handleFormSubmit={this.handleFormSubmit}
                  />
    } else if (this.state.selection == 'genre') {
      movieDropdown = <MovieDropdown handleChangeDropdown={this.handleChangeDropdown} />
    }
    if (this.state.queryString !== '' && this.state.queryString != 'none') {
      button = <button type='submit' onClick={this.handleFormSubmit} className="small-12 columns button" id="get-topping-button">
                Get my suggestions!
              </button>
    }

    return (
      <div>
        <div className="top-bar select">
          Please select a genre or a title
        </div>
        <div className="movie-panal">
        <SearchBy handleChangeSearch={this.handleChangeSearch}/>
          {movieForm}
          {movieDropdown}
          {button}
        </div>
      </div>
    );
  }
}

export default MovieContainer
