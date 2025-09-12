import React, { createContext, useState } from 'react'
import ChildD from './ChildD';
import ChildC from './ChildC';

export const data = createContext();


function ChildA() {

    const [name,setname] = useState("pratik")
    const [data1,setdata1] = useState({
        count : 0
    })

  return (
    <div>
      <h1>hello this Child A compo</h1>
      <data.Provider value={{name,setname,data1,setdata1}} >
        <ChildD />
        <ChildC />
      </data.Provider>
    </div>
  )
}

export default ChildA
