import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../hooks/useFetchGif";

describe("Test of useFetchGif hook", () => {
  test("Should go back to initial state", () => {
    const { result } = renderHook(() => useFetchGif("One punch"));
    const { img, loading } = result.current;
    expect(img.length).toBe(0);
    expect(loading).toBeTruthy();
  });

  test("Should return an array of images and the loading in false", async () => {
    const { result } = renderHook(() => useFetchGif("One Punch"));
    await waitFor(() => expect(result.current.img.length).toBeGreaterThan(0));
    const { img, loading } = result.current;
    expect(img.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
