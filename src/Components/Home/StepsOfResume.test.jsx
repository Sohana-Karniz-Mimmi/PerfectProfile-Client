import { render, screen } from "@testing-library/react";
import StepsOfResume from "./StepsOfResume";
import "@testing-library/jest-dom"; // for matchers
import { vi } from "vitest";

// vi.mock('axios'); 


describe("StepsOfResume Component", () => {
  test("renders the heading section correctly", () => {
    render(<StepsOfResume />);
    
    const title = screen.getByText(/Easy Steps To Build Your Resume/i);
    const subtitle = screen.getByText(/Create a professional resume in a few simple steps/i);
    
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  test("renders step 1 correctly", () => {
    render(<StepsOfResume />);
    
    const step1 = screen.getByTestId("step-1");
    const step1Image = screen.getByAltText("Step 1");
    const step1Heading = screen.getByText(/Create Your Account/i);
    
    expect(step1).toBeInTheDocument();
    expect(step1Image).toBeInTheDocument();
    expect(step1Heading).toBeInTheDocument();
  });

  test("renders step 2 correctly", () => {
    render(<StepsOfResume />);
    
    const step2 = screen.getByTestId("step-2");
    const step2Image = screen.getByAltText("Step 1"); // The alt text is repeated, ensure it's consistent in your code
    const step2Heading = screen.getByText(/Choose Your Resume/i);
    
    expect(step2).toBeInTheDocument();
    expect(step2Image).toBeInTheDocument();
    expect(step2Heading).toBeInTheDocument();
  });

  test("renders step 3 correctly", () => {
    render(<StepsOfResume />);
    
    const step3 = screen.getByTestId("step-3");
    const step3Image = screen.getByAltText("Step 1");
    const step3Heading = screen.getByText(/Add Your Information/i);
    
    expect(step3).toBeInTheDocument();
    expect(step3Image).toBeInTheDocument();
    expect(step3Heading).toBeInTheDocument();
  });

  test("renders step 4 correctly", () => {
    render(<StepsOfResume />);
    
    const step4 = screen.getByTestId("step-4");
    const step4Image = screen.getByAltText("Step 4");
    const step4Heading = screen.getByText(/Download Resume/i);
    
    expect(step4).toBeInTheDocument();
    expect(step4Image).toBeInTheDocument();
    expect(step4Heading).toBeInTheDocument();
  });
});
