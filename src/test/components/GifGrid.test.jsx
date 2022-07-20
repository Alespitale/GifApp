import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";
import "@testing-library/jest-dom";

jest.mock("../../hooks/useFetchGif");
const clear = jest.fn();
const category = "One Punch";

describe("Test of <GifGrid/>", () => {
  test("Should show initialy loading and category title", () => {
    useFetchGif.mockReturnValue({
      img: [],
      loading: true,
    });
    render(<GifGrid category={category} clear={clear} />);
    expect(screen.getByText("Loading...").innerHTML).toBe("Loading...");
    expect(screen.getByText(category).innerHTML).toBe(category);

  });

  test("Should show items, when images are loaded in useFetchGif", () => {
    useFetchGif.mockReturnValue({
      img: [
        { id: "abcfg", title: "Saitama", url: "https://onepunch/saitama.jpg" },
        { id: "abcde", title: "Garou", url: "https://onepunch/garou.jpg" },
      ],
      loading: false,
    });
    render(<GifGrid category={category} clear={clear} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });

  test("Delete button should be visible", () => {
    useFetchGif.mockReturnValue({
      img: [
        { id: "abcfg", title: "Saitama", url: "https://onepunch/saitama.jpg" },
        { id: "abcde", title: "Garou", url: "https://onepunch/garou.jpg" },
      ],
      loading: false,
    });
    render(<GifGrid category={category} clear={clear} />);
    const deleteBtn = screen.getByTestId("delete button");
    expect(deleteBtn).toBeVisible()
  });
  

});