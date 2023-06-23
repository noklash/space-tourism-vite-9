import React from "react";
import Navbar from "./Navbar";
import "./Hero.css"


export default function Hero(props){
    // const screenWidth = props.screen
//     const backgroundImg = meidiaQuery(screenWidth)
    
    
    
//    function meidiaQuery(screenWidth) {
//     return screenWidth > 870? console.log("BgDesktop")
//             : screenWidth > 470 ? console.log("BgTablet")
//             : console.log("BgMobile")
        
//    }
    
    
 
    // document.getElementById("heroPage").style.backgroundImage = backgroundImg
    return (
        <div className="hero--page" id="heroPage">
            <Navbar screen={props.screen}/>
        </div>
    )
}