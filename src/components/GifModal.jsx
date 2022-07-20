import Modal from "react-bootstrap/Modal";
import { getDownload } from "../helpers/getDownload";
import PropTypes from "prop-types";

export const GifModal = ({ url, title, show, onHide }) => {
  return (
    <div>
      <Modal className="modal-content" show={show}>
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">{title}</Modal.Title>
          <button
            data-testid="close button"
            className="close-btn"
            onClick={onHide}
          >
            x
          </button>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={url} alt={title} />
          </div>
          <button
            data-testid="download button"
            className="download-btn"
            onClick={() => getDownload({ url, title })}
          >
            Download
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

GifModal.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
