import React from 'react'
import Headers from '../comana/Headers'
import Footerdata from '../comana/Footerdata'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <Headers />
            <h1 className='bg-success p-5'>hello this About page</h1>
            <Link to="about1" className='btn btn-danger'>About 1</Link>
            <Link to="about2" className='btn btn-info mx-2'>About 2</Link>
            <Outlet />
            <Footerdata />

        </div>
    )
}

export default About
