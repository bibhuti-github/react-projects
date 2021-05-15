import logo from './agrikol-logo.png';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import Navigation from './Navigation';
import { HomeBanner } from './Images'
import initFontAwesome from "./initFontAwesome";
initFontAwesome();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Container>
          <Row className="p-5">
            <Col className="p-3">
              <a className="header-top-left" href="mailto:needhelp@agrikol.com"><FontAwesomeIcon icon={faEnvelope}  />needhelp@agrikol.com</a>
		          <a className="header-top-left" href="tel:666-888-0000"><FontAwesomeIcon icon={faPhone}  />666-888-0000</a></Col>
            <Col><img src={logo} className="App-logo" alt="logo" /></Col>
            <Col className="p-3">
              <a className="header-top-right" href="#"><FontAwesomeIcon icon={['fab', 'facebook-square']}  /></a>
		          <a className="header-top-right" href="#"><FontAwesomeIcon icon={['fab', 'twitter']}  /></a>
              <a className="header-top-right" href="#"><FontAwesomeIcon icon={['fab', 'instagram']}  /></a>
              <a className="header-top-right" href="#"><FontAwesomeIcon icon={['fab', 'dribbble']}  /></a>
            </Col>
          </Row>
          
        </Container>
        <Navigation />
      </header>
      <div className="homepage-bgimage" style={{ backgroundImage: 'url(' + HomeBanner + ')' }}>
        <Container>
          <Row className="p-5">
            <Col className="p-3 col-8 banner-title">
              <span className="">WELCOME TO AGRICULTURE FORM</span>
              <div className="mb-2">
                <Button variant="primary" size="lg" className="header-banner-link">
                  Discover More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="col-12 banner-navigation-btn">
          <Col className="col-12">
            <div className=" banner-navigation-btn-right">
              <Button variant="primary" size="lg">
                  NEXT &gt;
              </Button>
            </div>
            <div className=" banner-navigation-btn-left">
              <Button variant="primary" size="lg">
                &lt; PREV 
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
