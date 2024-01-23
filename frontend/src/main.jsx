import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import Layout from './Components/Layout.jsx'
import AboutUs from './Components/AboutUs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}></Route>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
