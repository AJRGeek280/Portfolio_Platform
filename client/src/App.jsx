import { Routes, Route } from "react-router-dom"
import './App.css'
import './index.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import VerifyEmail from './pages/VerifyEmail'
import ResetPassword from './pages/ResetPassword'
import VerifyCode from './pages/VerifyCode'

import DashboardLayout from './components/Dashboard/DashboardLayout'
import Overview from './pages/Photographer/Overview'
import Gallery from "./pages/Photographer/Gallery"

import { Toaster } from "react-hot-toast"
import ProtectedRoute from './routes/ProtectedRoute'

import CreateGallery from "./pages/Photographer/Gallery/CreateGallery"
import ViewGallery from "./pages/Photographer/Gallery/ViewGallery"


import PublicGallery from "./pages/Photographer/SharedGallery/PublicGallery"
import ClientGallery from "./pages/Photographer/SharedGallery/ClientGallery"


function App() {

  return (
    <>
      <Toaster position="top-right" />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />

         {/* GALLERIES SHARE ROUTES */}
        <Route path="/gallery/public/:token" element={<PublicGallery />} />
        <Route path="/gallery/client/:token" element={<ClientGallery />} />
        

        {/* 🔥 DASHBOARD (NESTED ROUTES) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          {/* DEFAULT PAGE */}
          <Route index element={<Overview />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/create" element={<CreateGallery />} />
          <Route path="gallery/:id" element={<ViewGallery />} />
          {/* FUTURES PAGES */}
          {/* <Route path="portfolio" element={<Portfolio />} /> */}
          {/* <Route path="gallery" element={<Gallery />} /> */}
          {/* etc... */}

        </Route>

        {/* DEFAULT */}
        <Route path="*" element={<Login />} />

      </Routes>
    </>
  )
}

export default App