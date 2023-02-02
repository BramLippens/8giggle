import { useContext } from "react";
import { ContextCategory } from "../Contexts/CategoryFilter";

export const Category = ({ id, name }) => {
  const { categoryId, setCategoryId } = useContext(ContextCategory);

  const handleClick = () => {
    if (categoryId === id) {
      setCategoryId("0");
    } else {
      setCategoryId(id);
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
