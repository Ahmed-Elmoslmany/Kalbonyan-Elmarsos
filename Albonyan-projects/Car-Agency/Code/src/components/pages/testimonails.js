import classes from "./testimonails.module.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonialCard";
const Testimonails = () => {
  const settings = {
    dots: true,
    dotsClass: `slick-dots ${classes.dots}`,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const [testimonails, setTestimonails] = useState([]);
  const fetTestimonails = (fetchUrl) => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setTestimonails(data.testimonials));
  };

  useEffect(() => {
    fetTestimonails("data.json");
  }, []);

  return (
    <section className={classes.testimonialsSection}>
      <p className={classes.testimonialsBig}>TESTIMONIALS</p>
      <h1 className={classes.testimonialsSmall}>Testimonials</h1>

      {testimonails && testimonails.length > 0 && (
        <Slider {...settings} className={classes.slider}>
          {testimonails.map((item, idx) => {
            return (
              <TestimonialCard
                key={idx}
                name={item.name}
                description={item.description}
                img={item.image}
              />
            );
          })}
        </Slider>
      )}
      <div></div>
    </section>
  );
};

export default Testimonails;
