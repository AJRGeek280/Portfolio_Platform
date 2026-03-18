// AuthLayout.jsx
import { motion } from "framer-motion"

export default function AuthLayout({children,title,subtitle}){

return(

<div className="min-h-screen flex items-center justify-center px-1">

{/* BACKGROUND */}

<div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />

{/* CARD */}

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4"
>

<h2 className="text-3xl font-body font-bold text-white text-center">
{title}
</h2>

<p className="text-gray-400 text-center mt-2">
{subtitle}
</p>

<div className="mt-8">
{children}
</div>

</motion.div>

</div>

)

}