import React, { useState } from "react";

// Categories Data
const categories = [
  {
    name: "Beverages",
    subCategories: [
      {
        name: "Fruit Juices & Drinks",
        items: ["Juices", "Syrups & Concentrates", "Unsweetened, Cold Press"],
      },
      "Coffee",
      
    ],
  },
  { name: "Electronics", subCategories: [] }, // Example with no subcategories
  "Fruits & Vegetables",
  "Foodgrains, Oil & Masala",
  "Bakery, Cakes & Dairy",
  "Snacks & Branded Foods",
  "Beauty & Hygiene",
  "Kitchen, Garden & Pets",
  "Eggs, Meat & Fish",
  
 
];
// Styles Object
const styles = {
    dropdownMenu: {
      position: "absolute",
      top: "100%", // To place it below the button
      left: "0",
      background: "#43A047",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      zIndex: "1000",
      width: "200px",
      padding: "10px 0",
      marginTop: "5px",
    },
    dropdownItem: {
      padding: "10px 15px",
      cursor: "pointer",
      fontSize: "15px",
      color: "#333",
      textDecoration: "none",
      transition: "background-color 0.2s ease-in-out",
      fontWeight:"bold",
    },
    category: {
      padding: "8px 10px",
      marginBottom: "-427px",
      cursor: "pointer",
      backgroundColor: "rgb(67, 160, 71)",
      color: "#fff",
    },

    
  };

const DropdownMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  return (
    <div style={{ display: "flex", position: "relative" }}>
      {/* Main Categories */}
      <div style={styles.category}>
         
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              ...styles.dropdownItem,
              backgroundColor: activeCategory === category ? "#444" : "inherit",
            }}
            onMouseEnter={() => handleCategoryHover(category)}
            onMouseLeave={() => handleCategoryHover(null)}
        >
            {typeof category === "object" ? category.name : category}
          </div>
        ))}
      </div>

      {/* Subcategories */}
      {activeCategory && typeof activeCategory === "object" && (
        <div
          style={styles.dropdownMenu}
            
          onMouseEnter={() => handleCategoryHover(activeCategory)}
          onMouseLeave={() => handleCategoryHover(null)}
        >
          {activeCategory.subCategories.length > 0 ? (
            activeCategory.subCategories.map((subCategory, subIndex) =>
              typeof subCategory === "object" ? (
                <div key={subIndex} style={{ marginBottom: "10px" }}>
                  <strong>{subCategory.name}</strong>
                  <ul>
                    {subCategory.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ marginLeft: "10px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div key={subIndex} style={{ marginBottom: "5px" }}>
                  {subCategory}
                </div>
              )
            )
          ) : (
            <div>No Subcategories</div>
          )}
        </div>
      )}
    </div>
  );
};



export default DropdownMenu;
