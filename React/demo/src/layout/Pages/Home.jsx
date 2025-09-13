import React from 'react'
import Headers from '../comana/Headers'
import Footerdata from '../comana/Footerdata'

function Home() {
  return (
    <div>
        <Headers />
      <h1 className='bg-primary p-5'>Hello this home page</h1>
      <Footerdata />
    </div>
  )
}

export default Home
