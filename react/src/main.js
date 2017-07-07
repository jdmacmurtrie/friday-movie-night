import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import SuggestionContainer from './containers/SuggestionContainer'
import PizzaContainer from './containers/PizzaContainer'
import MovieContainer from './containers/MovieContainer'
import MovieRecommendations from './components/MovieRecommendations'
import ToppingRecommendations from './components/ToppingRecommendations'

$(function () {
  let goReact = document.getElementById('react-app')
  if (goReact) {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route path='/toppings/new' component={PizzaContainer}/>
        <Route path='/toppings/recommendations/:params' component={MovieRecommendations}/>
        <Route path='/movies/new' component={MovieContainer}/>
        <Route path='/movies/recommendations/:params' component={ToppingRecommendations}/>
        <Route path='/suggestions/new' component={SuggestionContainer}/>
      </Router>,
      goReact
    );
  }
})
