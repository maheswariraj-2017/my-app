import React from "react";
import veg3 from "../assets/veg3.webp";
import fru2 from "../assets/fru2.webp";
import m2 from "../assets/m2.webp";
import gro2 from "../assets/gro2.webp";
import bev3 from "../assets/bev3.webp";


const productData = [
  { id: 1, name: "Onions (5kgs)", discount: "5%", price: 310, image: veg3 },
  { id: 2, name: "Kiwi (1kg)", discount: "5%", price: 250, image: fru2 },
  { id: 3, name: "Chicken (1kg)", discount: "15%", price: 310, image: m2 },
  { id: 4, name: "Toor Dal (2kgs)", discount: "10%", price: 200, image: gro2 },
  { id: 5, name: "TATA Coffee (1kg)", discount: "15%", price: 290, image: bev3 },
];

const Product = () => {
    // Function to handle "Add to Cart" clicks
  const handleAddToCart = (product) => {
    console.log(`{product.name} added to cart!`);
  };
  return (
    <div style={styles.productContainer}>
      {productData.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p>Discount: {product.discount}</p>
          <p>Price: &#x20B9;{product.price}</p>
          <button style={styles.button}onClick={()=>handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  productContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
    position:"relative",
    left:"103px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "15px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor:"white",
  },

  
  image: {
    width: "75%",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#1B5E20",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
  },
};

export default Product;
