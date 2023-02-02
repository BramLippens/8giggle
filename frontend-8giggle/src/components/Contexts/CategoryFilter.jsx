import { createContext, useState } from "react";

export const ContextCategory = createContext();

export const ContextCategoryPorvider = ({ children }) => {
  const [categoryId, setCategoryId] = useState("2");

  return (
    <ContextCategory.Provider value={{ categoryId, setCategoryId }}>
      {children}
    </ContextCategory.Provider>
  );
};
