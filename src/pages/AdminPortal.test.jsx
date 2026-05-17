import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AdminPortal from "./AdminPortal";

describe("AdminPortal", () => {
  it("renders the form", () => {
    render(<MemoryRouter><AdminPortal /></MemoryRouter>);
    expect(screen.getByText("Add New Coffee")).toBeInTheDocument();
  });

  it("renders all input fields", () => {
    render(<MemoryRouter><AdminPortal /></MemoryRouter>);
    const inputs = screen.getAllByPlaceholderText("Type here");
    expect(inputs.length).toBe(5);
  });

  it("renders submit button", () => {
    render(<MemoryRouter><AdminPortal /></MemoryRouter>);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("updates input values on change", () => {
    render(<MemoryRouter><AdminPortal /></MemoryRouter>);
    const inputs = screen.getAllByPlaceholderText("Type here");
    fireEvent.change(inputs[0], { target: { value: "Test Coffee" } });
    expect(inputs[0].value).toBe("Test Coffee");
  });
});
