import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Contacts from './Component/Contacts'
import About from './Component/About'
import Help from './Component/Help'
import Form from './Component/Form'

function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/Contacts" element = {<Contacts/>} />
      <Route path = "/Form" element = {<Form/>} />
      <Route path = "/About" element = {<About/>} />
      <Route path = "/Help" element = {<Help/>} />
     </Routes>
    </>
  )
}

export default App
