import { motion } from "framer-motion"

export default function FloatingShapes(){

return(

<div className="absolute inset-0 overflow-hidden pointer-events-none">

<motion.div
animate={{ y:[0,-40,0] }}
transition={{ duration:6, repeat:Infinity }}
className="absolute w-4 h-4 bg-accent rounded-full top-20 left-20"
/>

<motion.div
animate={{ y:[0,30,0] }}
transition={{ duration:8, repeat:Infinity }}
className="absolute w-6 h-6 bg-primary rounded-full bottom-40 right-40"
/>

<motion.div
animate={{ x:[0,40,0] }}
transition={{ duration:7, repeat:Infinity }}
className="absolute w-3 h-3 bg-yellow-400 rounded-full top-1/2 left-1/3"
/>


</div>

)

}