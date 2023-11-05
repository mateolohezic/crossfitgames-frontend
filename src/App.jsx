import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
<<<<<<< HEAD
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
=======
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
>>>>>>> e8c46fabbfba08993fcd586b262d527e4fbe2b8a

function App() {

  return (
    <>
<<<<<<< HEAD
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
=======
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
>>>>>>> e8c46fabbfba08993fcd586b262d527e4fbe2b8a
    </>
  )
}

export default App
