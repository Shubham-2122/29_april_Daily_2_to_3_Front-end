import React, { useEffect, useState } from 'react'

function UserData() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                // console.log(res)
                setuser(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <h1>Hello this user table show</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">city</th>
                        <th scope="col">company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index) => {
                            console.log(user)
                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address.city}</td>
                                    <td>{data.company.name}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>


        </div>
    )
}

export default UserData
