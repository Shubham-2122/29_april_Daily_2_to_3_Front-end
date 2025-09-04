// state :- it's varibale
// State :- we can change a data / read and write
// state :- class this.state :- state define
// modifiy :- this.setstate :- method

import React, { Component } from 'react'
import ImageC from './ImageC';

class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            name: "Meet",
            couter: 0,
            isImge: true
        }
    }
    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Hello name : {this.state.name}</h1>

                <button onClick={() => this.setState({ name: "pratick" })}>Change name</button>
                <button onClick={() => this.setState({ name: "Shubham" })}>Change 2</button>

                <h1>Hello counter : {this.state.couter}</h1>

                <button onClick={() => this.setState({ couter: this.state.couter + 1 })}>Increment</button>
                <button onClick={() => this.setState({ couter: this.state.couter - 1 })}>Decemenet</button>
                {/* <button onClick={()=>this.setState({couter : this.state.couter * 0})}>Zero</button> */}
                <button onClick={() => this.setState({ couter: 0 })}>reset</button>

                <br /> <br />

                <button onClick={()=>this.setState({isImge : false})}>Hide</button>
                <button onClick={()=>this.setState({isImge : true})}>Show</button>
                <button onClick={()=>this.setState({isImge : !this.state.isImge})}> Toggle</button>

                {(this.state.isImge) ? <ImageC /> : false}

            </div>
        )
    }
}

export default ClassState
