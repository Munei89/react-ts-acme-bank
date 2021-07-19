import React from "react";

import renderWithRedux from "test-helpers/renderWithRedux";

import Network from "components/Network";

const store = {
  network: {
    online: true,
  },
};

test("shows online status", () => {
  const { container } = renderWithRedux(<Network />, store);
  expect(container).toHaveTextContent("Network is Online");
});
