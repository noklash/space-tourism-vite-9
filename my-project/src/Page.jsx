import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Redirect,
  } from "react-router-dom";
import Hero from "./Hero";
// import Navbar from "./Navbar";
import "./Page.css"
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";



export default function Page(props){
    return (
        <div className="page pt-0 mt-0">
            {/* <Navbar screen={props.screen}/> */}
            {/* <Hero screen={props.screen}/> */}
            <Router>
                <Routes>
                    <Route exact path="/" element={<Hero/>}/>
                    <Route path="/Destination" element={<Destination/>}>
                        {/* <Route path="moon" element={<Moon/>}/>
                        <Route path="mars" element={<Mars/>}/>
                        <Route path="europa" element={<Europa/>}/>
                        <Route path="titan" element={<Titan/>}/> */}
                    </Route>
                    <Route path="/Crew" element={<Crew/>}/>
                    <Route path="/Technology" element={<Technology screen={props.screen}/>}/>
                    {/* <Redirect to="./Hero" /> */}
                </Routes>
            </Router>
            
        </div>
    )
}