import React from "react";
// import MainState from "./State/MainState";
// import FormData from "./formHadling/FormData";
// import FormUser from "./formHadling/FormUser";
import Data from "./useEffect/Data";
import ReactBoot from "./Bootstrap/ReactBoot";
import LoginReact from "./Bootstrap/LoginReact";
import MainData from "./context/MainData";
import Home from "./layout/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./layout/Pages/About";
import Contact from "./layout/Pages/Contact";
// import Hello from "./Jsx/Hello";
// import ClassCompo from "./component/ClassCompo";
// import Funcompo from "./component/Funcompo";
// import Css from "./Css/Css";
// import Mainprops from "./Props/Mainprops";


function App(){
    return(
      <BrowserRouter>
       <div>
    
        
        {/* compoenent */}
        {/* <ClassCompo /> */}
        {/* <Funcompo /> */}
        {/* <Funcompo /> */}

        {/* jsx */}
        {/* <Hello /> */}

        {/* style */}
        {/* <Css /> */}

        {/* props */}
        {/* <Mainprops /> */}

        {/* state */}
        {/* <MainState /> */}

        {/* form hadling */}
      {/* <FormData /> */}
      {/* <FormUser /> */}

      {/* <Data /> */}

      {/* <ReactBoot />  */}
      {/* <LoginReact /> */}

      {/* <MainData /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       </div>
       </BrowserRouter>
       
    )
}

export default App;