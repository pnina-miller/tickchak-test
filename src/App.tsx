import React from "react";
import { Provider } from "react-redux";
import { ApplicationState } from "./store";
import { Store } from "redux";
import HomePage from "./components/HomePage";
import './App.scss'

interface MainProps {
  store: Store<ApplicationState>;
}

const App: React.FC<MainProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
