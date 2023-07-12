import React from "react";
import Navbar from "./Navbar";
import "./Technology.css"
import Data from "./data.json"
import LaunchVehicleMobile from "./assets/technology/image-launch-vehicle-landscape.jpg";
import LaunchVehicleDesktop from "./assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceportDesktop from "./assets/technology/image-spaceport-portrait.jpg";
import SpaceportMobile from "./assets/technology/image-spaceport-landscape.jpg";
import SpaceCapsuleDesktop from "./assets/technology/image-space-capsule-portrait.jpg";
import SpaceCapsuleMobile from "./assets/technology/image-space-capsule-landscape.jpg";


export default function Technology(props){
    const [each, setEach] = React.useState(0)
    const screen = props.screen 
   
    const mobile = [LaunchVehicleMobile, SpaceportMobile, SpaceCapsuleMobile]
    const desktop = [LaunchVehicleDesktop, SpaceportDesktop, SpaceCapsuleDesktop]

    const whichOne = screen > 675? desktop : mobile 

    function selectOne(){
        setEach(0)
    }

    function selectTwo(){
        setEach(1)
    }

    function selectThree(){
        setEach(2)
    }
    return (
        <div className="technology pb-12">
           <Navbar/>
           <div className="text-white">
                <h4 className="mx-16 my-4 font-bold"> 03 SPACE LUNCH 101</h4>
                <div className="tech-body">
                    <div className="block other-details">
                        <div className="circla-box mx-8 flex">
                            <div className="circla mx-6 text-center" onClick={selectOne}>1</div>
                            <div className="circla mx-6 text-center" onClick={selectTwo}>2</div>
                            <div className="circla mx-6 text-center" onClick={selectThree}>3</div>
                        </div>
                        <div className="details-box ">
                            <p className="my-4 intro">THE TECHNOLOGY...</p>
                            <h3 className="name">{Data.technology[each].name}</h3>
                            <p>{Data.technology[each].description}</p>
                        </div>
                    </div>
                    <div className="image-box mx-12 ">
                        <img src={whichOne[each]}/>
                    </div>

                   
                </div>
           </div>
        </div>
    )
}