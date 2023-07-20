import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <h1 className="white">Ahmed Elmoslmany</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ahmed-elmoslmany-014935222/"><img src={navIcon1} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a> */}
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>made by AhmedElmoslmany with ❤️</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
