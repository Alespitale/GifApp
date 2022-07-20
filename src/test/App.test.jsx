import { App } from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test of initial App state", () => {
  test("Verifying initial state", () => {
    render(<App />);
    expect(screen.getByText("Gifinder").innerHTML).toBe("Gifinder");
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("");
    expect(screen.getByTestId("reset button")).toBeVisible();
  });
});

describe("Test of change of categories state", () => {
  beforeEach(() => {
    render(<App />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.change(input, { target: { value: "Itachi" } });
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: "Naruto" } });
    fireEvent.submit(form);
  });

  test("Should change categories state", () => {
    const h3 = screen.queryAllByRole("heading", { level: 3 });
    expect(h3).toBeTruthy();
    expect(h3.length).toBe(2);
    expect(h3[0].innerHTML).toBe("Naruto");
    expect(h3[1].innerHTML).toBe("Itachi");
  });

  test("Reset button should clear all categories from the array", () => {
    const resetBtn = screen.getByTestId("reset button");
    fireEvent.click(resetBtn);
    const h3 = screen.queryAllByRole("heading", { level: 3 });
    expect(h3.length).toBe(0);
  });

  test("The remove button should remove the Naruto category from the array", () => {
    let h3 = screen.queryAllByRole("heading", { level: 3 });
    expect(h3[0].innerHTML).toBe("Naruto");
    expect(h3[1].innerHTML).toBe("Itachi");
    const deleteBtn = screen.getAllByTestId("delete button");
    fireEvent.click(deleteBtn[0]);
    h3 = screen.queryAllByRole("heading", { level: 3 });
    expect(h3.length).toBe(1);
    expect(h3[0].innerHTML).toBe("Itachi");
  });
});
