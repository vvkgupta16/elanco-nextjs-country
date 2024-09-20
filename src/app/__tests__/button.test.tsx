import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../../components/button";

const handleClick = jest.fn();

describe("Button Component", () => {
  it("calls the onClick handler when clicked", () => {
    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>
    );
    const buttonElement = getByText("Click Me");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
