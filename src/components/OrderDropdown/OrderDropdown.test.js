import React from "react";
import { render, fireEvent } from "@testing-library/react";

import OrderDropdown from ".";

describe("<OrderDropdown />", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <OrderDropdown options={{ asc: "High to Low", desc: "Low to High" }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls onChange when new item is selected", async () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <OrderDropdown
        options={{ asc: "High to Low", desc: "Low to High" }}
        onChange={mockFn}
      />
    );

    fireEvent.change(getByTestId("orderdropdownSelect"), {
      target: { value: "desc" },
    });
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("desc");
  });
});
