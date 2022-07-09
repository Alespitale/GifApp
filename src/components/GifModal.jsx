import Modal from "react-bootstrap/Modal";
import { handleDownload } from "../helpers/getDownload";

export const GifModal = ({ url, title, show, onHide }) => {
  
  return (
    <>
      <Modal className="modal-content" show={show}>
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">{title}</Modal.Title>
          <button className="close-btn" onClick={onHide}>
            x
          </button>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={url} alt="gif" />
          </div>
          <button className="download-btn" onClick={() => handleDownload({url,title})}>
            Download
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};
