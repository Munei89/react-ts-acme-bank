import React from "react";
import { render } from "@testing-library/react";

import App from "App";

test("renders App", () => {
  const { container } = render(<App />);
  expect(container).toHaveTextContent("src/components/App.tsx");
});
