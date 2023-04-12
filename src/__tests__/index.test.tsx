import { render, screen } from "@testing-library/react";

describe("First test suites", () => {
  it("First test", () => {
    render(<div>Test</div>);

    screen.getByText(/Test/);
  });
});
