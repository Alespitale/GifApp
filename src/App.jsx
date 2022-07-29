import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { ButtonGeneral } from "./components/ButtonGeneral";
import { LiveTitle } from "./components/LiveTitle";
import { toast } from "react-toastify";

export const App = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  const handleResetList = () => {
    if (categories.length > 0) {
      setCategories([]);
      toast("All categories have been removed", { type: "success" });
    }
  };

  const handleDeleteGifs = (category) => {
    let index = categories.indexOf(category);
    const newList = [...categories];
    newList.splice(index, 1);
    setCategories(newList);
    toast(`${category.toUpperCase()} was deleted`, { type: "succes" });
  };

  const useDarkMode = () => {
    document.querySelector('.moon').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  return (
    <>
      <LiveTitle/>
      <div className="moon" onClick={useDarkMode}></div>
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
