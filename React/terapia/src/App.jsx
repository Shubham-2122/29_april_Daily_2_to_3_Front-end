import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Service from './Website/Pages/Service'
import Appoint from './Website/Pages/Appoint'
import Feacutre from './Website/Pages/Feacutre'
import Blogs from './Website/Pages/Blogs'
import Team from './Website/Pages/Team'
import Testi from './Website/Pages/Testi'
import Contact from './Website/Pages/Contact'
import NotFound from './Website/Pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes >
          {/* website routes */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/appoint' element={<Appoint />} />
          <Route path='/fetcure' element={<Feacutre />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/team' element={<Team />} />
          <Route path='/testi' element={<Testi />} />
          <Route path='/contact' element={<Contact />} />

          {/* 404 page */}
          <Route path='*' element={<NotFound />}/>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
