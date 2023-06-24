import React from "react";

import Hero from "./Hero";
import Navbar from "./Navbar";
import "./Page.css"


export default function Page(props){
    return (
        <div className="page">
            <Navbar screen={props.screen}/>
            <Hero screen={props.screen}/>
        </div>
    )
}