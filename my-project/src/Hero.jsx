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
        <div>
             <Navbar/>
        {/* this is new */}
        <div className="hero h-page" id="heroPage">
            
            <div className="text-white mt-27 mb-25 question--box ml-4">
                <h4 className="so">SO, YOU WANT TO TRAVEL TO</h4>
                <h1 className="h1 mx-4">SPACE</h1>
                <p className="description"> Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
            </div>

            <div className="explore">
                <div className="circlie bg-white text-black  flex mt-4"><h3 className="h3">EXPLORE</h3></div>
            </div>

        </div>
        </div>
    )
}