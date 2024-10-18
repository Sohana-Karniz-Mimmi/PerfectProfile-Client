import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import Home from "./Home"; // Home কম্পোনেন্টের সঠিক পাথ
import Banner from "../../Components/Home/Banner";
import PremiumFeature from "../../Components/Home/PremiumFeature";
import StepsOfResume from "../../Components/Home/StepsOfResume";
import Testomonial from "../../Components/Testomonial/Testomonial";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../../AuthProvider/AuthProvider";

describe("Home Component", () => {
  // Helmet test
  test("sets the correct page title", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <HelmetProvider>
            <Home />
          </HelmetProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(document.title).toBe("Home - PerfectProfile");
  });

  // Banner Component test
  test("renders Banner component", () => {
    render(<Banner />);
    const bannerHeading = screen.getByText(/Make your professional resume/i);
    expect(bannerHeading).toBeInTheDocument();
  });

  // StepsOfResume Component test
  test("renders StepsOfResume component", () => {
    render(<StepsOfResume />);
    const stepsHeading = screen.getByText(/Easy Steps To Build Your Resume/i); // Replace with actual heading from your component
    expect(stepsHeading).toBeInTheDocument();
  });

  // PremiumFeature Component test
  test("renders PremiumFeature component", () => {
    render(<PremiumFeature />);
    const premiumHeading = screen.getByText(/Stand Out with Premium Features/i); // Replace with actual heading from your component
    expect(premiumHeading).toBeInTheDocument();
  });

  // Testomonial Component test
  test("renders Testomonial component", () => {
    render(<Testomonial />);
    const testimonialHeading = screen.getByText(
      /Your Success, Our Inspiration/i
    );
    expect(testimonialHeading).toBeInTheDocument();
  });
});
