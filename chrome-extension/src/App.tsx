import { useState } from 'react'
import {MemoryRouter, Routes, Route} from "react-router-dom";
import Login from './components/login/Login'

function App() {

  return (
    <>
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<Login />} />

      </Routes>

    </MemoryRouter>
    </>
  )
}

export default App
