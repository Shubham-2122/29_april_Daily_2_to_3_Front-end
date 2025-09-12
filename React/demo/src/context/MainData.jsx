import React from 'react'
import A from './Drilling/A'
import ChildA from './UseContext/ChildA'

function MainData() {
  return (
    <div>
      {/* props driling */}
      {/* <A /> */}


      {/* useContext */}
      {/* 1) create context  */}
      <ChildA />
    </div>
  )
}

export default MainData
