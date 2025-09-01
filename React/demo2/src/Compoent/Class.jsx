import React, { Component } from 'react'

class Class extends Component {
  render() {
    console.log("hello this class")
    let data = "shubham";
    return (
      <div>
        <h1>hello this class</h1>
      
        <h2>hello name : {data}</h2>
      </div>
    )
  }
}

export default Class
