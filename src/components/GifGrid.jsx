import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import { ButtonGeneral } from "./ButtonGeneral";

export const GifGrid = ({ category, clear }) => {
  const { img, loading } = useFetchGif(category);

  return (
    <>
      <div className="category-container">
        <h3>{category}</h3>
        <ButtonGeneral onClick={() => clear(category)} variant="outlined">
          DELETE
        </ButtonGeneral>
      </div>
      <div className="card-grid">
        {loading ? (
          <h2>Cargando...</h2>
        ) : (
          img.map((imagen) => <GifItem key={imagen.id} {...imagen} />)
        )}
      </div>
    </>
  );
};
