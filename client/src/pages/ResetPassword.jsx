import { useState } from "react"
import AuthLayout from "../components/Auth/AuthLayout"
import { Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function ResetPassword(){

const navigate = useNavigate()

const [password,setPassword]=useState("")
const [confirm,setConfirm]=useState("")
const [showPassword,setShowPassword]=useState(false)
const [showConfirm,setShowConfirm]=useState(false)
const [loading,setLoading]=useState(false)

// 🔐 validation forte
const checks = {
length: password.length >= 8,
uppercase: /[A-Z]/.test(password),
number: /[0-9]/.test(password),
special: /[!@#$%^&*]/.test(password),
}

// score force
const strength = Object.values(checks).filter(Boolean).length

function handleSubmit(e){
e.preventDefault()

if(strength < 3){
toast.error("Password too weak")
return
}

if(password !== confirm){
toast.error("Passwords do not match")
return
}

setLoading(true)

setTimeout(()=>{
setLoading(false)
toast.success("Password updated successfully")
navigate("/login")
},1500)

}

return(

<AuthLayout
title="Reset Password"
subtitle="Create a strong new password"
>

<form onSubmit={handleSubmit} className="space-y-5">

{/* PASSWORD */}

<div className="relative">

<input
type={showPassword ? "text":"password"}
placeholder="New password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
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

{/* PASSWORD STRENGTH */}

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

{/* CONFIRM PASSWORD */}

<div className="relative">

<input
type={showConfirm ? "text":"password"}
placeholder="Confirm password"
value={confirm}
onChange={(e)=>setConfirm(e.target.value)}
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

{/* MATCH FEEDBACK */}

{confirm && (
<p className={`text-sm ${password === confirm ? "text-green-400":"text-red-400"}`}>
{password === confirm ? "Passwords match" : "Passwords do not match"}
</p>
)}

{/* BUTTON */}

<button
disabled={loading || strength < 3 || password !== confirm}
className={`w-full py-3 rounded-xl font-bold transition
${loading || strength < 3 || password !== confirm
? "bg-accent/90 cursor-not-allowed font-body text-black"
: "bg-accent text-black hover:scale-105"}
`}
>

{loading ? "Updating..." : "Update Password"}

</button>

</form>

</AuthLayout>

)
}