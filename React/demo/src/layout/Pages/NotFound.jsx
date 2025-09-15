import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {
 
    const redirect = useNavigate()

    const backTo=()=>{
        redirect("/")
    }

    return (
    <div>
      <h1 className='bg-danger text-light text-center p-5'>Hello this 404 not Found Page</h1>
        <Link to="/" className='btn btn-success'>Back to home</Link>
        <button onClick={backTo} className='btn btn-info'>Back-to-home</button>
    </div>
  )
}

export default NotFound
