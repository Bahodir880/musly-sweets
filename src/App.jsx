import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './companents/Header'
import Cakes from './pages/Cakes';
import Home from './pages/Home';
import Deserts from './pages/Deserts';
import About from './pages/About';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Desserts' element={<Deserts />} />
          <Route path='/Cakes' element={<Cakes />} />
           <Route path='/About' element={<About />} />
           <Route path='/more' element={<Deserts />} />
           <Route path='/cake' element={<Cakes />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
