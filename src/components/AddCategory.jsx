import { useState } from "react";
import PropType from "prop-types";

export const AddCategory = ({ addCategory, categoryName }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => setInputValue(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 1)
      return alert("You have to search something");
    if (categoryName.includes(inputValue))
      return alert("You already searched that!");
    addCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Search GIF"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propType = {
  addCategory: PropType.func.isRequired,
  categoryName: PropType.string.isRequired,
};
