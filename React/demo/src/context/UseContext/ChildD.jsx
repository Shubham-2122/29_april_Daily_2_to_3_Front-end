// usecontext global data manage

import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildD() {

    const {name,setname} = useContext(data)

return (
    <div>
      <h1>hello this Child D compo</h1>
      <h1>Hello name : {name}</h1>
      <button onClick={()=>setname("manav")}>Change name</button>
    </div>
  )
}

export default ChildD
