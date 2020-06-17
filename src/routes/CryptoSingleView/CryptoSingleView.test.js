import React from "react";
import { render } from "@testing-library/react";

import CryptoSingleView from ".";
import useApi from "../../components/useApi";

jest.mock("../../components/useApi");
jest.mock("react-router-dom", () => ({
  useParams: () => ({ id: 1 }),
}));

describe("<CryptoSingleView />", () => {
  it("matches snapshot when first mounted", () => {
    useApi.mockReturnValue({
      isLoading: true,
      fetch: jest.fn(),
    });
    const { container } = render(<CryptoSingleView />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot when error is returned", () => {
    useApi.mockReturnValue({
      isLoading: false,
      fetch: jest.fn(),
      error: new Error("Error"),
    });

    const { container } = render(<CryptoSingleView />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot when coin is returned", () => {
    useApi.mockReturnValue({
      isLoading: false,
      fetch: jest.fn(),
      response: {
        data: {
          data: {
            coin: {
              id: 1,
              name: "Bitcoin",
              symbol: "BTC",
              price: "7500",
              change: "0.3",
              description: "<p>Example description</p>",
            },
          },
        },
      },
    });

    const { container } = render(<CryptoSingleView />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
