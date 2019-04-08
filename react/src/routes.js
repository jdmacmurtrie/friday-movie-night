import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserProfileContainer } from "./userProfile/containers/UserProfileContainer";
import MovieRecommendations from "./wantMovies/containers/MovieRecommendations";
import ToppingFormContainer from "./wantMovies/containers/ToppingFormContainer";
import { MovieFormContainer } from "./wantToppings/containers/MovieFormContainer";
import { ToppingRecommendations } from "./wantToppings/containers/ToppingRecommendations";
import { WelcomeComponent } from "./welcomePage/WelcomeComponent";

export const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={WelcomeComponent} />
        <Route path="/toppings/new" component={ToppingFormContainer} />
        <Route path="/toppings/recommendations" component={MovieRecommendations} />
        <Route path="/movies/new" component={MovieFormContainer} />
        <Route path="/movies/recommendations" component={ToppingRecommendations} />
        <Route path="/users/:id" component={UserProfileContainer} />
      </div>
    </Router>
  );
};
