import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "..";

describe("render Button correctly", () => {
  it("should be in the document", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should be able to insert children into the component", () => {
    render(
      <Button>
        <p>Hello World</p>
      </Button>,
    );
    expect(screen.getByRole("button")).not.toBeEmptyDOMElement();
  });

  it("should be able to add props/attributes of a generic HTMLElement", () => {
    render(<Button id="teste" />);
    expect(screen.getByRole("button").id).toBe("teste");
  });

  it("should be a button HTML element", () => {
    render(<Button />);
    expect(screen.getByRole("button").tagName).toBe("BUTTON");
  });
});
