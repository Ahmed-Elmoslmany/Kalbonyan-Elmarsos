import React from "react";
import Car from "./Car";
import classes from "./Cars.module.css";
const Cars = (props) => {
  return (
    <section className={classes.CarsSection}>
      <div className={classes.carsdiv}>
        <p className={classes.car}>Cars</p>
        <h1>Cars</h1>
      </div>
      <div className={classes.carsGallery}>
        <Car
          name="BMW"
          title="Mercedes maybach s600"
          description="The"
        />
        
      </div>
    </section>
  );
};

export default Cars;
