import React from "react";
import { Provider } from "react-redux";
import { ApplicationState } from "./store";
import { Store } from "redux";
import HomePage from "./components/HomePage";
import './App.scss'
import Code from "./components/code";

interface MainProps {
  store: Store<ApplicationState>;
}

const App: React.FC<MainProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <Code />
    </Provider>
  );
};

export default App;
