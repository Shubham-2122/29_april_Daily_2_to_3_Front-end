import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createuser } from './Slice/userSlice'

function Createdata() {

    const redirect = useNavigate()

    const dipatch = useDispatch()

    const [form,setform] = useState({
        id:"",
        name:"",
        email:"",
        password : ""
    })

    const getchange = (e)=>{
        setform({
            ...form,
            id : new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
        console.log(form)
    }

    const getsubmit=(e)=>{
        e.preventDefault();

        dipatch(createuser(form))
        redirect("/")
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={getsubmit}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">your Name</label>
                                <input value={form.name} name='name' onChange={getchange} type="text" className="form-control" id="Name" />                       
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input value={form.email} name='email' onChange={getchange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input value={form.password} name='password' onChange={getchange} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Createdata
