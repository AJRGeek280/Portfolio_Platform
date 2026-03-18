import { useState, useRef, useEffect } from "react"
import AuthLayout from "../components/Auth/AuthLayout"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { motion } from "framer-motion"

export default function VerifyCode(){

const navigate = useNavigate()

const [code,setCode] = useState(["","","","","",""])
const inputsRef = useRef([])

// ⏱ TIMER RESEND (persistant)
const [timeLeft, setTimeLeft] = useState(() => {
const saved = localStorage.getItem("resendTimer")
return saved ? Math.max(0, Math.floor((saved - Date.now()) / 1000)) : 120
})

const [isActive, setIsActive] = useState(timeLeft > 0)
const [loading,setLoading] = useState(false)

// 🔥 autofocus premier input
useEffect(()=>{
inputsRef.current[0]?.focus()
},[])

// ⏳ countdown
useEffect(()=>{

if(timeLeft <= 0){
setIsActive(false)
return
}

const timer = setInterval(()=>{
setTimeLeft(prev => prev - 1)
},1000)

return ()=> clearInterval(timer)

},[timeLeft])

// 🔢 change input
const handleChange = (value,index)=>{

if(!/^[0-9]?$/.test(value)) return

const newCode = [...code]
newCode[index] = value
setCode(newCode)

// focus suivant
if(value && index < 5){
inputsRef.current[index + 1].focus()
}

}

// ⌫ backspace + navigation
const handleKeyDown = (e,index)=>{

if(e.key === "Backspace"){

if(code[index]){
const newCode = [...code]
newCode[index] = ""
setCode(newCode)
}else if(index > 0){
inputsRef.current[index - 1].focus()
}

}

if(e.key === "ArrowLeft" && index > 0){
inputsRef.current[index - 1].focus()
}

if(e.key === "ArrowRight" && index < 5){
inputsRef.current[index + 1].focus()
}

}

// 📋 paste complet
const handlePaste = (e)=>{

const paste = e.clipboardData.getData("text")

if(!/^\d{6}$/.test(paste)) return

const newCode = paste.split("")
setCode(newCode)

inputsRef.current[5].focus()

}

// 🔁 resend code
const handleResend = ()=>{

const expiry = Date.now() + 120 * 1000
localStorage.setItem("resendTimer", expiry)

setTimeLeft(120)
setIsActive(true)

// reset inputs
setCode(["","","","","",""])
inputsRef.current[0]?.focus()

// simulation nouveau code
const newCode = Math.floor(100000 + Math.random() * 900000)
localStorage.setItem("resetCode", newCode)
localStorage.setItem("resetExpiry", Date.now() + 5 * 60 * 1000)

console.log("NEW CODE:", newCode)

toast.success("Code resent 📧")

}

// ✅ submit
const handleSubmit = (e)=>{

e.preventDefault()

const enteredCode = code.join("")
const storedCode = localStorage.getItem("resetCode")
const expiry = localStorage.getItem("resetExpiry")

if(enteredCode.length !== 6){
toast.error("Enter 6 digits")
return
}

if(Date.now() > expiry){
toast.error("Code expired")
navigate("/forgot-password")
return
}

if(enteredCode !== storedCode){
toast.error("Invalid code")
return
}

setLoading(true)

setTimeout(()=>{
setLoading(false)
toast.success("Code verified")
navigate("/reset-password")
},1000)

}

// ⏱ format mm:ss
const formatTime = (time)=>{
const min = Math.floor(time / 60)
const sec = time % 60
return `${min}:${sec < 10 ? "0" : ""}${sec} sec`
}

return(

<AuthLayout
title="Verify Code"
subtitle="Enter the 6-digit code sent to your email"
>

<form onSubmit={handleSubmit} className="space-y-6">

{/* INPUTS */}

<div
className="flex justify-center gap-3"
onPaste={handlePaste}
>

{code.map((digit,index)=>(

<input
key={index}
ref={(el)=>inputsRef.current[index]=el}
type="text"
maxLength="1"
value={digit}
onChange={(e)=>handleChange(e.target.value,index)}
onKeyDown={(e)=>handleKeyDown(e,index)}
className="w-10 h-12 text-center text-xl bg-white/10 border border-white/20 rounded-xl text-white 
focus:outline-none focus:border-accent focus:scale-110 focus:shadow-lg focus:shadow-accent/30 transition"
/>

))}

</div>

{/* BUTTON */}

<motion.button
disabled={loading}
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="w-full bg-accent text-black py-3 rounded-xl font-semibold"
>

{loading ? "Verifying..." : "Verify Code"}

</motion.button>

</form>

{/* RESEND */}

<div className="text-center mt-4">

<button
onClick={handleResend}
disabled={isActive}
className={`text-sm font-medium transition
${isActive ? "text-gray-500 cursor-not-allowed" : "text-accent hover:underline"}
`}
>

{isActive ? `Resend in ${formatTime(timeLeft)}` : "Resend Code"}

</button>

</div>

</AuthLayout>

)
}