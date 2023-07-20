import classes from "./contact.module.css";
import img1 from "../../imgs/Car.png";
import img2 from "../../imgs/Chhar.png";
import img3 from "../../imgs/Car3.png";
import img4 from "../../imgs/Cjjjghfhar.png";
import img5 from "../../imgs/Rectangle-2.png";
import img6 from "../../imgs/Cutrkttar.png";
import img7 from "../../imgs/hfdhdCar.png";
import img8 from "../../imgs/Cjfjgjgar.png";
import img9 from "../../imgs/Chjfjfjhfar.png";
const Contact = () => {
  return (
    <section className={classes.contact} id="contact">
      <div className={classes.carsGrid}>
        <div className={classes.cornerDivs}>
          <img src={img1} alt="f" />
        </div>
        <div>
          <img src={img2} alt="f" />
        </div>
        <div className={classes.cornerDivs}>
          <img src={img3} alt="f" />
        </div>
        <div className={classes.cornerDivs}>
          <img src={img4} alt="f" />
        </div>
        <div className={`${classes.midCar} brightness-50`}>
          <img src={img5} alt="f" className={`${classes.midCarImg}`} />
          <div className={classes.midCarText}>
            <h1>Tesla Model 3</h1>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button className={classes.midCarContactBtn}>Contact</button>
          </div>
        </div>
        <div className={classes.cornerDivs}>
          <img src={img6} alt="f"></img>
        </div>
        <div className={classes.lastDivs}>
          <img src={img7} className={classes.carsLastImgs} alt="f"></img>
        </div>
        <div className={classes.lastDivs}>
          <img src={img8} className={classes.carsLastImgs} alt="f"></img>
        </div>
        <div className={classes.lastDivs}>
          <img src={img9} className={classes.carsLastImgs} alt="f"></img>
        </div>
      </div>
    </section>
  );
};

export default Contact;
