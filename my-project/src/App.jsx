import React from "react"

import "./App.css"
import Page from "./Page"


function App() {
  const currentWidth = window.innerWidth
  const [screen, setScreen] = React.useState(currentWidth)
  // const mediaQuery =

  window.addEventListener("resize", function(){
    setScreen(window.innerWidth)
  })

  return (
    <div className='root'>
      <Page screen={screen}/>
    </div>
  )
}

export default App
