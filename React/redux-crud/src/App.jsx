import React from 'react'
import Read from './Read'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Comana/Navbar'
import Createdata from './Createdata'
import EditUsers from './EditUsers'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/create' element={<Createdata />} />
        <Route path='/edit/:id' element={<EditUsers />} />
      </Routes>
      
    </div>
     </BrowserRouter>
  )
}

export default App
