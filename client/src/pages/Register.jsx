import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthLayout from "../components/Auth/AuthLayout"
import { motion } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast"
import google from "../assets/images/google.png"
import { User } from "lucide-react"

export default function Register(){

    // Variable de redirection
const navigate = useNavigate() 

const [form,setForm]=useState({
name:"",
email:"",
password:"",
confirm:""
})

const [loading,setLoading]=useState(false)
const [showPassword,setShowPassword]=useState(false)
const [showConfirm,setShowConfirm]=useState(false)

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value})
}

async function handleSubmit(e){
e.preventDefault()

if(!form.name || !form.email || !form.password){
toast.error("All fields are required")
return
}

if(form.password.length < 8){
toast.error("Password must be at least 8 characters")
return
}

if(form.password !== form.confirm){
toast.error("Passwords do not match")
return
}

setLoading(true)

setTimeout(()=>{
setLoading(false)
toast.success("Account created successfully")
toast.success("Verification email sent")

// Redirection vers la page de vérification après l'inscription
navigate("/verify-email")
},1500)

}

return(

<AuthLayout
title="Create account"
subtitle="Start your photography business today"
>

<form onSubmit={handleSubmit} className="space-y-5">

<input
type="text"
name="name"
placeholder="Full name"
value={form.name}
onChange={handleChange}
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white"
/>

<input
type="email"
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white"
/>

{/* PASSWORD */}

<div className="relative">

<input
type={showPassword ? "text" : "password"}
name="password"
placeholder="Password"
value={form.password}
onChange={handleChange}
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white"
/>

<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
>
{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
</button>

</div>

{/* CONFIRM */}

<div className="relative">

<input
type={showConfirm ? "text" : "password"}
name="confirm"
placeholder="Confirm password"
value={form.confirm}
onChange={handleChange}
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white"
/>

<button
type="button"
onClick={()=>setShowConfirm(!showConfirm)}
className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
>
{showConfirm ? <EyeOff size={18}/> : <Eye size={18}/>}
</button>

</div>

<motion.button
disabled={loading}
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="flex justify-center items-center w-full bg-accent text-black py-3 rounded-xl font-bold"
>
<User 
className="mr-2"
size={18}
/>
{loading ? "Creating..." : "Create Account"}

</motion.button>

</form>

{/* OR */}

<div className="flex items-center gap-4 my-6">

<div className="flex-1 h-px bg-white/10"></div>

<span className="text-gray-400 text-sm">OR</span>

<div className="flex-1 h-px bg-white/10"></div>

</div>

{/* GOOGLE */}

<button
onClick={()=>toast("Google signup coming soon")}
className="flex justify-center items-center w-full bg-white/10 border border-white/20 backdrop-blur-xl py-3 rounded-xl text-white font-semibold hover:bg-white/20 transition"
>
<img 
className="w-8 h-8 mr-2"
src={google} alt="Logo Google" />
Sign up with Google

</button>

<p className="text-gray-400 text-sm mt-6 text-center">

Already have an account?{" "}

<Link to="/login" className="text-accent">
Login
</Link>

</p>

</AuthLayout>

)
}