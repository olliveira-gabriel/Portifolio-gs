import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AtividadeYoutube(props) {
  return (
    <Container className="container-atv">
      <Row>
        <Col md={6}>
          <div className="iframe-container">
            <iframe
              className="iframe-embed"
              src={`https://www.youtube.com/embed/${props.VideoId}`}
              title={props.TituloAtv}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>

        <Col md={6} className="conteudo-atv">
          <h1 className="bio-texto">{props.TituloAtv}</h1>

          <p className="linha" data-prefixo="Assunto:">{props.AssuntoAtv}</p>
          <p className="linha" data-prefixo="Habilidades desenvolvidas:">{props.Competencias}</p>
          <p className="linha" data-prefixo="Objetivo da atividade:">{props.ObjetivoAtv}</p>
          <p className="linha" data-prefixo="Crítica pessoal:">{props.ComentarioPessoal}</p>

          <div className="botao-container">
            <button
              className="btn-curriculo"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${props.VideoId}`, "_blank")}
            >
              Assistir no YouTube
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AtividadeYoutube;
