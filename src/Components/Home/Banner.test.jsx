import { render, screen } from "@testing-library/react";
import Banner from "./Banner"; // Adjust the import path according to your project structure
import { MemoryRouter } from "react-router-dom"; // To wrap your component with MemoryRouter for Link components
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const mockAuthValue = {
  user: null, // You can set this to a mock user object if needed
  loading: false,
};

describe("Banner Component", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AuthContext.Provider value={mockAuthValue}>
            <Banner />
          </AuthContext.Provider>
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  test("renders the main title", () => {
    const titleElement = screen.getByText(/Make your professional/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the typewriter effect", () => {
    const typewriterElement = screen.getByText(/minutes/i);
    expect(typewriterElement).toBeInTheDocument();
  });

  test("renders the subtitle", () => {
    const subtitleElement = screen.getByText(
      /From generating bullet points to automatic formatting/i
    );
    expect(subtitleElement).toBeInTheDocument();
  });

  test("renders Get Started button", () => {
    const getStartedButton = screen.getByRole("button", {
      name: /Get Started/i,
    });
    expect(getStartedButton).toBeInTheDocument();
  });

  test("renders Create My Resume button", () => {
    const createResumeButton = screen.getByRole("button", {
      name: /Create My Resume/i,
    });
    expect(createResumeButton).toBeInTheDocument();
  });

  test("renders video element", () => {
    const videoElement = screen.getByText(
      /Your browser does not support the video tag/i
    );
    expect(videoElement).toBeInTheDocument();
  });

  test("renders templates section title", () => {
    const templatesTitle = screen.getByText(
      /Templates to win recruiters over/i
    );
    expect(templatesTitle).toBeInTheDocument();
  });

  test("renders Browse Templates button", () => {
    const browseTemplatesButton = screen.getByRole("button", {
      name: /Browse Templates/i,
    });
    expect(browseTemplatesButton).toBeInTheDocument();
  });
});
