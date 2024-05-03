import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";
import navIcon1 from "../assets/github-svgrepo-com.svg";
import navIcon2 from "../assets/linkedin-svgrepo-com.svg";
import navIcon3 from "../assets/whatsapp-128-svgrepo-com.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Felnando2112"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/fernando-avenda%C3%B1o-540152260/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://wa.me/584242111400"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}