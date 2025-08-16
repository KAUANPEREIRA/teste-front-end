import React, { useState } from 'react';
import menuData from '../utils/menuData.json';

export const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <nav className="category-menu">
      <ul className="menu-list">
        {menuData.categories.map((category) => (
          <li 
            key={category.id} 
            className={`menu-item ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <a href={`/${category.slug}`} className="menu-link">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};