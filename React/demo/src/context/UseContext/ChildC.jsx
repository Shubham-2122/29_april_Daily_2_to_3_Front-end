import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildC() {

    const {data1,setdata1} = useContext(data)

  return (
    <div>
      <h1>hello this Child C compo</h1>

      <h1>hello Count :- {data1.count}</h1>

      <button onClick={()=>setdata1({...data1,count : data1.count + 1})}>increment</button>
      <button onClick={()=>setdata1({...data1,count : data1.count - 1})}>decrement</button>

    </div>
  )
}

export default ChildC
