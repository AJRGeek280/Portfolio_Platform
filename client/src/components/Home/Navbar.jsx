import { useState } from "react"
import logo from "../../assets/images/logo.png"
export default function Navbar(){

const [open,setOpen]=useState(false)

return(

<nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10 cursor-pointer">

<div className="max-w-7xl mx-auto flex justify-between items-center p-x10 py-6">

<div className="justify-center items-center flex">
    <img src={logo} alt="Logo" className="w-10 h-10 mx-3" />
    <span className="text-white font-titre font-bold text-xl">Focus</span><span className="text-white font-body font-titre font-bold text-xl">Frame</span>
</div>


<ul className="hidden md:flex gap-8 font-body text-gray-300">

<li className="hover:text-white mx-3">About</li>
<li className="hover:text-white mx-3">Features</li>
<li className="hover:text-white mx-3">Porfolio</li>
<li className="hover:text-white mx-3">Pricing</li>
<li className="hover:text-white mx-3">Contact</li>

</ul>

<button className="hidden md:block bg-accent px-5 py-2 rounded-lg text-black font-body">
Sign in
</button>

<div
onClick={()=>setOpen(!open)}
className="md:hidden text-white mx-3 cursor-pointer"
>
☰
</div>

</div>

</nav>

)

}