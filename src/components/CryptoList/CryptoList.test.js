import React from "react";
import { render } from "@testing-library/react";
import useApi from "../useApi";

import CryptoList from ".";

jest.mock("../useApi");
jest.mock("./CryptoListItem", () => () => (
  <div data-testid="listitem">List Item</div>
));

describe("<CryptoList />", () => {
  it("matches snapshot when first mounted", () => {
    useApi.mockReturnValue({
      isLoading: true,
      fetch: jest.fn(),
    });

    const { container } = render(<CryptoList />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot when an error is returned", () => {
    useApi.mockReturnValue({
      isLoading: false,
      fetch: jest.fn(),
      error: new Error("Error"),
    });

    const { container } = render(<CryptoList />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays the correct number of CryproListItem's when data is returned", () => {
    useApi.mockReturnValue({
      isLoading: false,
      fetch: jest.fn(),
      response: {
        data: {
          data: {
            coins: [
              {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC",
                price: "7500",
                change: "0.3",
              },
              {
                id: 2,
                name: "Litecoin",
                symbol: "LTC",
                price: "120",
                change: "20",
              },
            ],
          },
        },
      },
    });

    const { queryAllByTestId } = render(<CryptoList />);
    expect(queryAllByTestId("listitem").length).toBe(2);
  });
});
