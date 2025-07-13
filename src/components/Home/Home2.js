import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              I'M <span className="orange"> NIELS SAVVIDES</span>
            </h1>
            <p className="home-about-body">
              I'm passionate about{" "}
              <b className="purple">low-level programming</b> and the
              open-source world.
              <br />
              <br />I enjoy working close to the metal with languages like
              <i>
                <b className="purple"> Rust, C++, and C#</b>
              </i>
              , and I’m a strong believer in the power and freedom of
              <b className="purple"> Linux</b> and open-source ecosystems.
              <br />
              <br />
              Through two internships and a student job, I’ve gained hands-on
              experience with real-world
              <b className="purple"> software integrations</b> and scalable
              <b className="purple"> web technologies</b>. I’m comfortable
              moving between backend systems and web stacks using
              <i>
                <b className="purple"> JavaScript and Python</b>
              </i>
              , always aiming to build tools that are fast, reliable, and clean.
              <br />
              <br />
              Whether I’m writing a service in Rust, working on a web API, or
              tweaking my Linux config, I love learning, building, and
              contributing to meaningful software.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nsavvide"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/niels-savvides-a59362268"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
