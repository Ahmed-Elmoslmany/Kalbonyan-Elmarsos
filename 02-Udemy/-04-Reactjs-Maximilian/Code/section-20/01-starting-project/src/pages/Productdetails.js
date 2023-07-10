import { useParams } from "react-router-dom"


function ProductsDetails(){
  const param = useParams()
  return <>
    <h1>ProductsDetails</h1>
    <p>{param.id}</p>
  </>
}

export default ProductsDetails