import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {

    // state.reducer-name.initialstate
    const count = useSelector((state)=>state.counter.value)
    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>hello counting compo</h1>
      <h1>count : {count}</h1>

      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decemenet</button>
    </div>
  )
}

export default Counter
