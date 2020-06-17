import React from "react";
import { render } from "@testing-library/react";

import CryptoListView from ".";

describe("<CryptoListView />", () => {
  it("matches snapshot", () => {
    const { container } = render(<CryptoListView />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
