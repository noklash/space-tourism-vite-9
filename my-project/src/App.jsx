import React from "react"

import "./App.css"
import Page from "./Page"
import Navbar from "./Navbar"
// import Destination from "./Destination"


function App(props) {
  const currentWidth = window.innerWidth
  const [screen, setScreen] = React.useState(currentWidth)
  // const mediaQuery =

  window.addEventListener("resize", function(){
    setScreen(window.innerWidth)
  })

  return (
    <div className='root'>
      {/* <Navbar sccreen={screen}/> */}
      <Page screen={screen}/>
      {/* <Destination/> */}
    </div>
  )
}

export default App
