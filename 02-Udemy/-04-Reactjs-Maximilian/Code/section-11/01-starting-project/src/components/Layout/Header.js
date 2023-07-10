import { Fragment } from "react"

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"
const Header = props => {
  return <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton showCartHandler={props.showCartHandler}/>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="Food table"/>
    </div>
   </Fragment>
}

export default Header