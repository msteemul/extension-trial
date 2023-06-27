import { useState } from 'react'
import {MemoryRouter, Routes, Route} from "react-router-dom";
import Login from './components/login/Login'
import Signup from './components/Signup/Signup';

function App() {

  return (
    <>
    <MemoryRouter>
      <Routes>

      <Route path="/login" element={<Login />} />
      
      <Route path="/" element={<Signup />} />
      </Routes>

    </MemoryRouter>
    </>
  )
}

export default App
