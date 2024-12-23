import { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/home/Home'


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home/>
      </BrowserRouter>


    </>
  )
}

export default App
