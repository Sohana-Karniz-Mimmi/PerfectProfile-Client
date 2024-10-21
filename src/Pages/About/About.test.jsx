import { vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import About from "./About";
import "@testing-library/jest-dom";

// Partially mock react-router-dom to mock only ScrollRestoration
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom"); // Import the actual module
  return {
    ...actual, // Spread the actual module
    ScrollRestoration: () => null, // Mock ScrollRestoration only
  };
});

describe("About Component", () => {
  it("renders the correct title in Helmet", async () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <About />
        </MemoryRouter>
      </HelmetProvider>
    );

    await waitFor(() => {
      expect(document.title).toBe("About Us- PerfectProfile");
    });
  });

  it("renders the correct heading", () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <About />
        </MemoryRouter>
      </HelmetProvider>
    );

    const heading = screen.getByText(/MORE ABOUT US/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the Contact Us button", () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <About />
        </MemoryRouter>
      </HelmetProvider>
    );

    const contactButton = screen.getByRole("button", { name: /Contact Us/i });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveClass("px-16 rounded-full");
  });

  it("renders images correctly", () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <About />
        </MemoryRouter>
      </HelmetProvider>
    );

    const visionImg = screen.getByAltText(/Our vision/i);
    const missionImg = screen.getByText(
      /Certified Professional Resume Writers/i
    );

    expect(visionImg).toBeInTheDocument();
    expect(missionImg).toBeInTheDocument();
  });
});
