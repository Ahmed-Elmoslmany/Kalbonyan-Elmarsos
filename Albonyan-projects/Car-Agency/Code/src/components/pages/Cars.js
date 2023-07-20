import React, { useState, useEffect } from "react";
import Car from "./Car";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Cars.module.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Cars = (props) => {
  const [cars, setCars] = useState([]);
  const fetCars = (fetchUrl) => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setCars(data.cars));
  };

  useEffect(() => {
    fetCars("data.json");
  }, []);

  console.log(cars);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={classes.carsGalleryIcDiv}>
        <IoChevronForward
          className={classes.carsGalleryIc}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={classes.carsGalleryIcDiv}>
        <IoChevronBack
          className={classes.carsGalleryIc}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  const settings = {
    dots: true,
    dotsClass: `slick-dots ${classes.dots}`,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={classes.CarsSection} id="cars">
      <div className={classes.carsdiv}>
        <p className={`${classes.car}`}>Cars</p>
        <h1>Cars</h1>
      </div>
      <div className={classes.carsGallery}>
        {cars && cars.length > 0 && (
          <Slider {...settings} className={classes.slider}>
            {cars.map((item, idx) => {
              return (
                <Car
                  key={idx}
                  id={Math.random() * 1000000}
                  name={item.name}
                  title={item.class}
                  description={item.description}
                  seats={item.seats}
                  luggage={item.luggage}
                  img={item.image}
                />
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Cars;
