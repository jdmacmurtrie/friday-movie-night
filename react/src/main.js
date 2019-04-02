import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserProfileContainer } from "./userProfile/containers/UserProfileContainer";
import { MovieRecommendations } from "./wantMovies/containers/MovieRecommendations";
import { ToppingFormContainer } from "./wantMovies/containers/ToppingFormContainer";
import { MovieFormContainer } from "./wantToppings/containers/MovieFormContainer";
import { ToppingRecommendations } from "./wantToppings/containers/ToppingRecommendations";
import { WelcomeComponent } from "./welcomePage/WelcomeComponent";

$(function() {
  let goReact = document.getElementById("react-app");

  if (goReact) {
    ReactDOM.render(
      <Router>
        <div>
          <Route exact path="/" component={WelcomeComponent} />
          <Route path="/toppings/new" component={ToppingFormContainer} />
          <Route
            path="/toppings/recommendations/:params"
            component={MovieRecommendations}
          />
          <Route path="/movies/new" component={MovieFormContainer} />
          <Route
            path="/movies/recommendations/:params"
            component={ToppingRecommendations}
          />
          <Route path="/users/:id" component={UserProfileContainer} />
        </div>
      </Router>,
      goReact
    );
  }
});

// <Route path='/combos/new' component={ComboContainer} />
