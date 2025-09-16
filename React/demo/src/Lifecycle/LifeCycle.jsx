import React, { Component } from 'react'
import Headers from '../layout/comana/Headers'
import Footerdata from '../layout/comana/Footerdata'

// link site
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
class LifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            name : "meet"
        }
    }

    // 1) mouting phase
    componentDidMount(){
        console.log("hello mouting phase")
    }

    // shouldComponentUpdate(){
    //     console.log("checking for data")
    // }

    componentDidUpdate(){
        console.log("Hello update phase")
    }

    componentWillUnmount(){
        console.log("unmouting phase")
    }
    
    render() {
        console.log(this.state.name)
        return (
            <div>
                <Headers />
                <h1>hello this Life cycle method</h1>
                1) mouting :  initi State,Props
                2) updateing :- state change
                3) unmotuing :- null/em

                <h1>hello this name : {this.state.name}</h1>
                <button onClick={()=>this.setState({name : "shubham"})}>Chnage name</button>
                <Footerdata />
            </div>
        )
    }
}

export default LifeCycle
