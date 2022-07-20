import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("Test of <GifItem />", () => {
  const title = "Dragon Ball";
  const url = "https://dragonball.com/goku.jpg";

  test("Has to match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  }); 

  test("Should show src and alt of img", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toContain(url);
    expect(alt).toContain(title);
  });
});
