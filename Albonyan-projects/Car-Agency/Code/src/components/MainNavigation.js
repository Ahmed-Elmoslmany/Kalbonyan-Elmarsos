import { useState, useContext, useEffect } from "react";
import classes from "./MainNavigation.module.css";
import { BrowserRouter, Link, NavLink, Navigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import CartContext from "../store/cart-context";
import CartItem from "./pages/cartItem";
import { IoTrashOutline, IoReorderThreeOutline } from "react-icons/io5";

const MainNagivation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [headerColor, setHeaderColor] = useState(false);
  const [cartHide, setCartHide] = useState(true);
  const [cartItemsNumber, setCartItemsNumber] = useState(true);
  
  const cartCtx = useContext(CartContext)
  useEffect( ()=> {
    setCartItemsNumber(cartCtx.items.length)
  }, [cartCtx.items.length])

  const deleteAllCartItemsHandler = () => {
    cartCtx.items = [];
    setCartHide(!cartHide)
  }

  console.log(cartCtx.items.length);
  const cartHandler = () => {
    setCartHide(!cartHide)
  }

  const changeColor = () => {
    if (window.scrollY > 90) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);
  return (
    <BrowserRouter>

    <header className={headerColor ? `${classes.headerScrollColor}` : ''} id="header">
      <nav className={classes.nav}>
        
        <h1 className={headerColor ? `${classes.yourcarScrolled}` : `${classes.yourcar}`}>
          Your<span>Car</span>
        </h1>
        <button onClick={cartHandler}> 
          <IoCartOutline className={headerColor ? `${classes.cartIconScrolled}` : `${classes.cartIcon}`} />
          <p className={headerColor ? `${classes.cartItemNumbersScrolled}` : `${classes.cartItemNumbers}`}>{cartItemsNumber}</p>
          </button>
    <div>

      <button
      className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}
        
      >
        {/* */}
      <IoReorderThreeOutline className={headerColor ? `${classes.hamIconScrolled}` : `${classes.hamIcon}`} />
      </button>
        </div>
        <ul className={!isNavExpanded ? classes.navEl : classes.expanded}>
          <li>

          <Link
            to="/"
            onClick={() => {
              let hero = document.getElementById("home");
              hero &&
              hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={headerColor ? `${classes.linkScrolled}` : `${classes.link}`}
            >
            <span>Home</span>
          </Link>
              </li>
              <li>

          <Link
            to="/"
            onClick={() => {
              let hero = document.getElementById("about");
              hero &&
                hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={headerColor ? `${classes.linkScrolled}` : `${classes.link}`}
          >
            <span>About</span>
          </Link>
            </li>

            <li>

          <Link
            to="/" scroll-behavior='smooth'
            onClick={() => {
              let hero = document.getElementById("service");
              hero &&
              hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={headerColor ? `${classes.linkScrolled}` : `${classes.link}`}
            >
            <span>Service</span>
          </Link>
              </li>

              <li>

          <Link
            to="/"
            onClick={() => {
              let hero = document.getElementById("cars");
              hero &&
              hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={headerColor ? `${classes.linkScrolled}` : `${classes.link}`}
          >
            <span>Cars</span>
          </Link>
              </li>

            <li>

          <Link
            to="/"
            onClick={() => {
              let hero = document.getElementById("contact");
              hero &&
              hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={headerColor ? `${classes.linkScrolled}` : `${classes.link}`}
            >
            <span>Contact us</span>
          </Link>
              </li>
         
        </ul>
      </nav>
      {!cartHide && 
      <div className={classes.cart}>
        <div className={classes.cartMenu}>
          {cartCtx.items.length === 0 && <p className={classes.cartIsEmpty}>Cart is Empty D:</p>}
          {cartCtx.items && cartCtx.items.length > 0 && cartCtx.items.map((item) => (
            <CartItem key={item.id} name={item.name} title={item.title} carsNumber={item.carsNumber} id={item.id} img={item.img}/>
          ))}
          {cartCtx.items.length !== 0 &&
          <button className={classes.deleteAll}
          onClick={deleteAllCartItemsHandler}>Delete All <IoTrashOutline /></button>
          }
          </div>
        
      </div>}
      
    </header>
        </BrowserRouter>
  );
};

export default MainNagivation;