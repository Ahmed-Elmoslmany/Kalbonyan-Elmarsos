import classes from "./Service.module.css";
import { IoStar } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";

const Service = () => {
  return (
    <section className={classes.serviceWrapper} id="service">

    <div className={classes.serviceSection}>
      
      <div className={classes.serviceCarBK}>
        <div className={classes.serviceDiv}>
          <p className={classes.servicePara}>Service</p>
          <h1 className={classes.serviceH1}>Service</h1>
        </div>
        <div className={classes.serviceCardPack}>
          <div className={classes.serviceCard}>
            <IoStar className={classes.cardIcon} />
            <h1>Car sales</h1>
            <p>
              At YourCar, we offer a wide selection of luxury vehicles for sale.
              Whether you're in the market for a sleek sports car or a spacious
              SUV, we have the perfect vehicle to fit your needs.
            </p>
          </div>
          <div className={classes.serviceCard}>
            <IoAccessibility className={classes.cardIcon} />
            <h1>Car sales</h1>
            <p>
              If you're in need of a luxury car rental, look no further than
              YourCar. Our fleet of high-end vehicles is regularly maintained
              and serviced to ensure that you have a safe and comfortable
              driving experience.
            </p>
          </div>
          <div className={classes.serviceCard}>
            <IoEarth className={classes.cardIcon} />
            <h1>Car sales</h1>
            <p>
              At YourCar, we make it easy to sell your car. Simply bring your
              vehicle in for an appraisal, and we'll handle the rest. We offer
              fair prices and a hassle-free selling process, so you can get your
              vehicle with minimal effort.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Service;
