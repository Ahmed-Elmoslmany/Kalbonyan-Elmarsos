import classes from './Sponsers.module.css'
import img1 from "../../imgs/spn1.png";
import img2 from "../../imgs/spn2.png";
import img3 from "../../imgs/spn3.png";
import img4 from "../../imgs/spn4.png";
import img5 from "../../imgs/spn5.png";
import img6 from "../../imgs/spn6.png";
import img7 from "../../imgs/spn7.png";
import img8 from "../../imgs/spn8.png";

const Sponsers = () => {
  return(
    <section className={classes.sponsersSection}>
      <div className={classes.gridSponsers}>
        <div className={classes.sponserImg}>
          <img src={img1} alt={img1}/>
        </div>
        <div className={classes.sponserImg}>
          <img src={img2} alt={img2}/>
        </div>
        <div className={classes.sponserImg}>
          <img src={img3} alt={img3}/>
        </div>
        <div className={classes.sponserImg}>
          <img src={img4} alt={img4}/>
        </div>
        <div className={classes.sponserImg}>
          <img src={img5} alt={img5}/>
        </div>
        <div className={classes.sponserImg}>
          <img src={img6} alt={img6}/>
        </div>
        <div className={classes.sponserImg}>
          <img src={img7} alt={img7}/>
        </div>
        <div className={classes.sponserImg}>
          <img src={img8} alt={img8}/>
        </div>
      </div>
    </section>
  )
}

export default Sponsers