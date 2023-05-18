import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserHistory } from "history";
import configureStore from "./configureStore";
const history = createBrowserHistory();

const initialState: any = {};
const store = configureStore(history, initialState);
ReactDOM.render(
  <App store={store} />,
  document.getElementById("root")
);
