import { AddCategory } from "./AddCategory";
import { ButtonGeneral } from "./ButtonGeneral";
import { GifGrid } from "./GifGrid";
import { useHandleCategories } from "../hooks/useHandleCategories";
import "../styles/InputBarAndGrid.css";

export const InputBarAndGrid = () => {
  const { categories, handleAddCategory, handleResetList, handleDeleteGifs } =
    useHandleCategories();

  return (
    <>
      <div className="input-bar-container">
        <div className="input-bar">
          <AddCategory
            addCategory={handleAddCategory}
            categoryName={categories}
          />
        </div>
        <ButtonGeneral data-testid="reset button" onClick={handleResetList}>
          RESET
        </ButtonGeneral>
      </div>
      {categories.map((category) => (
        <GifGrid key={category} category={category} clear={handleDeleteGifs} />
      ))}
    </>
  );
};
