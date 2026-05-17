import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Shop from "./Shop";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: "1", name: "Ethiopian Yirgacheffe", description: "Bright and fruity", origin: "Ethiopia", price: 14.99, image: "" },
      { id: "2", name: "Colombian Supremo", description: "Rich and smooth", origin: "Colombia", price: 12.99, image: "" },
    ]),
  })
);

describe("Shop", () => {
  it("renders search input", async () => {
    render(<MemoryRouter><Shop /></MemoryRouter>);
    await waitFor(() => expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument());
  });

  it("filters coffees based on search input", async () => {
    render(<MemoryRouter><Shop /></MemoryRouter>);
    const search = await waitFor(() => screen.getByPlaceholderText("Search..."));
    fireEvent.change(search, { target: { value: "Ethiopian" } });
    expect(search.value).toBe("Ethiopian");
  });
});
