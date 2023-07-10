import { Link } from "react-router-dom"

function HomePage () {
  return <>
  <h1>This is my home page</h1>
  <Link to={'/products'}>Go to products</Link>
  </>
}

export default HomePage