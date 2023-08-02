import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Card from "./Card";

const functionMock = jest.fn();

describe("Unit test Card component", () => {
  afterEach(() => {
    cleanup();
  });
  test("Should render Card in the document showing the back of the card", () => {
    render(<Card />);
    expect(screen.getByTestId("card-back")).toBeInTheDocument();
    expect(screen.queryByTestId("card-front")).not.toBeInTheDocument();
  });
  test("Should show the front of the card when open=true", () => {
    render(<Card open={true} />);
    expect(screen.queryByTestId("card-back")).not.toBeInTheDocument();
    expect(screen.getByTestId("card-front")).toBeInTheDocument();
    expect(screen.getByAltText("Image")).toBeInTheDocument();
  });
  test("Should render with new props", () => {
    render(<Card open={true} title={"Bear"} />);
    expect(screen.getByTestId("card-front")).toBeInTheDocument();
    expect(screen.getByAltText("Bear")).toBeInTheDocument();
  });
  test("Should fire event after click", () => {
    render(<Card handleOnClick={functionMock} />);
    fireEvent.click(screen.getByTestId("card-back"));
    expect(functionMock).toHaveBeenCalled();
  });
});
