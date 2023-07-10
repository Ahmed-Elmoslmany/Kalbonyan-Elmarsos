import { Link } from "react-router-dom"

const dummyProducts = [
  {
    id: 'p1', title: 'product1',
  
  },
  {
    id: 'p2', title: 'product2',
  },
  {
    id: 'p3', title: 'product3',
  }
]
function ProductsPage(){
  return <>
    <h1>ProductsPage</h1>
    <ul>
      {dummyProducts.map((prod) => (
        <li>
          <Link to={`/products/${prod.id}`}>{prod.title}</Link>
        </li>
      ))}
    </ul>
  </>
 
}
export default ProductsPage;