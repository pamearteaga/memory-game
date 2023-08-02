import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Unit test Spinner component", () => {
  test("Should render Spinner in the document", () => {
    render(<Spinner />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
