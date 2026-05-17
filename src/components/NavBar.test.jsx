import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("renders all navigation links", () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Admin Portal")).toBeInTheDocument();
  });
});
