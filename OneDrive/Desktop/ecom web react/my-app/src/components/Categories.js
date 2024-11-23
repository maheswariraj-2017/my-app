import React from "react";

const categories = ["Eggs, Fish & Meat", "Buy More & Save More", "Deal of this Week", "Combo Store"];

const Categories = () => {
  return (
    <div style={styles.container}>
      {categories.map((category, index) => (
        <button key={index} style={styles.button}>
          {category}
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
        gap:" 44px",
        padding: "10px",
        width: "843px",
        position: "relative",
        left: "270px",
        height: "70px",
  },
  button: {
    padding: "10px 20px",
    background: "rgb(245, 245, 245)",
    border: "1px solid rgb(204, 204, 204)",
    borderRradius: "5px",
    cursor: "pointer",
    width: "172px",
    backgroundColor:" #e23131",
    fontSize: "15px",
    fontWeight: "bold",
    color: "white",
},
};

export default Categories;
