import classes from "./testimonialCard.module.css";
import {IoStar} from 'react-icons/io5'
import img1 from "../../imgs/car4.png";

const TestimonialCard = (props) => {
  return (
    <div className={classes.testiCard}>
      <p className={classes.testiPara}>
        {props.description}
      </p>
      <p className={classes.testiPara2}>for a luxury car buying experience.</p>
      <div className={classes.stars}>
        <IoStar className={classes.starIn}/>
        <IoStar className={classes.starIn}/>
        <IoStar className={classes.starIn}/>
        <IoStar className={classes.starIn}/>
        <IoStar className={classes.starIn}/>
      </div>
      <div className={classes.testmonialdetail}>
        <h1 className={classes.testmonialName}>{props.name}</h1>
        <p className={classes.testmonialAdd}>Los Anglos</p>
        <img src={props.img} alt={img1} className={classes.testimonaislCar}/>
      </div>
      
    </div>
  );
};

export default TestimonialCard;
