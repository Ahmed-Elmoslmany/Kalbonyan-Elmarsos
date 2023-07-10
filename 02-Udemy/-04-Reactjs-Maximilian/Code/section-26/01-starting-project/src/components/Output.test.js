import Output from "./Output";

import { render, screen } from "@testing-library/react";

describe("Test Output Component", () => {
  test("Render Simple! text", () => {
    render(<Output />)

    // act none

    // assert
    const simpleText = screen.getByText('simple!')
    expect(simpleText).toBeInTheDocument()
  })
})