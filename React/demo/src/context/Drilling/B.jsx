import React from 'react'
import C from './C'

function B({name,setname}) {
    console.log(name)
  return (
    <div>
       <h1>Hello this B component</h1>
        <h1>Hello name : {name}</h1>
        <C name={name} setname={setname} />
    </div>
  )
}

export default B
