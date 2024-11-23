import React from "react";
import { FaInstagram,FaFacebook,FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
        <div style={styles.iconContainer}>
     
      
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaInstagram size={30} />
        </a>
        <a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaFacebook size={30} />
        </a>
        <a 
          href="https://www.twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaTwitter size={30} />
        </a>
      </div>
      <p style={styles.text}>© 2024 Fresh SuperMarket. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    color: "white",
    textAlign: "center",
    padding: "20px 0px",
    position: "relative",
    bottom: "-691px",
    width: "95%",
    backgroundcolor:"rgb(226, 49, 49)",

    left: "40px",
},

  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px", // Space between the icons
    marginBottom: "10px",
  },
  icon: {
    color: "#fff", // Default icon color
    textDecoration: "none", // Remove underline from the link
    transition: "color 0.3s", // Smooth transition on hover
  },
  iconHover: {
    color: "#007bff", // Color on hover
  },
  text: {
    fontSize: "14px",
    marginTop: "10px",
  },
};



export default Footer;
