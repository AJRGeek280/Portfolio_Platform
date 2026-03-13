import { motion } from "framer-motion"

export default function FloatingGlassCard(){

return(

<motion.div
animate={{y:[0,-20,0]}}
transition={{duration:6,repeat:Infinity}}
className="absolute right-20 bottom-78 hidden md:block"
>

<div className="bg-primary/10 backdrop-blur-xl border border-secondary/20 p-6 rounded-2xl shadow-xl">

<p className="text-white font-body text-sm">
Gallery Delivered
</p>

<p className="text-accent font-bold text-lg">
+50k
</p>

</div>


</motion.div>

)

}