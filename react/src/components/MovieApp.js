import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import MovieContainer from '../containers/MovieContainer'
import ToppingRecommendations from '../components/ToppingRecommendations'

class MovieApp extends Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/movies/new' component={MovieContainer}/>
        <Route path='/movies/recommendations/:params' component={ToppingRecommendations}/>
      </Router>
    )
  }
}

export default MovieApp;
