import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTodo } from './todoSlice'

function Todos() {

    const todo = useSelector((state)=>state.todos.todo)

    console.log(todo)

    const dispatch = useDispatch()
    


  return (
    <div>

        <ul>
            {
                todo && todo.map((data,index)=>{
                    return(
                        <li key={index}>{data} <button onClick={()=>dispatch(DeleteTodo(index))}>Delete</button><button>edit</button></li>
                    )
                })
            }
        </ul>
      
    </div>
  )
}

export default Todos
