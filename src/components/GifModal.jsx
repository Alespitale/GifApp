import Modal from "react-bootstrap/Modal";
import { getDownload } from "../helpers/getDownload";
import PropTypes from "prop-types";
import "../styles/GifModal.css";

export const GifModal = ({ url, title, show, onHide }) => {
  return (
    <Modal className="modal-content" show={show}>
      <Modal.Header className="modal-header">
        <Modal.Title className="modal-title">{title}</Modal.Title>
        <span
          className="lnr lnr-cross-circle"
          data-testid="close button"
          onClick={onHide}
        ></span>
      </Modal.Header>
      <Modal.Body>
        <img loading="lazy" src={url} alt={title} />
        <span
          className="lnr lnr-download"
          data-testid="download button"
          onClick={() => getDownload({ url, title })}
        ></span>
      </Modal.Body>
    </Modal>
  );
};

GifModal.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
