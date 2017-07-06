import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={RestaurantsIndexContainer} />
    <Route path="restaurants/:id" component={RestaurantShowContainer} />
  </Route>
);

export default routes;
