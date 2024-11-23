import React ,{useState,useRef,useEffect }from "react";
import {  FaShoppingCart } from "react-icons/fa";
import logoImg from "../assets/logos.jpg"
import DropdownMenu from"./DropdownMenu";
import { FaMotorcycle,FaChevronDown} from "react-icons/fa";

const Header = () => {
    const [isDropdownVisible,setIsDropdownVisible]=useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown=()=>{
        setIsDropdownVisible((prevState) =>!prevState);
    };
     // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    return(
        <header style={styles.header}>
            {/*logo*/}
            <div style={styles.logo}>
                <img src={logoImg} alt="" style={styles.logoImg} />

            </div>
            {/*searchbar*/}
            <input type="text" placeholder="Search for Products..." style={styles.searchBar}/>
           
            <div style={styles.deliveryInfo}>
            <FaMotorcycle style={{ marginRight: "5px" }} />
        <div>
          <span style={{ fontSize: "10px", color: "rgb(67, 160, 71)" }}>Get it in 2 hrs</span>
          <br />
          <strong style={{ fontSize: "10px" ,color:"rgb(67, 160, 71)"}}>560004. Bangalore</strong>
        </div>
        </div>
            {/*navbar */}
            <nav style={styles.nav}>
               
                <div style={{position:"relative"}} ref={dropdownRef}>
                    <button onClick={toggleDropdown} style={styles.dropdownButton}>
                    Shop by Category <FaChevronDown style={{ marginRight: "5px" }} />
                   
        
                 </button>
                 
                 {isDropdownVisible && <DropdownMenu/>}
                   </div>
                
                   
                <button style={styles.login}>Login /Sign Up</button>
                <FaShoppingCart size={20} color="#1B5E20;" position="relative" left="30px" />

            </nav>
        </header>
    );
};
 const styles ={
    header:{
        display:"flex",
        objectFit:"fill",
        alignItems:"center",
        padding:"10px",
        background:"#e23131",
        height:"100px",
    },
    logoImg:{
        width:"105px",
        position:"relative",
        left:"16px",
        bottom:"3px",
    },
    searchBar:{
        margin:"0,10px",
        padding:"10px",
        border:"1px solid #ccc", 
        borderRadius:"7px",
        left:"22px",
        position:"relative",
        height:"33px",
        width:"623px",
    },
    nav:{
        display:"flex",
        gap:"15px",
        alignItems:"center",
        textDecoration:"none",
        zIndex:"1",
    },
    login:{
        backgroundColor: "#1B5E20",
        color: "rgb(255, 255, 255)",
        border: "none",
        borderRadius: "5px",
        padding: "10px 15px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "14px",
        position: "relative",
        left: "33px",
        width: "137px",
        height: "45px",
    },

deliveryInfo: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: "5px",
    padding: "5px 10px",
    fontSize: "14px",
    position:"relative",
    left:"30px",

  },
  
  dropdownButton :{
    position:"relative",
    left:"35px",
    height: "43px",
    width: "187px",
    borderRadius: "5px",
    border:"none",
    backgroundColor: "#1B5E20",
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",

  },
  svg:{
    position:"relative",
    color:"#1B5E20",
    left:"50px",
  }
  
 };




export default Header;