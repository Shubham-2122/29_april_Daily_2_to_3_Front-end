import React from "react";
import ClassCompo from "./component/ClassCompo";
import Funcompo from "./component/Funcompo";


function App(){
    return(
       <div>
         <h1>Hello this App compoennt</h1>
        
        <ClassCompo />
        <Funcompo />
        <Funcompo />
      
       </div>
       
    )
}

export default App;