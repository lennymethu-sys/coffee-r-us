import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      id: "1", name: "Ethiopian Yirgacheffe", description: "Bright and fruity", origin: "Ethiopia", price: 14.99, image: ""
    }),
  })
);

describe("ProductDetail", () => {
  it("renders loading state initially", () => {
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
