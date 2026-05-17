import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renders the heading", () => {
    render(<Home />);
    expect(screen.getByText("Coffee R Us")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Home />);
    expect(screen.getByText("The go to store for your coffee needs")).toBeInTheDocument();
  });
});
