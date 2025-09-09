
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function AtividadeImg(props) {
  return (
    <Container className="container-atv">
      <Row>
        <Col md={6}>
           <img
              src={props.ImgAtv}
              alt={props.TituloAtv}
              style={{ width: "100%", borderRadius: "8px" }}
            />
        </Col>

        <Col md={6} className="conteudo-atv">
          <h1 className="bio-texto">{props.TituloAtv}</h1>
          {props.AssuntoAtv}
          {props.Competencias}
          {props.ObjetivoAtv}
          {props.ComentarioPessoal}

          <div className="botao-container">
            <button
              className="btn-curriculo"
              onClick={() => window.open(props.LinkAtv, "_blank")}
            >
              Visitar Atividade
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AtividadeImg
