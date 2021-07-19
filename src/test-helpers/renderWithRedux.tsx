import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

const mockStore = configureStore([thunk]);

const rootInitialState = {};

function renderWithRedux(
  ui: JSX.Element,
  initialState: object = rootInitialState
) {
  const store = mockStore(initialState);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    mockStore: store,
  };
}

export default renderWithRedux;
