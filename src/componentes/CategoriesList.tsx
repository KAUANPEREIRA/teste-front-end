import React from "react";
import categories from "../utils/categories.json";

interface Category {
  id: number;
  name: string;
  icon: string;
  active: boolean;
}

export const CategoriesList: React.FC = () => {
  return (
   
    <div className="container">
 <div className="categories-list">
      {categories.map((cat: Category) => (
        <div
          key={cat.id}
          className={`category-item ${cat.active ? "active" : ""}`}
        >
          <img
            src={`/imagens/${cat.icon}`} 
            alt={cat.name}
            title={cat.name}
            className="category-icon"
          />
          <span className="category-name">{cat.name}</span>
        </div>
      ))}
    </div>
    </div>
   
  );
};
