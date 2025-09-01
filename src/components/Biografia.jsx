import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Imggs from '../assets/Img-home/gs1.jpg';
import Imggs2 from '../assets/Img-home/gs2.jpg';
import Imgs3 from '../assets/Img-home/gs3.jpeg';

function Biografia() {
  return (
    <Container className="biografia">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="bio-texto">
          <h1>Biografia</h1>
          <p>
            Gabriel Oliveira Costa da Silva nasceu no dia 1º de março de 2008,
            em Itaquera, no extremo leste de São Paulo. Durante a infância,
            jogava futsal e chegou a ser federado. Em 2018, mudou-se para
            Florianópolis, onde começou a surfar, jogar futevôlei e estudar no
            Colégio Santa Catarina. Em 2023, ingressou no Senai com o objetivo
            de se tornar programador ao concluir o ensino médio. Sua matéria
            preferida é desenvolvimentos de sistemas.
          </p>
          <button>Ver meu currículo 📂</button>
        </Col>
        <Col xs={12} md={6} className="bio-carousel">
          <Carousel fade>
            <Carousel.Item>
              <img src={Imggs} alt="Primeiro slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Imggs2} alt="Segundo slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Imgs3} alt="terceiro slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Biografia;
