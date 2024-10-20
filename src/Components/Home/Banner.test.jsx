import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock the useAuth hook to return a user object
vi.mock("../../Hook/useAuth", () => ({
  default: () => ({
    user: { email: "testuser@example.com" },
    loading: false,
  }),
}));
vi.mock('react-simple-typewriter', () => ({
  Typewriter: ({ words }) => <span>{words[0]}</span>,
}));

// Create a QueryClient instance
const queryClient = new QueryClient();

describe("Banner Component", () => {
  const renderWithProviders = (ui) => {
    return render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{ui}</BrowserRouter>
      </QueryClientProvider>
    );
  };

  it("renders the banner content", () => {
    renderWithProviders(<Banner />);

    // Check for elements with specific text content
    // Check for elements with specific text content using a flexible matcher
    expect(
      screen.getByText((content) =>
        content.includes(
          "From generating bullet points to automatic formatting"
        )
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/minutes/i)).toBeInTheDocument();

    expect(
      screen.getByText("Templates to win recruiters over")
    ).toBeInTheDocument();
  });

  // Check for specific elements
  it("renders the video element", () => {
    renderWithProviders(<Banner />);
    expect(screen.getByRole("video")).toBeInTheDocument();
  });

  it("renders the Get Started and Create My Resume buttons", () => {
    renderWithProviders(<Banner />);
    expect(
      screen.getByRole("button", { name: /Get Started/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Create My Resume/i })
    ).toBeInTheDocument();
  });
});
