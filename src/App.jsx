import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { ButtonGeneral } from "./components/ButtonGeneral";
import { LiveTitle } from "./components/LiveTitle";

export const App = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  const handleResetList = () => {
    setCategories([]);
  };

  const handleDeleteGifs = (category) => {
    let index = categories.indexOf(category);
    const newList = [...categories];
    newList.splice(index, 1);
    setCategories(newList);
  }

  return (
    <>
      {/* Title */}
      <LiveTitle />
      {/* Input */}
      <div className="input-bar-container">
        <div className="input-bar">
          <AddCategory addCategory={handleAddCategory} categories={categories} />
        </div>
        <ButtonGeneral onClick={handleResetList} variant="outlined">RESET</ButtonGeneral>
      </div>

      {/* List of GIFS */}
      <div>
        {categories.map((category) => (<GifGrid key={category} category={category} clear={handleDeleteGifs} />))}
      </div>
    </>
  );
};
