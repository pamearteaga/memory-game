import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Button from "./Button";

const functionMock = jest.fn();

describe("Unit test Button component", () => {
  afterEach(() => {
    cleanup();
  });
  test("Should render Button in the document", () => {
    render(<Button />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
  test("Should render Button with default props", () => {
    render(<Button />);
    expect(screen.getByText("button")).toBeInTheDocument();
  });
  test("Should render Button with new props", () => {
    render(<Button text={"Start game"} />);
    expect(screen.getByText("Start game")).toBeInTheDocument();
  });
  test("Button fire event after click", () => {
    render(<Button handleOnClick={functionMock} />);
    fireEvent.click(screen.getByTestId("button"));
    expect(functionMock).toHaveBeenCalled();
  });
});
