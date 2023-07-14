import logo from "../assets/logo.png";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from '../assets/l_facebook.png';
import TwitterIcon from '../assets/l_twitter.png';
import InstagramIcon from '../assets/l_instagram.png';
import LinkedinIcon from '../assets/l_linkedin.png';
import midimage from '../assets/l_daktylo.png';
// for testing
export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const handleAboutClick = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div>
      <div className={`main_container background-image ${showAbout ? 'about-open' : ''}`}>
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <main>
          <Container fluid className="firstpage">
            <Container>
              <Row>
                <Col>
                  <h1 className="">COMING SOON</h1>
                  <h2 className="">Discover our story along the way</h2>
                  <div className={`about-link-container ${showAbout ? 'about-link-left' : ''}`}>
                    <button
                      className={`about-link ${showAbout ? 'about-link-active' : ''}`}
                      onClick={handleAboutClick}
                      style={{ transform: showAbout ? 'translateX(-130%)' : 'none' }}
                    >
                      About Us
                    </button>
                    {showAbout && <div className="white-line"></div>}
                  </div>
                </Col>
              </Row>
              <footer>
                <div className="social-icons">
                  <a href="#"><img src={InstagramIcon} alt="InstagramIcon" /></a>
                  <a href="#"><img src={FacebookIcon} alt="FacebookIcon" /></a>
                  <a href="#"><img src={LinkedinIcon} alt="linkedin" /></a>
                  <a href="#"><img src={TwitterIcon} alt="TwitterIcon" /></a>
                </div>
              </footer>
            </Container>
          </Container>
        </main>
        {showAbout && (
          <div className="about-us">
            <Container>
              <Row>
                <Col>
                  <h1 className="about-heading">ABOUT US</h1>
                  <p className="about-text">
                    Welcome to Visual Production, Where visions turn into captivating realities. We believe that every brand has a unique story to tell, and we are passionate about crafting powerful narratives that leave a lasting impression. Through our expertise in visual design and storytelling, we bring your brand’s essence to life, capturing the hearts and minds of your audience. With meticulous attention to detail and a deep understanding of your vision, we collaborate with you to create stunning visuals and narratives that resonate, inspire and ignite a connection. Take the leap and allow us to unlock the full potential of your brand, as we embark on a journey to transform your ideas into an extraordinary visual tapestry that leaves an indelible mark on the world.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src={midimage} alt="midimage" style={{ width: "60px", height: "8%", paddingLeft: "40%", marginTop: "4%" }} />
                  <footer>
                    <div className="social-icons">
                      <a href="#"><img src={InstagramIcon} alt="InstagramIcon" /></a>
                      <a href="#"><img src={FacebookIcon} alt="FacebookIcon" /></a>
                      <a href="#"><img src={LinkedinIcon} alt="linkedin" /></a>
                      <a href="#"><img src={TwitterIcon} alt="TwitterIcon" /></a>
                    </div>
                  </footer>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
}
