import React from "react";

import renderWithRedux from "test-helpers/renderWithRedux";

import Home from "../Home";

const store = {
  userAccouts: {
    online: true,
  },
};

test("Render Home", () => {
  const { container } = renderWithRedux(<Home />, store);
  expect(container).toHaveTextContent("Network is Online");
});
