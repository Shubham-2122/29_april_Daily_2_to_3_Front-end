import React, { useState } from 'react'


function FunOb() {
    const [data,setdata] = useState({
        name : "Shubham",
        count : 0,
        isimage : true
    })
    console.log(data)
    return (
    <div>
     <h1>Hello name : {data.name}</h1>
     <button onClick={()=>setdata({...data,name : "meet"})}>Change name</button>
     <button onClick={()=>setdata({...data,name:"pratick"})}>Chnage name 2</button>

     <h1>Hello count : {data.count}</h1>
     <button onClick={()=>setdata({...data,count : data.count+1})}>Increment</button>
     <button onClick={()=>setdata({...data,count : data.count-1})}>decrement</button>
     <button onClick={()=>setdata({...data,count : 0})}>reset</button>
    </div>
  )
}

export default FunOb
