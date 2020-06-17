import React from "react";
import { render } from "@testing-library/react";
import ChangeIndicator from ".";

describe("<ChangeIndicator />", () => {
  it("renders with positive class when change prop is >= 0", () => {
    const { container } = render(<ChangeIndicator change={1} />);
    expect(container.firstChild.classList.contains("positive")).toBe(true);
  });

  it("renders with negative class when change prop is < 0", () => {
    const { container } = render(<ChangeIndicator change={-1} />);
    expect(container.firstChild.classList.contains("negative")).toBe(true);
  });
});
