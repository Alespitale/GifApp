import { useState } from "react";
import { toast } from "react-toastify";
export const useHandleCategories = () => {
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

  return {
    categories,
    handleAddCategory,
    handleResetList,
    handleDeleteGifs,
  };
};
