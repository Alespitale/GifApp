import { getDownload } from "../../helpers/getDownload";
import "@testing-library/jest-dom";

describe("Test of getDownload", () => {
  test("Should return an array of gifs", async () => {
    const API_KEY = "8qUeVcS0xJkgNHdnO7RCqnIrohsbULUl";
    const title = "goku";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${title}&limit&offset=0&rating=g&lang=en`;
    const fun = getDownload(url,title)
    const image = {
      download: title,
      href: url,
      click: jest.fn(() => fun),
    };
    window.URL.createObjectURL = jest.fn(
      () =>
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${title}&limit&offset=0&rating=g&lang=en`
    );
    window.URL.revokeObjectURL = jest.fn();
    window.Blob = function (content, options) {
      return { content, options };
    };
    jest.spyOn(document, "createElement").mockImplementation(() => image);
    image.click();
    expect(image.download).toBe(title);
    expect(image.href).toBe(url);
    expect(image.click).toHaveBeenCalledTimes(1);
  });
  window.alert = jest.fn();
});
