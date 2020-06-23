import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm />
    )
    expect(asFragment()).toMatchSnapshot();
  })
  it("renders a text input", () => {
    render(<SearchForm />)
    const input = screen.getByTestId("input-id");

    expect(input).toHaveAttribute("type", "text");
  });
  it("renders a button", () => {
    render(<SearchForm />);
    screen.getByRole('button', {name: /go!/i})
  });
})