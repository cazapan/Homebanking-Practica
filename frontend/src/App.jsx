import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { ClerkProvider } from '@clerk/react'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import Dashboard from './pages/dashboard'
import axios from "axios"
import './App.css'


export default function App() {
  
  useEffect(() => {
    console.log('El componente se renderizo');
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='register' element={<RegisterPage/>} />
        <Route path='dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}