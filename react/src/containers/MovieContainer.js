import React from 'react'
import MovieForm from '../components/MovieForm'
import MovieDropdown from '../components/MovieDropdown'
import SearchBy from '../components/SearchBy'

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
  }

  handleChangeSearch(event) {
    this.setState({ selection: event.target.value });
    this.handleSearchClear();
  }

  handleSearchClear() {
    this.setState({ genre: 'none' });
    this.setState({ movie: '' });
    this.setState({ queryString: '' });
  }

  handleChangeText(event) {
    this.setState({ movie: event.target.value });
    if (event.target.value.trim() !== '') {
      this.setState({ queryString: "title," + event.target.value })
    }
  }

  handleChangeDropdown(event) {
      this.setState({ genre: event.target.value });
      this.setState({ queryString: "genre," + event.target.value });
  }

  render () {
    let movieForm;
    let movieDropdown;
    let button;
    if (this.state.selection == 'title') {
      movieForm = <MovieForm handleChangeText={this.handleChangeText} />
    } else if (this.state.selection == 'genre') {
      movieDropdown = <MovieDropdown handleChangeDropdown={this.handleChangeDropdown} />
    }
    if (this.state.queryString !== '' && this.state.queryString != 'none') {
      button = <button><a href={`/movies/${this.state.queryString}`}>Get my suggestions!</a></button>
    }

    return (
      <div>
        <h1>Search by {this.state.selection}:</h1>
        <SearchBy handleChangeSearch={this.handleChangeSearch}/>
        {movieForm}
        {movieDropdown}
        {button}
      </div>
    );
  }
}

export default MovieContainer
