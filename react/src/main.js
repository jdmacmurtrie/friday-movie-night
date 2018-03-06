import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import ComboContainer from './makeCombo/ComboContainer'
import ToppingFormContainer from './wantMovies/containers/ToppingFormContainer'
import MovieRecommendations from './wantMovies/containers/MovieRecommendations'
import MovieFormContainer from './wantToppings/containers/MovieFormContainer'
import ToppingRecommendations from './wantToppings/containers/ToppingRecommendations'

$(function () {
  let goReact = document.getElementById('react-app')
  if (goReact) {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route path='/toppings/new' component={ToppingFormContainer}/>
        <Route path='/toppings/recommendations/:params' component={MovieRecommendations}/>
        <Route path='/movies/new' component={MovieFormContainer}/>
        <Route path='/movies/recommendations/:params' component={ToppingRecommendations}/>
        <Route path='/suggestions/new' component={ComboContainer}/>
      </Router>,
      goReact
    );
  }
})
