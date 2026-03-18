import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import './index.css'
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
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import VerifyEmail from './pages/VerifyEmail'
import ResetPassword from './pages/ResetPassword'
import VerifyCode from './pages/VerifyCode'

import Dashboard from './pages/Photographer/Dashboard'

import { Toaster } from "react-hot-toast"

import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <>
      <Toaster position="top-right" />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/verify-code" element={<VerifyCode />}></Route>

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>

        {/* DEFAULT */}
        <Route path="*" element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
