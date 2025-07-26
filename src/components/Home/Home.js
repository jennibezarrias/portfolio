import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Vamos navegar pelo meu<span className="purple"> portfólio! </span>
            </h1>
            <p className="home-about-body">
            Seja bem-vindo(a)! Aqui você vai encontrar alguns dos trabalhos que desenvolvi
            ao longo da minha trajetória. Ainda estou reunindo projetos de experiências anteriores, 
            mas já é possível ter um gostinho do que venho construindo.
            <br />
            <br />
            Atualmente atuo como freelancer e tenho me dedicado a criar projetos voltados 
            para ajudar outras pessoas a entrarem no mundo da tecnologia.
            <span class name="purple">Bora me conhecer melhor?</span>
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
            <h1>Vamos nos conectar</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jennibezarrias/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
    
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jenniffer-santos-841238238/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jennibezarrias?igsh=MW1weGY4M3J5ZGw5aA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home;
