import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá! Meu nome é <span className="purple">Jenniffer Santos </span>
            e sou uma desenvolvedora front-end apaixonada por criar experiências
            digitais incríveis. Tenho 25 anos e, apesar de estar no início da minha
            carreira, já acumulei 3 anos de experiência na área de programação.
            Desde cedo, me encantei pelos "botõezinhos coloridos" e pela
            possibilidade de transformar ideias em realidade através do código.
            O que me atraiu na área são os desafios constantes — sempre há algo novo.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "A programação é a arte de transformar ideias em realidade, e eu
            estou aqui para criar algo incrível!"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
