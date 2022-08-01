import { useState } from "react";
import PropType from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddCategory = ({ addCategory, categoryName }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => setInputValue(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 1)
      return toast("Please search something", { type: "error" });
    if (categoryName.includes(inputValue)) {
      return toast("You have already searched for that", { type: "warning" });
    }
    addCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} aria-label="form">
        <input
          type="text"
          placeholder="Search GIF"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

AddCategory.propType = {
  addCategory: PropType.func.isRequired,
  categoryName: PropType.string.isRequired,
};
