import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers";
import { Routes } from "./routes";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

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
