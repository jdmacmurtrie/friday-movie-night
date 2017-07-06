import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import PizzaContainer from '../containers/PizzaContainer'
import MovieRecommendations from '../components/MovieRecommendations'

class PizzaApp extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/toppings/new' component={PizzaContainer}/>
        <Route path='/toppings/recommendations' component={MovieRecommendations}/>
      </Router>
    )
  }
}

export default PizzaApp;
