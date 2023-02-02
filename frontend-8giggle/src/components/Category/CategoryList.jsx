import { useState } from "react";
import { CATEGORY_DATA } from "../../api/mock-data";
import { Category } from "./Category";

export const CategoryList = () => {
  const [categories, setCategories] = useState(CATEGORY_DATA);

  return (
    <div className="px-2">
      <div className="flex -mx-2 mb-4">
        {categories.map((category) => (
          <div className="px-2">
            <Category key={category.id} id={category.id} name={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
