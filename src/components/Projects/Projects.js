import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import caseiro from "../../Assets/Projects/RodrigoCaseiro.png";
<<<<<<< HEAD
import franpress from "../../Assets/Projects/franpresscopy.png";
import doce from "../../Assets/Projects/Doce.png";
import ocean from "../../Assets/Projects/ocean.png";
import edson from "../../Assets/Projects/edson.png";
=======

import franpress from "../../Assets/Projects/franpresscopy.png";
import doce from "../../Assets/Projects/Doce.png";
import ocean from "../../Assets/Projects/ocean.png";
>>>>>>> c06a575c0d342798006031c11059eeac6883a839

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos <strong className="purple">Recentes </strong>
        </h1>
  
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doce}
              isBlog={false}
              title="Doce Landing Page (Projeto UI no Figma)"
              description="Design de interface para landing page de uma marca fictícia de doces artesanais.
               Criação do layout responsivo no Figma, com foco em cores suaves, tipografia afetiva e navegação intuitiva."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocean}
              isBlog={false}
              title="Ocean UI de Tela de Login e Cadastro Responsiva (Figma)"
              description="Criação de telas de login e cadastro responsivas para desktop, tablet e mobile. Layout moderno com foco em contraste, acessibilidade e estética suave.
              Uso de imagens conceituais, botões bem posicionados e campos interativos claros."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={franpress}
              isBlog={false}
              title="FranPress Landing Page Venda de Curso"
              description="Projeto realizado no GreatPage, com foco em marketing educacional e storytelling visual.
              Organização estratégica de seções: apresentação do mentor, conteúdo do curso, vídeos, depoimentos, planos de pagamento e chamadas para ação."
              demoLink="https://curso.franpress.com.br"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caseiro}
              isBlog={false}
              title="Sanscritude Landing Page para Mentoria Espiritual"
              description="Desenvolvimento visual e estruturação da landing page no GreatPage. Organização de seções estratégicas com storytelling, diferenciais da mentoria, público-alvo e chamada para ação.
              Design alinhado com o propósito espiritual do mentor: tons sóbrios, tipografia clássica e linguagem acolhedora."
              demoLink="https://www.rodrigocaseiro.com.br//"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
<<<<<<< HEAD
              imgPath={edson}
              isBlog={false}
              title="Landing Page Edson Júnior - Comex Sênior"
              description="Este é um portfólio simples desenvolvido com HTML, CSS e JavaScript, 
              composto por três páginas; Home, Sobre e a Formação.
              O projeto foi hospedado na Vercel para facilitar o acesso e compartilhamento"
              demoLink="https://portfolioedson.vercel.app/index.html"
=======
              imgPath={caseiro}
              isBlog={false}
              title="Landing Page Edson Júnior - Comex Sênior"
              description="."
              demoLink=""
>>>>>>> c06a575c0d342798006031c11059eeac6883a839
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
