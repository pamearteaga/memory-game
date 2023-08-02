import { render, screen, cleanup } from "@testing-library/react";
import Scores from "./Scores";

describe("Unit test Scores component", () => {
  afterEach(() => {
    cleanup();
  });
  test("Should render Scores in the document", () => {
    render(<Scores />);
    expect(screen.getByTestId("scores")).toBeInTheDocument();
  });
  test("Should render Scores with default props", () => {
    render(<Scores />);
    expect(screen.getByText("Right 0")).toBeInTheDocument();
    expect(screen.getByText("Wrong 0")).toBeInTheDocument();
  });
  test("Should render with new props", () => {
    const scores={ right: 3, wrong: 5 }
    render(<Scores {...scores} />);
    expect(screen.getByText("Right 3")).toBeInTheDocument();
    expect(screen.getByText("Wrong 5")).toBeInTheDocument();
  });
});
