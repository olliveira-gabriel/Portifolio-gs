import Container from 'react-bootstrap/Container';
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Imggs from '../assets/Img-home/gs1.jpg';
import Imggs2 from '../assets/Img-home/gs2.jpg';
import Imgs3 from '../assets/Img-home/gs3.jpeg';
import ModalCurriculo from '../components/ModalCurriculo.jsx'
import Button from 'react-bootstrap/Button'
function Biografia() {

  const [show, setShow] = useState(false);

  return (

    <Container className="biografia py-5 my-5"> 
      <Row className="align-items-center g-5">   
        <Col xs={12} md={6} className="text-center text-md-start">
          <h1 className="bio-texto mb-3">Biografia</h1>     
          <p className="mb-4">
            Gabriel Oliveira Costa da Silva nasceu no dia 1º de março de 2008,
            em Itaquera, no extremo leste de São Paulo. Durante a infância,
            jogava futsal e chegou a ser federado. Em 2018, mudou-se para
            Florianópolis, onde começou a surfar, jogar futevôlei e estudar no
            Colégio Santa Catarina. Em 2023, ingressou no Senai com o objetivo
            de se tornar programador ao concluir o ensino médio. Sua matéria
            preferida é desenvolvimentos de sistemas.
          </p>
          <div className="d-flex justify-content-center">
          <Button className="custom-btn" onClick={() => setShow(true)}>Ver meu currículo 📂</Button>
            <ModalCurriculo show={show} onHide={() => setShow(false)}/>
          </div>

        </Col>

        <Col xs={12} md={6} className="d-flex justify-content-center">
          <div className="w-100 mx-auto" style={{ maxWidth: 420 }}>
            <Carousel fade className="shadow rounded-4 overflow-hidden">
              <Carousel.Item>
                <img className="d-block w-100 img-fluid" src={Imggs} alt="Primeiro slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 img-fluid" src={Imggs2} alt="Segundo slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 img-fluid" src={Imgs3} alt="Terceiro slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Biografia;
