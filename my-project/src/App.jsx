import React from "react"
import Hero from "./Hero"

import "./App.css"


function App() {
  const currentWidth = window.innerWidth
  const [screen, setScreen] = React.useState(currentWidth)
  // const mediaQuery =

  window.addEventListener("resize", function(){
    setScreen(window.innerWidth)
  })

  return (
    <div className='root'>
      <Hero screen={screen}/>
    </div>
  )
}

export default App
