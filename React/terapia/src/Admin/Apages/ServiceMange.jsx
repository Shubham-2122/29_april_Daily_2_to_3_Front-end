import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Anavs from '../Acoman/Anavs'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function ServiceMange() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/service")
        console.log(res.data)
        setservice(res.data)
    }

    return (
        <div>
            <Aheader />
            <Anavs title="Service manage" desc="Servicemaneg" />
            <div className="container">
                <h1 className='text-center'>Hello this Manager Service</h1>
                <MDBTable className='mt-3' align='middle'>

                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Desc</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            service && service.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src={data.image}
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>{data.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{data.desc.slice(0,50)}</p>
                                        </td>
                                        <td>
                                            <button className='btn btn-info'>view</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    )
}

export default ServiceMange
