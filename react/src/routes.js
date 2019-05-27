import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProfileContainer } from "./userProfile/containers/UserProfileContainer";
import MovieRecommendations from "./wantMovies/containers/MovieRecommendations";
import ToppingFormContainer from "./wantMovies/containers/ToppingFormContainer";
import { MovieFormContainer } from "./wantToppings/containers/MovieFormContainer";
import { ToppingRecommendations } from "./wantToppings/containers/ToppingRecommendations";
import { WelcomeComponent } from "./welcomePage/WelcomeComponent";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomeComponent} />
        <Route exact path="/toppings/new" component={ToppingFormContainer} />
        <Route exact path="/toppings/recommendations" component={MovieRecommendations} />
        <Route exact path="/movies/new" component={MovieFormContainer} />
        <Route exact path="/movies/recommendations" component={ToppingRecommendations} />
        <Route exact path="/users/:id" component={UserProfileContainer} />
      </Switch>
    </Router>
  );
};
