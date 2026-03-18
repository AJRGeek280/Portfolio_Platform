import { useState } from "react"
import AuthLayout from "../components/Auth/AuthLayout"
import { Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function ResetPassword(){

    // Variable de redirection
    const navigate = useNavigate()

const [password,setPassword]=useState("")
const [confirm,setConfirm]=useState("")
const [show,setShow]=useState(false)
const [loading,setLoading]=useState(false)

function handleSubmit(e){
e.preventDefault()

if(password.length < 8){
toast.error("Min 8 characters")
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
// Redirection vers la page de login après la mise à jour du mot de passe
navigate("/login")
},1500)

}

return(

<AuthLayout
title="Reset Password"
subtitle="Enter your new password"
>

<form onSubmit={handleSubmit} className="space-y-5">

<div className="relative">

<input
type={show ? "text":"password"}
placeholder="New password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white"
/>

<button
type="button"
onClick={()=>setShow(!show)}
className="absolute right-3 top-1/2 -translate-y-1/2"
>
{show ? <EyeOff size={18}/> : <Eye size={18}/>}
</button>

</div>

<input
type={show ? "text":"password"}
placeholder="Confirm password"
value={confirm}
onChange={(e)=>setConfirm(e.target.value)}
className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white"
/>

<button
className="w-full bg-accent text-black py-3 rounded-xl font-semibold"
>

{loading ? "Updating..." : "Update Password"}

</button>

</form>

</AuthLayout>

)
}