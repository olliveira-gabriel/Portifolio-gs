import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AtividadeDocx(props) {
  return (
    <Container className="container-atv">
      <Row>
        <Col md={6}>
          <div className="docx-container">
            <iframe
              className="iframe-embed"
              loading="lazy"
              src={props.LinkAtv}
              title={props.TituloAtv}
            ></iframe>
          </div>
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
              Abrir Documento
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AtividadeDocx;
