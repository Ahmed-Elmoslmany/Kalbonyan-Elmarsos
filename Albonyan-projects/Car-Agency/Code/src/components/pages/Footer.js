import classes from "./Footer.module.css";
import {IoCallOutline, IoLocationOutline, IoReaderOutline, } from 'react-icons/io5'
import {BsFacebook , BsTwitter, BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <section className={classes.footerSection}>
      <div className={classes.footer}>
        <div className={classes.footerPart1}>
          <h1>
            Your<span>Car</span>
          </h1>
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>
          <br />
          <p>
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>
        <div className={classes.footerPart2}>
          <h1>News Letter</h1>
          <p>
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <div className={classes.FooterIn}>
            <input type="text" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className={classes.footerPart2}>
          <h1>Contact</h1>
          <div>
          <IoCallOutline className={classes.footerIc} />
          <p>  2038 2nd Avenue, Las Vegas, United States </p>
            </div>
            <div>
            <IoLocationOutline className={classes.footerIc} />
            <p className={classes.Ppart2}>  01444773421423 01477678449405 </p>
            </div>
            <div>
            <IoReaderOutline className={classes.footerIc} />
          <p className={classes.Ppart3}>info@YourCar.com </p>
          </div>
        </div>

        
      </div>
      <div className={classes.footerSocial}>
          <div className={classes.socialIcons}>
            <BsFacebook className={classes.bsiconsSocial}/>
            <BsTwitter className={classes.bsiconsSocial}/>
            <BsInstagram className={classes.bsiconsSocial}/>
          </div>
          <div className={classes.footerhr}> </div>
          <p>© Copyright 2023 · <span>YourCar</span> All rights reserved </p>
        </div>
    </section>
  );
};

export default Footer;
