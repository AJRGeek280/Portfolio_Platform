import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthLayout from "../components/Auth/AuthLayout"
import { motion } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast"
import Google from "../assets/images/google.png"
import { LogIn, User } from "lucide-react"

export default function Login() {

// Variable de redirection
const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!form.email || !form.password) {
      toast.error("Please fill all fields")
      return
    }

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      toast.success("Login successful")

      localStorage.setItem("auth", "true")

      navigate("/dashboard")
    }, 1500)

  }

  return (

    <AuthLayout
      title="Welcome back"
      subtitle="Login to your photographer account"
    >

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* EMAIL */}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
        />

        {/* PASSWORD */}

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

        </div>

        {/* FORGOT PASSWORD */}

        <div className="text-right">

          <Link to="/forgot-password" className="text-sm text-accent hover:underline">
            Forgot password?
          </Link>

        </div>

        {/* BUTTON */}

        <motion.button
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center items-center w-full bg-accent text-black py-3 rounded-xl font-bold"
        >
          <User
            className="mr-2 font-bold"
            size={18} />
          {loading ? "Loading..." : "Sign In"}

        </motion.button>

      </form>

      {/* OR SEPARATOR */}

      <div className="flex items-center gap-4 my-6">

        <div className="flex-1 h-px bg-white/10"></div>

        <span className="text-gray-400 text-sm">OR</span>

        <div className="flex-1 h-px bg-white/10"></div>

      </div>

      {/* GOOGLE BUTTON (GLASS) */}

      <button
        onClick={() => toast("Google login coming soon")}
        className="flex justify-center items-center w-full bg-white/10 border border-white/20 backdrop-blur-xl py-3 rounded-xl text-white font-semibold hover:bg-white/20 transition"
      >
        <img
          className="w-8 h-8 mr-2"
          src={Google} alt="Logo Google" />

        Continue with Google

      </button>

      <p className="text-gray-400 text-sm mt-6 text-center">

        Don’t have an account?{" "}

        <Link to="/register" className="text-accent">
          Create one
        </Link>

      </p>

    </AuthLayout>

  )
}