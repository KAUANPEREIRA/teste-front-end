import React from "react";
import categories from "../../utils/categories.json";
import "../../componentes/categoriesList/categoriesList.scss"; // ou o caminho correto

interface Category {
  id: number;
  name: string;
  icon: string;
  active: boolean;
}

export const CategoriesList: React.FC = () => {
  return (
    <div className="categories-container">
      <div className="categories-list">
        {categories.map((cat: Category) => (
          <div className="d-flex flex-column">
          <div
            key={cat.id}
            className={`categories-item ${cat.active ? "active" : ""}`}
          >
            <img
              src={`/imagens/${cat.icon}`}
              alt={cat.name}
              className="categories-icon"
            />
           
          </div>
           <span className="categories-name">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};