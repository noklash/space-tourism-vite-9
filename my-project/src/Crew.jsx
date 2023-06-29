import React from "react";
import "./Crew.css"
import Data from "./data.json";
import "./assets/crew/image-douglas-hurley.webp";
import "./assets/crew/image-anousheh-ansari.webp";
import "./assets/crew/image-victor-glover.webp";
import  "./assets/crew/image-mark-shuttleworth.webp"
import Navbar from "./Navbar";


export default function Crew(){

    const [each, setEach] = React.useState(0)
    // const select = [0, 1, 2, 3]
    // const each = 
    
    function selectDouglas(){
        setEach(0)
    }

    function selectMark(){
        setEach(1)
    }

    function selectVictor(){
        setEach(2)
    }

    function selectAnousheh(){
        setEach(3)
    }
    // Data.crew[each].images.png
    return (
        <div className="crew-whole pb-6">
            <Navbar/>
            
        <div className="crew my-12 pt-10 text-white">
            
            
            {/* <div className="crew-body my-12">
             <h5> 02 MEET OUR CREW</h5>
                <div className="image-box">
                    <img src={Doug}/>
                </div>
                
            </div> */}
                
                <div className="details-section">
                <h5 className="pb-8 mt-8 text-left mx-6"> 02 MEET OUR CREW</h5>
                    <div className="member-details mx-6">
                        <h4 className="role"> {Data.crew[each].role} </h4>
                        <h2 className="name"> {Data.crew[each].name} </h2>
                        <p className="bio"> {Data.crew[each].bio} </p>
                    </div>
                    <div className="flex circle-box justify-center">
                        <div className="circle" onClick={selectDouglas}></div>
                        <div className="circle" onClick={selectMark}></div>
                        <div className="circle" onClick={selectVictor}></div>
                        <div className="circle" onClick={selectAnousheh}></div>
                    </div>
                </div>


                <div className="crew-body my-12">
             
                <div className="image-box">
                    <img src={Data.crew[each].images.webp}/>
                </div>
                
            </div>
            
            
        </div>
        </div>
    )
}