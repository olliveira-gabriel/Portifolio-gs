import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalCurriculo({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Meu Currículo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Aqui você pode colocar um PDF embedado, link do currículo ou informações extras.</p>
        {/* Exemplo com PDF embedado */}
        {/* <iframe src="/meu-curriculo.pdf" width="100%" height="400px" /> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCurriculo;
