import { useState } from "react";
import { GifModal } from "./GifModal";

export const GifItem = ({ title, url }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card">
      <img src={url} alt="gif" onClick={handleShow}/>
      <GifModal url={url} title={title} show={show} onHide={handleClose}/>
    </div>
  );
};