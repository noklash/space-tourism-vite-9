import React from "react";
// import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import Logo from "./assets/shared/logo.svg";
import Hamburger from "./assets/shared/icon-hamburger.svg";
import Close  from "./assets/shared/icon-close.svg";
import "./Navbar.css";
// import Destination from "./Destination";

export default function Navbar(props){
    // const navigate = useNavigate()

    // new test
    const currentWidth = window.innerWidth
    const [screen, setScreen] = React.useState(currentWidth)

    window.addEventListener("resize", function(){
        setScreen(window.innerWidth)
      })
    
    // const screen = props.sccreen
    const desktopLinks = [{"number": <b>00</b>, "title": "HOME", "location":"/", "key": 1}, {"number": <b>01</b>, "title": "DESTINATION", "location":"/Destination" , "key": 2}, {"number": <b>02</b>, "title": "CREW", "location":"/Crew", "key": 3}, {"number": <b>03</b>, "title": "TECHNOLOGY", "location":"/Technology", "key": 4} ]
    const tabletLinks = [{"number": " ", "title": "HOME","location":"/", "key": 1}, {"number": " ", "title": "DESTINATION", "location":"/Destination", "key": 2}, {"number": " ", "title": "CREW", "location":"/Crew", "key": 3}, {"number": " ", "title": "TECHNOLOGY", "location":"/Technology", "key": 4} ]
//    since the tablet links will not include a number property gave the number an empty string value
    const whichScreenLink = screen > 875 ? desktopLinks : tabletLinks

   const screenLink = whichScreenLink.map((each) =>{
    //  return <a href={each.location} key={each.key}><li className="mx-2" >{each.number} {each.title}</li></a>
    return <li className="mx-2" key={each.key}><NavLink to={each.location}  className={({isActive}) =>{
        // console.log(each.location + ' ' + isActive)
        return (isActive ? 'navEffect' : ' ')
    }}>{each.number} {each.title}</NavLink> </li> 
    })

    // navlink is new it was anchor tag before AND HREF IS NOW TO
    // onClick={() => navigate(link.location)}
   function openMobileNav(){
    document.getElementById("mobileNav").style.width = "100%"
   }

   function closeMobileNav(){
    document.getElementById("mobileNav").style.width = "0%"
   }
//    function openDestina(){
//     Destination
//    }
    // console.log(screen)
    return(
        <div className="navbar flex pt-4 pb-6">
            <div className="mr-auto my-8 ml-8"><img src={Logo}/></div>
            {screen < 470 && <div className="my-8 mr-8 py-4 "><img src={Hamburger} onClick={openMobileNav}/></div>}

            <div className="overlay" id="mobileNav">
                <div className="my-8">
                    <img src={Close} onClick={closeMobileNav} className="closebtn"/>
                </div>
                {/* HARDCODED THE MOBILE NAV TO ENABLE ME APPLY CSS TO THEM SPECIALLY */}
                    <ul className="block text-white ml-10">
                        <li className="my-5 "> <a href="/"><b>00</b>  HOME</a></li>
                        <li className="my-5 " > <a href="/Destination"><b>01</b>  DESTINATION </a></li>
                        <li className="my-5 "><a href="/Crew"><b>02</b>  CREW</a></li>
                        <li className="my-5 "><a href="Technology"><b>03</b>  TECHNOLOGY</a></li>
                    </ul>
            
            </div>

            {screen > 470 && <div className="py-4 nav">
                            <ul className="flex mx-8 text-white sc-link p-4">
                                {screenLink}
                            </ul>
                    </div>
                    }
        </div>
    )
}