import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Tienda from './pages/Tienda'
import Laptop from './pages/Laptop'
import Movil from './pages/Movil'
import Categorias from './pages/Categorias'
import Contactos from './pages/Contactos'
import Fragancia from './pages/Fragancia'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Inicio" element={<Inicio/>} />
            <Route path="/tienda" element={<Tienda/>} />
            <Route path="/laptop" element={<Laptop/>} />
            <Route path="/movil" element={<Movil/>} />
            <Route path="/fragancia" element={<Fragancia/>} />
            <Route path="/categorias/:id" element={<Categorias/>} />
            <Route path="/contactos" element={<Contactos/>} />
           
        </Routes>

        <Footer/>
      
      </BrowserRouter>
    
    </>
  )
}

export default App
