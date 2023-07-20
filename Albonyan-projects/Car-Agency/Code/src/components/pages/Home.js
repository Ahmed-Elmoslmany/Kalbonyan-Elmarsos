import classes from "./Home.module.css";
import { IoArrowForwardSharp } from "react-icons/io5";
import MainNagivation from "../MainNavigation";
const Home = () => {
  
  return (
    <div className={classes.home}>
      
      <div className={classes.rightText}>

        <h1 className={classes.homeText}>
          Find the perfect car
          for you at YourCar.
        </h1>
        <p className={classes.homePara}>
          We offer a wide range of cars that cater to your needs and budget.
          Visit us today and drive away with your dream car!
        </p>
        <button className={classes.dicBtn}>Dicover <IoArrowForwardSharp/></button>
      </div>
    </div>
  );
};

export default Home;
