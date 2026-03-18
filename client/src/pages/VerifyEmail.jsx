import { useState, useRef } from "react"
import AuthLayout from "../components/Auth/AuthLayout"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function VerifyEmail(){

    // Variable de redirection
const navigate = useNavigate()

const [code,setCode]=useState(["","","","","",""])
const inputs = useRef([])

function handleChange(value,index){

if(!/^[0-9]?$/.test(value)) return

const newCode=[...code]
newCode[index]=value
setCode(newCode)

// auto focus next
if(value && index < 5){
inputs.current[index+1].focus()
}

}

function handleKeyDown(e,index){

if(e.key==="Backspace" && !code[index] && index>0){
inputs.current[index-1].focus()
}

}

function handleSubmit(e){
e.preventDefault()

const finalCode = code.join("")

if(finalCode.length !== 6){
toast.error("Enter 6 digits")
return
}

toast.success("Email verified successfully")

// Redirection vers la page Login ou Dasboard
setTimeout(()=>{
    navigate("/login")
})

}

return(

<AuthLayout
title="Verify Email"
subtitle="Enter the 6-digit code sent to your email"
>

<form onSubmit={handleSubmit} className="space-y-6">

{/* CODE INPUT */}

<div className="flex justify-center gap-3">

{code.map((digit,index)=>(

<input
key={index}
ref={(el)=>inputs.current[index]=el}
type="text"
maxLength="1"
value={digit}
onChange={(e)=>handleChange(e.target.value,index)}
onKeyDown={(e)=>handleKeyDown(e,index)}
className="w-10 h-12 text-center text-xl bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-accent"
/>

))}

</div>

{/* VERIFY BUTTON */}

<button
className="w-full bg-accent text-black py-3 rounded-xl font-semibold"
>

Verify Email

</button>

{/* RESEND */}

<p className="text-gray-400 text-sm text-center">

Didn’t receive the code?{" "}

<span
onClick={()=>toast("Code resent 📧")}
className="text-accent cursor-pointer"
>

Resend

</span>

</p>

</form>

</AuthLayout>

)
}