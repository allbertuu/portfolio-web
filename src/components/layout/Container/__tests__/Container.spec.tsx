import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Container from "..";

describe("render Container correctly", () => {
  it("should be in the document", () => {
    render(<Container />);
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });

  it("should have properly TailwindCSS styles", () => {
    render(<Container />);
    expect(screen.getByTestId("container")).toHaveClass(
      "container mx-auto px-6",
    );
  });

  it("should be a div HTML element", () => {
    render(<Container />);
    expect(screen.getByTestId("container").tagName).toBe("DIV");
  });

  it("should be able to insert children into the component", () => {
    render(
      <Container>
        <p>Hello World</p>
      </Container>,
    );
    expect(screen.getByTestId("container")).not.toBeEmptyDOMElement();
  });

  it("should be able to add props/attributes of a generic HTMLElement", () => {
    render(<Container id="teste" />);
    expect(screen.getByTestId("container").id).toBe("teste");
  });
});
