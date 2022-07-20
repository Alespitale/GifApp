import { fireEvent, render, screen } from "@testing-library/react";
import { GifModal } from "../../components/GifModal";
import "@testing-library/jest-dom";

describe("Test of GifModal", () => {
  test("Should render the modal", () => {
    const title = "Dragon Ball";
    const url = "https://dragonball.com/goku.jpg";
    const show = true;
    const onHide = jest.fn();
    const {baseElement} = render(
      <GifModal title={title} url={url} show={show} onHide={onHide} />
    );
    expect(baseElement).toMatchSnapshot()
  });

  test("Should show title, buttons and image", () => {
    const title = "Dragon Ball";
    const url = "https://dragonball.com/goku.jpg";
    const show = true;
    const onHide = jest.fn();
    render(<GifModal title={title} url={url} show={show} onHide={onHide} />);
    expect(screen.getByText(`${title}`).innerHTML).toBe(`${title}`);
    expect(screen.getByTestId("close button")).toBeVisible();
    expect(screen.getByTestId("download button")).toBeVisible();
    const img = screen.getByRole('img')
    fireEvent.load(img)
    expect(img).toBeVisible()
  });
});
