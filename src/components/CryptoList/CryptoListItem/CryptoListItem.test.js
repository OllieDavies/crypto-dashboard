import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CryptoListItem from ".";

describe("<CryptoListItem />", () => {
  const { container } = render(
    <MemoryRouter>
      <CryptoListItem
        id={1}
        name={"Bitcoin"}
        symbol={"BTC"}
        price={1000}
        change={0.1}
      />
    </MemoryRouter>
  );

  it("matches snapshot", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
