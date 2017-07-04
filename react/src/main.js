import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PizzaContainer from './containers/PizzaContainer'
import MovieContainer from './containers/MovieContainer'
import SuggestionContainer from './containers/SuggestionContainer'

$(function () {
  let toppingChoices = document.getElementById('topping_choices')
  let movieChoices = document.getElementById('movie_choices')
  let newSuggestion = document.getElementById('new_suggestion')
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
  if (newSuggestion) {
    ReactDOM.render(
      <SuggestionContainer />,
      newSuggestion
    );
  }
});
