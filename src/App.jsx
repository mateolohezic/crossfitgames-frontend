import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
