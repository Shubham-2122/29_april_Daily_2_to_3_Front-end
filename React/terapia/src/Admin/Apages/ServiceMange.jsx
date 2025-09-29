import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Anavs from '../Acoman/Anavs'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';

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

    const [singlesr, setsinglesr] = useState({
        id: "",
        name: "",
        desc: "",
        image: ""
    })

    // product get
    const getservice = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/service/${id}`)
            setsinglesr(res.data)
        } catch (error) {
            console.log("Api data not Found..")
            toast.error("Api data not Found..")
        }
    }

    const delservice =async(id)=>{
        try {
            const res = await axios.delete(`http://localhost:3000/service/${id}`)
            console.log(res.data)
            toast.success("successfully delete..!",{
                theme:"colored"
            })
            fetchdata()
        } catch (error) {
             toast.error("Api data not Found..")
        }
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
                                            <p className='fw-normal mb-1'>{data.desc.slice(0, 50)}</p>
                                        </td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getservice(data.id)}>view</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={()=>delservice(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </MDBTableBody>
                </MDBTable>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{singlesr.name}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="service-item rounded">
                                        <div className="service-img rounded-top">
                                            <img src={singlesr.image} className="img-fluid rounded-top w-100" alt />
                                        </div>
                                        <div className="service-content rounded-bottom bg-light p-4">
                                            <div className="service-content-inner">
                                                <h5 className="mb-4">{singlesr.id}</h5>
                                                <h5 className="mb-4">{singlesr.name}</h5>
                                                <p className="mb-4">{singlesr.desc.slice(0, 100)}</p>
                                                <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceMange
