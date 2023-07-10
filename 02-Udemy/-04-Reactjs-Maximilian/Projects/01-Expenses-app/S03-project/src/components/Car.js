import classes from './Car.module.css'
import  logo from "../logo.svg"
const Car = (props) => {
  <div className={classes.card}>
    <img src={logo} alt="fad" className="App-logo" />
    <h2>{props.name}</h2>
    <p>{props.title}</p>
    <p>{props.description}</p>
    

  </div>
}

export default Car