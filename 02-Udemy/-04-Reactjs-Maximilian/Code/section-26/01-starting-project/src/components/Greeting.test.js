import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Greeting from "./Greeting"

describe("Greeting component", () => {
  test('Renders a Hello world! as text', () =>{
    render(<Greeting />)
  
    // act soon...
  
    const testText = screen.getByText('Hello world!')
    expect(testText).toBeInTheDocument()
  } )

  test('Renders a text if button NOT clicked', () =>{
    render(<Greeting />)
  
    // act soon...
    
    const testTextBClick = screen.getByText("it's good to see you")
    expect(testTextBClick).toBeInTheDocument() 
  } )

  test('Renders a text if button clicked', () =>{
    // arrange
    render(<Greeting />)
  
    // act soon...
    const clickedButton = screen.getByRole('button')
    userEvent.click(clickedButton)

    // assert
    const testTextFClick = screen.getByText("text changed nice see you")
    expect(testTextFClick).toBeInTheDocument() 
  } )


  test('Not Renders a text if button clicked', () =>{
    // arrange
    render(<Greeting />)
  
    // act soon...
    const clickedButton = screen.getByRole('button')
    userEvent.click(clickedButton)

    // assert
    const testTextFClick = screen.queryByText("it's good to see you")
    expect(testTextFClick).toBeNull()
  } )
})