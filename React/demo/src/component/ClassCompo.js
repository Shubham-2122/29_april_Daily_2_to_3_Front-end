// compoent :- it's block code when we need when we use it(call it)
// type two 1) class and 2) function
// class :- statefull class extednds 
// class reder after return 

import React, { Component } from "react";

class ClassCompo extends Component{
    render(){
        return(
            <div>
                <h1>Hello thic class Compoennt</h1>

            </div>
        )
    }
}
export default ClassCompo;

// 1) rce 
// import React, { Component } from 'react'

// class ClassCompo extends Component {
//   render() {
//     return (
//       <div>
//             <h1>RCE :- REact class exporst</h1>       
//       </div>
//     )
//   }
// }

// export default ClassCompo

// rcc
// import React, { Component } from 'react'

// export default class ClassCompo extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello this Rcc</h1>
//       </div>
//     )
//   }
// }

