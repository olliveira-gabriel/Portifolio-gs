import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import curriculo from '../assets/Img-home/Currículo gs.png'

function ModalCurriculo({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Meu Currículo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={curriculo} width="100%" height="650px" /> 
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCurriculo;
