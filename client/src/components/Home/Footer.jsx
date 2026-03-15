import { motion } from "framer-motion"
import { Mail, Instagram, Linkedin, Facebook } from "lucide-react"
import { useState } from "react"

export default function Footer(){

const [email,setEmail] = useState("")

return(

<footer id="footer" className="border-t border-white/10 pt-16">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-3 gap-10">

{/* LOGO + SLOGAN */}

<div>

<h3 className="text-2xl font-bold text-white">
Focus<span className="gradient-text">Frame</span>
</h3>

<p className="text-gray-400 mt-4 text-sm leading-relaxed">
The all-in-one platform for photographers to create portfolios,
deliver galleries and sell their work online.
</p>

{/* SOCIAL */}

<div className="flex justify-center gap-4 mt-6">

<motion.a
whileHover={{scale:1.2, rotate:5}}
href="#"
className="bg-white/10 p-3 rounded-lg hover:bg-accent"
>

<Instagram size={18} className="text-white"/>

</motion.a>

<motion.a
whileHover={{scale:1.2, rotate:-5}}
href="#"
className="bg-white/10 p-3 rounded-lg hover:bg-accent"
>

<Linkedin size={18} className="text-white"/>

</motion.a>

<motion.a
whileHover={{scale:1.2, rotate:5}}
href="#"
className="bg-white/10 p-3 rounded-lg hover:bg-accent"
>

<Facebook size={18} className="text-white"/>

</motion.a>

</div>

</div>


{/* PRODUCT NAV */}

<div>

<h4 className="text-white font-semibold mb-4">
Product
</h4>

<ul className="space-y-3 text-gray-400 text-sm">

<li className="hover:text-white cursor-pointer">Features</li>
<li className="hover:text-white cursor-pointer">Pricing</li>
<li className="hover:text-white cursor-pointer">Gallery Delivery</li>
<li className="hover:text-white cursor-pointer">Sell Photos</li>

</ul>

</div>


{/* COMPANY

<div>

<h4 className="text-white font-semibold mb-4">
Company
</h4>

<ul className="space-y-3 text-gray-400 text-sm">

<li className="hover:text-white cursor-pointer">About</li>
<li className="hover:text-white cursor-pointer">Blog</li>
<li className="hover:text-white cursor-pointer">Careers</li>
<li className="hover:text-white cursor-pointer">Contact</li>

</ul>

</div>  */}


{/* NEWSLETTER */}

<div>

<h4 className="text-white font-semibold mb-4">
Newsletter
</h4>

<p className="text-gray-400 text-sm mb-4">
Get tips for photographers and product updates.
</p>

<div className="flex">

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="bg-white/10 border border-white/20 rounded-l-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none w-full hover:border-accent"
/>

<button className="bg-accent px-4 rounded-r-xl flex items-center justify-center">

<Mail size={18} className="text-black"/>

</button>

</div>

</div>

</div>


{/* BOTTOM BAR */}

<div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

<p>
© 2026 FocusFrame. All rights reserved.
</p>

<div className="flex gap-6 mt-4 md:mt-0">

<span className="hover:text-white cursor-pointer">Privacy Policy</span>
<span className="hover:text-white cursor-pointer">Terms</span>
<span className="hover:text-white cursor-pointer">Cookies</span>

</div>

</div>

</div>

</footer>

)
}