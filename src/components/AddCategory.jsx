import { useState } from "react";

export const AddCategory = ({ addCategory, categories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => setInputValue(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;
    if (categories.includes(inputValue)) return alert("Already Searched!")
    addCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search GIF"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
