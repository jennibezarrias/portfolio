import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/myself.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Sobre <strong className="purple">mim</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={3}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Habilidades<strong className="purple"> Profissionais </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> Utilizadas
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
