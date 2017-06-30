import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PizzaContainer from './containers/PizzaContainer'
import MovieContainer from './containers/MovieContainer'

$(function () {
  let toppingChoices = document.getElementById('topping_choices')
  let movieChoices = document.getElementById('movie_choices')
  if (toppingChoices) {
    ReactDOM.render(
      <PizzaContainer />,
      toppingChoices
    );
  }
  if (movieChoices) {
    ReactDOM.render(
      <MovieContainer />,
      movieChoices
    );
  }
});
