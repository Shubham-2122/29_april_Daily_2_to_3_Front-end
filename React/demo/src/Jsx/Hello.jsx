// jsx:- javscript syntex xml/extesibile
// html read/suggestion
// jsx vs js //1 read 
// 0.1s fast
// retrun javascript {}

import React from "react";

function Hello(){

    console.log("hello jsx")

    let name = "Meet";
    // console.log(name)
    let data = {
        id : 1,
        name : "Het",
        course : "front-end"
    }

    let arr = [1,2,3,4,5];

    let element = <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
    </ul>

    console.log(5+5)

    return(
        <>
            <h1>This is jsx file</h1>
            <h2>hello name : {name}</h2>

            console.log("not work")
            
            {
                console.log("Inside {}")
            }

            <h1>hello id : {data.id}</h1>

            <h2>hello arr 1 : {arr[1]}</h2>
            
            {element}
            {element}
            
        </>
    )
}
export default Hello;