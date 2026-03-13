import { motion } from "framer-motion"
import FloatingShapes from "../UI/FloatingShapes"
import PhotoColumns from "../UI/PhotoColumns"
import FloatingGlassCard  from "../UI/FloatingGlassCard"
import CursorSpotlight  from "../UI/CursorSpotlight"

export default function Hero(){

return(

<section className="relative min-h-screen bg-background flex items-center pt-20 overflow-hidden">

<FloatingShapes/>
<FloatingGlassCard/>

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 justify-start items-center">

{/* LEFT CONTENT */}

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
>

<h1 className="font-titre text-4xl md:text-6xl leading-tight">

  <span className="text-white block">
    Your
    Photography
  </span>

  <span className="gradient-text block">
    Portfolio
  </span>

</h1>


<p className="font-body text-gray-400 mt-6 text-lg">

Build your portfolio, showcase your work,  
and deliver galleries to your clients  
with one powerful platform.

</p>

<div className="flex gap-4 mt-8 justify-center align-center">

<button className="bg-accent px-7 py-3 rounded-xl text-black font-body">

Start Today

</button>

<button className="bg-white/10 backdrop-blur-md px-7 py-3 rounded-xl text-white border border-white/20">

Live Demo

</button>

</div>

</motion.div>

{/* RIGHT VISUAL */}

<motion.div
initial={{opacity:0,x:80}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
className="hidden md:block"
>

<PhotoColumns/>

</motion.div>

</div>

</section>

)

}