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
import About1 from "./layout/Pages/About1";
import About2 from "./layout/Pages/About2";
import NotFound from "./layout/Pages/NotFound";
import LifeCycle from "./Lifecycle/LifeCycle";
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
          <Route path="/about" element={<About />} >
            <Route path="about1" element={<About1 />} />
            <Route path="about2" element={<About2 />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/life" element={<LifeCycle />}/>

          {/* not found page */}
          <Route path="*" element={<NotFound />}/>

        </Routes>
       </div>
       </BrowserRouter>
       
    )
}

export default App;