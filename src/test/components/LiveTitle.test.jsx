import { render, screen } from "@testing-library/react";
import { LiveTitle } from "../../components/LiveTitle";

describe("Test of LiveTitle", () => {
  test("Should match with snapshot", () => {
    const { container } = render(<LiveTitle />);
    expect(container).toMatchSnapshot();
  });

  test("Should render the text title", () => {
    render(<LiveTitle />);
    expect(screen.getByText("Gifinder").innerHTML).toBe("Gifinder");
  });
});
