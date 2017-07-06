import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import SuggestionContainer from './containers/SuggestionContainer'
import PizzaApp from './components/PizzaApp'
import MovieApp from './components/MovieApp'

$(function () {
  let toppingChoices = document.getElementById('topping_choices')
  let movieChoices = document.getElementById('movie_choices')
  let newSuggestion = document.getElementById('new_suggestion')
  if (toppingChoices) {
    ReactDOM.render(
      <PizzaApp />,
      toppingChoices
    );
  }
  if (movieChoices) {
    ReactDOM.render(
      <MovieApp />,
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
