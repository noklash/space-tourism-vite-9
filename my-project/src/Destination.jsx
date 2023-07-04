import React from "react";
import Data from "./data.json"
import "./Destination.css"

import  Moon from  "./assets/destination/image-moon.png";
import Titan from "./assets/destination/image-titan.png";
import Europa from "./assets/destination/image-europa.png";
import Mars from "./assets/destination/image-mars.png";
import Navbar from "./Navbar"; 


export default function Destination(){
    const [each, setEach] = React.useState(0)

    // since the JSON images are not rendering i imported them manually and set them in an array in other to access them 
    // using each state
    const destinationImg = [Moon, Mars, Europa, Titan]
    
    
    function selectMoon(){
        setEach(0)
    }

    function selectMars(){
        setEach(1)
    }

    function selectEuropa(){
        setEach(2)
    }

    function selectTitan(){
        setEach(3)
    }
    // Data.destinations[each].images.png
    return (
        <div>
            <Navbar/>
        
        <div className="destination  text-white ">
            
            <h3 className="sub-heading mx-6  text-left">PICK YOUR DESTINATIONS</h3>
            <div className="destination-body mr-10">
                <div className="image-box"> <img src={destinationImg[each]} /></div>
                {/* {console.log(`${Data.destinations[each].images.png}`)} */}
                <div className="choose nav ">
                    <ul className="flex mb-5 mr-auto ml-auto">
                        {/* <li> <a>MOON</a> </li>
                        <li> <a>MARS</a> </li>
                        <li> <a>EUROPA</a> </li>
                        <li> <a>TITAN</a> </li> */}
                        {/* new */}
                        <li onClick={selectMoon}>MOON</li>
                        <li onClick={selectMars}>MARS</li>
                        <li onClick={selectEuropa}>EUROPA</li>
                        <li onClick={selectTitan}>TITAN</li>

                    </ul>
                    <h1 className="name"> {Data.destinations[each].name} </h1>
                    <div className="description">
                        <p>{Data.destinations[each].description}</p>
                    </div>
                    <hr></hr>
                    <div className="flex pb-6  est">
                        <div className="mr-auto">
                            <h5 className="">EST. DISTANCE</h5>
                            <h3 className="est-value">{Data.destinations[each].distance}</h3>
                        </div>
                        <div className="travel">
                            <h5 className="">EST. TRAVEL TIME</h5>
                            <h3 className="est-value">{Data.destinations[each].travel}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}