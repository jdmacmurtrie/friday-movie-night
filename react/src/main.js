import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Routes } from "./routes";
import { toppings } from "./reducers";
import { createStore } from "redux";
// import { combineReducers, createStore } from "redux";

const store = createStore(toppings);

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
