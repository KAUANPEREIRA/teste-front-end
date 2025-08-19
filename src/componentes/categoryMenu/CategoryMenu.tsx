import React, { useState } from 'react';
import menuData from '../../utils/menuData.json';
import '../../componentes/categoryMenu/categories.scss'


export const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container">
<nav className={`category-menu ${isMobileMenuOpen ? 'open' : ''}`}>
  {/* Botão hamburguer */}
  <div className="hamburger" onClick={toggleMobileMenu}>
    <span className={isMobileMenuOpen ? 'open' : ''}></span>
    <span className={isMobileMenuOpen ? 'open' : ''}></span>
    <span className={isMobileMenuOpen ? 'open' : ''}></span>
  </div>

  {/* Menu */}
  <ul className={`menu-list ${isMobileMenuOpen ? 'open' : ''}`}>
    {menuData.categories.map((category) => (
      <li
        key={category.id}
        className={`menu-item ${activeCategory === category.id ? 'active' : ''}`}
        onClick={() => {
          setActiveCategory(category.id);
          setIsMobileMenuOpen(false);
        }}
      >
        <a href={`/${category.slug}`} className="menu-link">
          {category.name}
        </a>
      </li>
    ))}
  </ul>
</nav>
    </div>
    

  );
};
