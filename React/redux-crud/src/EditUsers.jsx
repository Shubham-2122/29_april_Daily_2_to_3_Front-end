import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {  updateuser } from './Slice/userSlice'

function EditUsers() {

    const redirect = useNavigate()

    const {id} = useParams()
    console.log(id)

    const dispatch = useDispatch()

    const [user1,setuser1] = useState([])

    const {users,loading } = useSelector((state)=>state.users)
    console.log(users)

    useEffect(()=>{
        const singleuser = users.filter((data) => data.id === id)
        console.log(singleuser[0])
        setuser1(singleuser[0])
    },[])

    const getchange = (e)=>{
        setuser1({
            ...user1,
            [e.target.name]:e.target.value
        })
    }

    const getsubmitd=(e)=>{
        e.preventDefault();
        dispatch(updateuser(user1))
        redirect("/")
    }


  return (
    <div>
         <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1>hello update profile</h1>
                        <form >
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">your Name</label>
                                <input name='name' value={user1 && user1.name} onChange={getchange} type="text" className="form-control" id="Name" />                       
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input name='email' value={user1 && user1.email} onChange={getchange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input  name='password' value={user1 && user1.password} onChange={getchange} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" onClick={getsubmitd} className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default EditUsers
