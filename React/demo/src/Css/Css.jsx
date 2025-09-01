import React from 'react'
import "./style.css"

function Css() {

    let internal = {
        background : "red",
        color : "white"
    }
  return (
    <div>
      {/* 1. inline css */}

        {/* inline as object key : value */}
      <h1 style={{background:"red"}}>hello this inline css</h1>
      {/* 2. internall css not use  */}

      <h2 style={internal}>hello internal css</h2>
      {/* 3. external css  */}

        <div className='ab'>Hello this external css</div>

    </div>
  )
}

export default Css
