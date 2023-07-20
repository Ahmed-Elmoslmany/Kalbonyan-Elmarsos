import { useState, useContext, useEffect } from "react";
import classes from "./cartItem.module.css";
import classesBtn from "./Car.module.css";
import { IoTrashOutline } from "react-icons/io5";
import CartContext from "../../store/cart-context";
const CartItem = (props) => {

  let [carsNumber, setCarsNumber] = useState(1);
  let [cartList, setCartList] = useState([]);
  const cartCtx = useContext(CartContext)
  
  const carsIncrementHandler = () => {
    setCarsNumber(++carsNumber)

  }

  
  const carsDecrementHandler = () => {
    if(carsNumber > 1){
      
      setCartList(cartCtx.items)
     
    }else{
      setCartList(cartCtx.items)
      cartCtx.removeItem(props.id)
    }

  }

  const deleteCartItemHandler = () => {
    cartCtx.removeItem(props.id)
  }
  return (
    <div>
      
      <div className={classes.cartItem}>
        <div className={classes.cartItemText}>
          <h3>{props.name}</h3>
          <p>{props.title}</p>

          <div className={classes.btns}>
            <div className={classesBtn.cardBtns}>
              <button
                className={classesBtn.cardBtnLeft}
                onClick={carsDecrementHandler}
              >
                -
              </button>
          
              <p>{carsNumber}</p>
              <button
                className={classesBtn.cardBtnRight}
                onClick={carsIncrementHandler}
              >
                +
              </button>
              <button className={classes.deleteBtn} 
              onClick={deleteCartItemHandler}>
                <IoTrashOutline className={classes.trashIc} />
                
              </button>
            </div>
          </div>
        </div>
        <div className={classes.cartItemImg}>
          <img src={props.img} alt={props.img} />
        </div>
      </div>
     
    </div>
  );
};

export default CartItem;
