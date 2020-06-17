import React from "react";
import { render } from "@testing-library/react";
import MetaDisplay from ".";

describe("<MetaDisplay />", () => {
  it("matches snapshot with name and value props", () => {
    const { container } = render(<MetaDisplay name={"Name"} value={"Value"} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot with name and children props", () => {
    const { container } = render(
      <MetaDisplay name={"Name"} children={<strong>Child</strong>} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
