import { useState } from "react"
import AuthLayout from "../components/Auth/AuthLayout"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function ForgotPassword(){

const navigate = useNavigate()
const [email,setEmail]=useState("")
const [loading,setLoading]=useState(false)

function handleSubmit(e){
e.preventDefault()

if(!email){
toast.error("Enter your email")
return
}

setLoading(true)

setTimeout(()=>{

setLoading(false)

// Génération code 6 chiffres
const code = Math.floor(100000 + Math.random() * 900000)

// Stockage temporaire
localStorage.setItem("resetCode", code)
localStorage.setItem("resetEmail", email)
localStorage.setItem("resetExpiry", Date.now() + 5 * 60 * 1000) // 5 min

console.log("CODE:", code) // simulation

toast.success("Verification code sent")

// REDIRECTION VERS VERIFY
navigate("/verify-code")

},1500)

}

return(

<AuthLayout
title="Forgot Password"
subtitle="Enter your email to reset your password"
>

<form onSubmit={handleSubmit} className="space-y-5">

<input
type="email"
placeholder="Your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white"
/>

<motion.button
disabled={loading}
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="w-full bg-accent text-black py-3 rounded-xl font-semibold"
>

{loading ? "Sending..." : "Send Code"}

</motion.button>

</form>

</AuthLayout>

)
}