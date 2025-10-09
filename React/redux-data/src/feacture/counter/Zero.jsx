import React from 'react'
import { useDispatch } from 'react-redux'
import { zero } from './counterSlice'

function Zero() {

    const disptach = useDispatch()

  return (
    <div>
      <button onClick={()=>disptach(zero())}>Zero</button>
    </div>
  )
}

export default Zero
