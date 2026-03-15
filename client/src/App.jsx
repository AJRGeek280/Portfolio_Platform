import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from './components/Home/Navbar'
import Hero from './components/Home/Hero'
import Features from './components/Home/Features'
import Portfolio from './components/Home/Portfolio'
import HowItWorks from './components/Home/HowItWork'
import Pricing from './components/Home/Pricing'
import PricingComparison from './components/Home/PricingComparison'
import Testimonials from './components/Home/Testimonials'
import FAQ from './components/Home/FAQ'
import FinalCTA from './components/Home/FinalCTA'
import Contact from './components/Home/Contact'
import Footer from './components/Home/Footer'

import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
     </Routes>
    </>
  )
}

export default App
