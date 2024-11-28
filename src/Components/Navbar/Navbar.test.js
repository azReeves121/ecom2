import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  it("should render without crashing", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Check if the Navbar component renders with the logo
    expect(screen.getByText("KASSIM!")).toBeInTheDocument();

    // Check if initial menu state is not visible
    const menu = screen.getByRole("list");
    expect(menu).not.toHaveClass("nav-menu-visible");

    // Simulate dropdown toggle to show menu
    const dropdownToggle = screen.getByAltText("");
    fireEvent.click(dropdownToggle);

    // Check if the menu is now visible
    expect(menu).toHaveClass("nav-menu-visible");
  });

  // Additional tests can be added here
});
