import React from "react";
import { Provider } from "react-redux";

import "App.scss";
import logo from "logo.svg";

import store from "store";
import Home from "pages/Home";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/components/App.tsx</code> and save to reload.
          </p>
          <Home />
        </header>
      </div>
    </Provider>
  );
};

export default App;
