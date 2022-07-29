import Modal from "react-bootstrap/Modal";
import { getDownload } from "../helpers/getDownload";
import PropTypes from "prop-types";
import { DownloadIcon } from "./icons/Download.jsx";
import { CloseIcon } from "./icons/Close.jsx";

export const GifModal = ({ url, title, show, onHide }) => {
  return (
      <Modal className="modal-content" show={show}>
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">{title}</Modal.Title>
          <button
            data-testid="close button"
            className="close-btn"
            onClick={onHide}
          >
            <CloseIcon />
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
            <DownloadIcon />
          </button>
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
