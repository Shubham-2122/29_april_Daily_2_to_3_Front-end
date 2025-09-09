// useEfect :- Function side effect / re-redering 
// useEffect :- API call data fetch
// useEffect : functioncall , opational(dep)
// useEffect(()=>{
        // function call
    // },[dep])

import React, { useEffect, useState } from 'react'

function UseEffectDa() {

    const [name,setname] = useState("Meet")

    // without dep
    // useEffect(()=>{
    //     console.log("outside return")
    //     return(()=>{
    //         console.log("inside return")
    //     })   
    // })

    // 2) blank array
    // useEffect(()=>{
    //     console.log("outside return")
    //     return(()=>{
    //         console.log("inside return")
    //     })   
    // },[])

    // 3) state depe
    useEffect(()=>{
        console.log("outside return")
        return(()=>{
            console.log("inside return")
        })   
    },[name])


  return (
    <div>
      <h1>hello name {name}</h1>
      <button onClick={()=>setname("shubham")}>Change name</button>
    </div>
  )
}

export default UseEffectDa
