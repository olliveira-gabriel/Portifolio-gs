import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ImgPort from "../assets/img-tecnico/Portifólio.png";
import ImgPort2 from "../assets/img-tecnico/Port2.png";


function PortfoliosAntigos(props) {
  return (
    <Container className="port-antigo">
      <Row>
        <Col xs={12} sm={10} md={6} lg={5} className="col-port ">
          <img src={ImgPort} />
          <button
            className="btn-curriculo"
            onClick={() => window.open(props.LinkAtv, "_blank")}
          >
            Ver portfólio
          </button>
        </Col>

        <Col  className="col-port">
          <img src={ImgPort2} />
          <button
            className="btn-curriculo"
            onClick={() => window.open(props.LinkAtv2, "_blank")}
          >
            Ver portfólio
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfoliosAntigos;
