// App.test.jsx - tests for the main user interactions.
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders the title and the starter projects", () => {
  render(<App />);
  expect(screen.getByText("Personal Project Showcase App")).toBeInTheDocument();
  expect(screen.getByText("Harbor Coffee Rebrand")).toBeInTheDocument();
  expect(screen.getByText("Trailhead Mobile App")).toBeInTheDocument();
  expect(screen.getByText("Fern & Co. Online Shop")).toBeInTheDocument();
});

test("adds a new project with the form", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText("Title"), { target: { value: "Moss Studio" } });
  fireEvent.change(screen.getByLabelText("Description"), { target: { value: "Portfolio site" } });
  fireEvent.click(screen.getByRole("button", { name: "Add" }));

  expect(screen.getByText("Moss Studio")).toBeInTheDocument();
  // form clears after adding
  expect(screen.getByLabelText("Title")).toHaveValue("");
});

test("shows an error and adds nothing when the form is empty", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Add" }));
  expect(screen.getByRole("alert")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
});

test("filters projects as the user types in search", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText("Search projects"), { target: { value: "coffee" } });
  expect(screen.getByText("Harbor Coffee Rebrand")).toBeInTheDocument();
  expect(screen.queryByText("Trailhead Mobile App")).not.toBeInTheDocument();
});

test("shows a message when no project matches the search", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText("Search projects"), { target: { value: "zzzz" } });
  expect(screen.getByText(/no projects match/i)).toBeInTheDocument();
});
