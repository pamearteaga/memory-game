import { render, screen, cleanup } from "@testing-library/react";
import CardsGrid from "./CardsGrid";

const mockData = [
  {
    open: false,
    id: "id1",
    title: "Image1",
    url: "",
    handleOnClick: () => false,
  },
  {
    open: false,
    id: "id2",
    title: "Image2",
    url: "",
    handleOnClick: () => false,
  },
];

describe("Unit test CardsGrid component", () => {
  afterEach(() => {
    cleanup();
  });
  test("Should render CardsGrid in the document", () => {
    render(<CardsGrid />);
    expect(screen.getByTestId("cardsgrid")).toBeInTheDocument();
  });
  test("Should render Spinner if imagesList prop comes empty", () => {
    render(<CardsGrid />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
  test("Should render the cards if imageList brings images", () => {
    render(<CardsGrid imagesList={mockData} />);
    expect(screen.getByTestId("grid")).toBeInTheDocument();
    expect(screen.getAllByTestId("card-back")).toHaveLength(2);
  });
  test("Should render congratulations message when score equals 6", () => {
    render(<CardsGrid imagesList={mockData} score={6} />);
    expect(screen.getByTestId("congratulations")).toBeInTheDocument();
    expect(screen.queryByTestId("grid")).not.toBeInTheDocument();
  });
});
