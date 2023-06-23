import React from "react";
import Logo from "./assets/shared/logo.svg";
import Hamburger from "./assets/shared/icon-hamburger.svg";
import Close  from "./assets/shared/icon-close.svg";
import "./Navbar.css";

export default function Navbar(props){

    const screen = props.screen

    const desktopLinks = ["00 HOME",  "01 DESTINATION", "02 CREW", "03 TECHNOLOGY" ]
    const tabletLinks = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"]

    const whichScreenLink = screen > 875 ? desktopLinks : tabletLinks

   const screenLink = whichScreenLink.map((link) =>{
     return <li className="mx-2"><a href="#">{link}</a></li>
    })

   
    
    // console.log(screen)
    return(
        <div className="navbar flex">
            <div className="mr-auto my-8 ml-8"><img src={Logo}/></div>
            {screen < 470 && <div className="my-8 mr-8 py-4"><img src={Hamburger}/></div>}

            {screen > 470 && <div className="py-4 sc-link">
                            <ul className="flex mx-4 text-white">
                                {screenLink}
                            </ul>
                    </div>
                    }
        </div>
    )
}