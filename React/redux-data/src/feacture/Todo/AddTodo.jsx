import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

function AddTodo() {

    const [name,setname] = useState("")

    const dispatch = useDispatch()

    const getsubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo(name))
        setname("")
    }

  return (
    <div>
      <form action="">
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter your Name' />
        <input type="submit" onClick={getsubmit} value="add" />
      </form>
    </div>
  )
}

export default AddTodo
