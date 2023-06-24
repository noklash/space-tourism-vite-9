import React from "react";
import Logo from "./assets/shared/logo.svg";
import Hamburger from "./assets/shared/icon-hamburger.svg";
import Close  from "./assets/shared/icon-close.svg";
import "./Navbar.css";

export default function Navbar(props){

    const screen = props.screen
    const desktopLinks = [{"number": <b>00</b>, "title": "HOME"}, {"number": <b>01</b>, "title": "DESTINATION"}, {"number": <b>02</b>, "title": "CREW"}, {"number": <b>03</b>, "title": "TECHNOLOGY"} ]
    const tabletLinks = [{"number": " ", "title": "HOME"}, {"number": " ", "title": "DESTINATION"}, {"number": " ", "title": "CREW"}, {"number": " ", "title": "TECHNOLOGY"} ]
//    since the tablet links will not include a number property gave the number an empty string value
    const whichScreenLink = screen > 875 ? desktopLinks : tabletLinks

   const screenLink = whichScreenLink.map((link) =>{
     return <li className="mx-2"><a href="#">{link.number} {link.title}</a></li>
    })

   
    
    // console.log(screen)
    return(
        <div className="navbar flex pt-4">
            <div className="mr-auto my-8 ml-8"><img src={Logo}/></div>
            {screen < 470 && <div className="my-8 mr-8 py-4 "><img src={Hamburger}/></div>}

            {screen > 470 && <div className="py-4 nav">
                            <ul className="flex mx-8 text-white sc-link p-4">
                                {screenLink}
                            </ul>
                    </div>
                    }
        </div>
    )
}