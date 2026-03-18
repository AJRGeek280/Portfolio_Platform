import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {

  const isAuthenticated = localStorage.getItem("auth") === "true" // Simuler une authentification

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}