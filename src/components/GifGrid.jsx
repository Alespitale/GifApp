import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import { ButtonGeneral } from "./ButtonGeneral";
import Spinner from "react-bootstrap/Spinner";

export const GifGrid = ({ category, clear }) => {
  const { img, loading } = useFetchGif(category);

  return (
    <>
      <div className="category-container">
        <h3>{category}</h3>
        <ButtonGeneral onClick={() => clear(category)}>
          DELETE
        </ButtonGeneral>
      </div>
      <div className="card-grid">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          img.map((imagen) => <GifItem key={imagen.id} {...imagen} />)
        )}
      </div>
    </>
  );
};
