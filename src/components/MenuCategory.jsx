const MenuCategory = ({ category, isActive, onToggle }) => {
  return (
    <div
      className={`menu-category ${isActive ? "active" : ""}`}
      onClick={onToggle}
    >
      <div className="menu-category-header">
        <h3 className="menu-category-title">{category.name}</h3>
      </div>
      <div
        className="menu-items"
        style={{ display: isActive ? "block" : "none" }}
      >
        {category.items.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <span className="menu-item-name">{item.name}</span>
              <span className="menu-item-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
