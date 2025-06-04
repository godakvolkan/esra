import React from 'react';
import { menuItems } from '../data/menuItems';
import '../styles/Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menü</h1>
      {menuItems.map(category => (
        <div key={category.id} className="menu-category">
          <h2 className="menu-category-title">{category.name}</h2>
          <div className="menu-items-grid">
            {category.items.map(item => (
              <div key={item.id} className="menu-card">
                <img src={item.image} alt={item.name} className="menu-card-img" />
                <div className="menu-card-content">
                  <h3 className="menu-card-name">{item.name}</h3>
                  <span className="menu-card-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
