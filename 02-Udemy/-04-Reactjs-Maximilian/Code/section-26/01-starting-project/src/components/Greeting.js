import { useState } from "react"

const Greeting = () => {

  const [changeText, setChangeText ] = useState(false)

  const changeTextHandler = () => {
    setChangeText(true)
  }
  return <div>
    <h1>Hello world!</h1>
    {!changeText && <p>it's good to see you</p> }
    {changeText && <p>text changed nice see you</p> }
  <button onClick={changeTextHandler}>changeText!</button>
  </div>
}

export default Greeting