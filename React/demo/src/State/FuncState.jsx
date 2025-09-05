// React v16.8 Function
// Hooks :- it's inbuit method . deffernt functionlity
// 1) useState :- return ouside define
// as well useState define
// const [define,setdefine] = useState("")


import React, { useState } from 'react'
import ImageC from './ImageC'

function FuncState() {

    // define, modify
    const [name, setname] = useState("meet")
    const [count, setcount] = useState(0)
    const [isimage, setisimage] = useState(true)

    console.log(name)

    const chnage = () => {
        setname("jigar sir")
    }
    return (
        <div>
            <h1>Hello This Function hooks</h1>
            <h1>hello name : {name}</h1>
            <button onClick={() => setname("Shubham")}>Chnage name</button>
            <button onClick={chnage}>Chnage name2</button>

            <h1>hello count : {count}</h1>
            <button onClick={() => setcount(count + 1)}>increment</button>
            <button onClick={() => setcount(count - 1)}>Decemenet</button>
            <button onClick={() => setcount(0)}>reset</button>
            <br /><br /><br />

        <button onClick={()=>setisimage(false)}>Hide</button>
        <button onClick={()=>setisimage(true)}>Show</button>
        <button onClick={()=>setisimage(!isimage)}>Toggle</button>
            {(isimage) ? <ImageC /> : false}

        </div>
    )
}

export default FuncState
