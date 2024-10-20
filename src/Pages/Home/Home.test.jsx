import { render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Home"; // Adjust the path if necessary
import { BrowserRouter } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { vi } from "vitest";
import useRole from "../../Hook/useRole";
import "@testing-library/jest-dom";


// Mock the useAuth hook correctly
vi.mock("../../Hook/useAuth", () => ({
  default: () => ({
    user: { email: "testuser@example.com" },
    loading: false,
  }),
}));

// Mock the useAxiosSecure hook
vi.mock("../../Hook/useAxiosSecure", () => ({
  default: () => ({
    get: vi.fn().mockResolvedValue({ data: "user" }),
  }),
}));

// Mock the useQuery hook from react-query
vi.mock("@tanstack/react-query", () => ({
  useQuery: () => ({
    data: "admin", // Mock the role data
    isLoading: false,
  }),
}));

describe("Home Component", () => {
  it("renders Home page components correctly", () => {
    // Render the Home component wrapped with HelmetProvider for helmet usage
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Home />
        </HelmetProvider>
      </BrowserRouter>
    );

    // Test if the Banner component is rendered
    expect(
      screen.getByText((content, element) => {
        return /Make your professional/i.test(content);
      })
    ).toBeInTheDocument();

    // Test if the StepsOfResume component is rendered
    expect(
      screen.getByText(/Easy Steps To Build Your Resume/i)
    ).toBeInTheDocument();

    // Test if the PremiumFeature component is rendered
    expect(
      screen.getByText(/Stand Out with Premium Features/i)
    ).toBeInTheDocument();

    // Test if the Testomonial component is rendered
    expect(
      screen.getByText(/Your Success, Our Inspiration/i)
    ).toBeInTheDocument();
  });

  it("sets the correct page title",async () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </HelmetProvider>
    );

    // Check if the title is correctly set in the Helmet
    await waitFor(() => {
      expect(document.title).toBe("Home - PerfectProfile");
    });
  });
});
