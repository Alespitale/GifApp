import { useState } from "react";
import { GifModal } from "./GifModal";
import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card-item">
      <img loading="lazy" src={url} alt={title} onClick={handleShow} />
      <GifModal url={url} title={title} show={show} onHide={handleClose}/>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
