import React from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";

import "App.scss";
import store from "store";
import Home from "pages/Home";

import { StyledContent, StyledHeaderText } from "./styles";

const { Header } = Layout;

const App = () => {
  return (
    <Provider store={store}>
      <Layout className="layout">
        <Header>
          <StyledHeaderText>ACME BANK</StyledHeaderText>
        </Header>
        <StyledContent>
          <Home />
        </StyledContent>
      </Layout>
      ,
    </Provider>
  );
};

export default App;
