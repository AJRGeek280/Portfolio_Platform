import { useState } from 'react'
import './App.css'
import Navbar from './components/Home/Navbar'
import Hero from './components/Home/Hero'
import Features from './components/Home/Features'
import Portfolio from './components/Home/Portfolio'
import HowItWorks from './components/Home/HowItWork'

function App() {
  return (
    <>
      <div className="bg-background min-h-screen">

        <Navbar />
        <Hero />
        <Features />
        <Portfolio/>
        <HowItWorks/>
      </div>
    </>
  )
}

export default App
