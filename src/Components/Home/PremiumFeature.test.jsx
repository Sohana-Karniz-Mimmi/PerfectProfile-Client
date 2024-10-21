import { render, screen } from "@testing-library/react";
import PremiumFeature from "./PremiumFeature";
import { BrowserRouter as Router } from "react-router-dom"; // To mock Link
import "@testing-library/jest-dom";

import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

describe("PremiumFeature Component", () => {
  test("renders the heading", () => {
    render(
      <Router>
        <PremiumFeature />
      </Router>
    );

    const heading = screen.getByText(/Stand Out with Premium Features/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders the three premium feature cards", () => {
    render(
      <Router>
        <PremiumFeature />
      </Router>
    );

    const cardHeadings = [
      "Unlimited Design Options",
      "Cover Letter Templates",
      "Two Pages +",
    ];

    cardHeadings.forEach((heading) => {
      const card = screen.getByText(heading);
      expect(card).toBeInTheDocument();
    });
  });

  test("renders the checkout premium button", () => {
    render(
      <Router>
        <PremiumFeature />
      </Router>
    );

    const button = screen.getByText(/Checkout Premium/i);
    expect(button).toBeInTheDocument();
  });

  test("renders images for each feature", () => {
    render(
      <Router>
        <PremiumFeature />
      </Router>
    );

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(4); // 3 feature images and 1 background image
  });

  test("renders the SVG wave background", () => {
    render(
      <Router>
        <PremiumFeature />
      </Router>
    );

    const svgWave = screen.getByTestId("svg-wave");
    expect(svgWave).toBeInTheDocument();
  });
});
