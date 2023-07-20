import { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Car.module.css";
import { IoAccessibility } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
const Car = (props) => {
  const cartCtx = useContext(CartContext);
  let obj={}
  let [carsNumber, setCarsNumber] = useState(0);

  if(cartCtx.items.length){
  
  }
  const carsIncrementHandler = () => {
    if(!carsNumber){
      
      setCarsNumber(++carsNumber)
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        title: props.title,
        img: props.img,
        carsNumber: 1
      })
      return
      // console.log(cartCtx.items);
    }

    setCarsNumber(++carsNumber)
  }

  const carsDecrementHandler = () => {
    if(carsNumber > 1){
      setCarsNumber(--carsNumber)
      
    }else{
      setCarsNumber(--carsNumber)

      cartCtx.removeItem(props.id)
    }
  }
  console.log(obj.carsNumber);
  
  return (
    <div className={classes.card}>
      <div className={classes.cardHead}>
        <img src={props.img} alt="fad" />

        <h2>{props.name}</h2>
        <p>{props.title}</p>
      </div>
      <p className={classes.carPara}>{props.description}</p>
      <div className={classes.cardBottom}>
        <div className={classes.cardIcons}>
          <div className={classes.cardIconPara}>
            <IoAccessibility className={classes.cardIcon} />
            <p>{props.seats}</p>
          </div>
          <div className={classes.cardIconPara}>
            <IoBag className={classes.cardIcon} />
            <p>{props.luggage}</p>
          </div>
        </div>
        <div className={classes.cardBtns}>
          <button 
          className={classes.cardBtnLeft}
          onClick={carsDecrementHandler}
          >
            -
          </button>
          
          <p>{carsNumber}</p>
          <button
            className={classes.cardBtnRight}
            onClick={carsIncrementHandler}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Car;
