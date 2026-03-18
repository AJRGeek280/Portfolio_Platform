import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthLayout from "../components/Auth/AuthLayout"
import { motion } from "framer-motion"
import { Eye, EyeOff, User } from "lucide-react"
import toast from "react-hot-toast"
import google from "../assets/images/google.png"

export default function Register(){

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

// 🔐 VALIDATION PASSWORD
const checks = {
length: form.password.length >= 8,
uppercase: /[A-Z]/.test(form.password),
number: /[0-9]/.test(form.password),
special: /[!@#$%^&*]/.test(form.password),
}

const strength = Object.values(checks).filter(Boolean).length

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value})
}

async function handleSubmit(e){
e.preventDefault()

if(!form.name || !form.email || !form.password){
toast.error("All fields are required")
return
}

if(strength < 3){
toast.error("Password too weak")
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
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
/>

<input
type="email"
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
/>

{/* PASSWORD */}

<div className="relative">

<input
type={showPassword ? "text" : "password"}
name="password"
placeholder="Password"
value={form.password}
onChange={handleChange}
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-accent"
/>

<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
>
{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
</button>

</div>

{/* 🔥 PASSWORD STRENGTH */}

<div className="space-y-2">

<div className="h-2 rounded bg-white/10 overflow-hidden">
<div
className={`h-full transition-all ${
strength === 1 ? "w-1/4 bg-red-500" :
strength === 2 ? "w-2/4 bg-orange-500" :
strength === 3 ? "w-3/4 bg-yellow-500" :
strength === 4 ? "w-full bg-green-500" :
"w-0"
}`}
></div>
</div>

<div className="text-xs text-gray-400 space-y-1">
<p className={checks.length ? "text-green-400":"text-gray-500"}>• 8 characters</p>
<p className={checks.uppercase ? "text-green-400":"text-gray-500"}>• Uppercase letter</p>
<p className={checks.number ? "text-green-400":"text-gray-500"}>• Number</p>
<p className={checks.special ? "text-green-400":"text-gray-500"}>• Special character</p>
</div>

</div>

{/* CONFIRM */}

<div className="relative">

<input
type={showConfirm ? "text" : "password"}
name="confirm"
placeholder="Confirm password"
value={form.confirm}
onChange={handleChange}
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-accent"
/>

<button
type="button"
onClick={()=>setShowConfirm(!showConfirm)}
className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
>
{showConfirm ? <EyeOff size={18}/> : <Eye size={18}/>}
</button>

</div>

{/* ✅ MATCH FEEDBACK */}

{form.confirm && (
<p className={`text-sm ${form.password === form.confirm ? "text-green-400":"text-red-400"}`}>
{form.password === form.confirm ? "Passwords match" : "Passwords do not match"}
</p>
)}

<motion.button
disabled={loading || strength < 3 || form.password !== form.confirm}
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className={`flex justify-center items-center w-full py-3 rounded-xl font-bold transition
${loading || strength < 3 || form.password !== form.confirm
? "bg-accent/90 text-bold text-black cursor-not-allowed"
: "bg-accent text-black"}
`}
>

<User className="mr-2 font-bold" size={18}/>

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
<img className="w-8 h-8 mr-2" src={google} alt="Logo Google" />
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