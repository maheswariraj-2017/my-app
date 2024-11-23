import React from "react";
import shoppingImg from "../assets/shopping.jpg";


const Banner =() =>{
    return(
        <div style={styles.banner}>
            <img src={shoppingImg} alt="" style={styles.image}/>

        </div>

    );

};


const styles ={
    banner:{margin:"20px 0"},
    image:{position:"relative",height:"500px",width:"1157px",left:"130px"},

};



export default Banner;