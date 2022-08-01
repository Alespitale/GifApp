import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import { ButtonGeneral } from "./ButtonGeneral";
import PropTypes from "prop-types";
import "../styles/GifGrid.css";

export const GifGrid = ({ category, clear }) => {
  const { img, loading } = useFetchGif(category);

  return (
    <>
      <div className="category-container">
        <div className="shadowBox">
          <h3 className="rainbow rainbow_text_animated">{category}</h3>
        </div>
        <ButtonGeneral
          data-testid="delete button"
          onClick={() => clear(category)}
        >
          CLEAR
        </ButtonGeneral>
      </div>
      <div className="card-grid">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          img.map((imagen) => <GifItem key={imagen.id} {...imagen} />)
        )}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  clear: PropTypes.func.isRequired,
};
