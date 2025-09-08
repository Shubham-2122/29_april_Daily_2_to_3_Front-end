import React, { useState } from 'react'

function FormData() {
    const [name,setname] = useState("")
    const [surname,setsurname] = useState("")
    const [email,setemail] = useState("")
    const [phone,setphone] = useState("")
    const [password,setpassword] = useState("")

    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Enter your Name</label>
                    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="Name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Enter your Surname </label>
                    <input type="text" value={surname} onChange={(e)=>setsurname(e.target.value)} className="form-control" id="surname" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Enter your mobile </label>
                    <input type="tel" value={phone} onChange={(e)=>setphone(e.target.value)} className="form-control" id="mobile" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default FormData
