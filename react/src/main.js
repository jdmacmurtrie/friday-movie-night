import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Routes } from "./routes";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchFetchMovieRecommendations } from "./sagas";
import { reducers } from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchMovieRecommendations);

$(function() {
  let goReact = document.getElementById("react-app");

  if (goReact) {
    ReactDOM.render(
      <Provider store={store}>
        <Routes />
      </Provider>,
      goReact
    );
  }
});
