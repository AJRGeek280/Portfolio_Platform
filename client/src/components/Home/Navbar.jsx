import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"

export default function Navbar(){

const [open,setOpen]=useState(false)

// Reference pour le Menu
const menuRef = useRef(null)

// scroll vers section
const scrollToSection = (id) => {

const element = document.getElementById(id)

if(element){
element.scrollIntoView({behavior:"smooth"})
}

setOpen(false)

}

// Bloque le Scroll
useEffect(() => {

  if(open){
    document.body.style.overflow = "hidden"
  }else{
    document.body.style.overflow = "auto"
  }

}, [open])

// Fermer Menu au click en dehors
useEffect(() => {

  const handleClickOutside = (event) => {

    if(menuRef.current && !menuRef.current.contains(event.target)){
      setOpen(false)
    }

  }

  if(open){
    document.addEventListener("mousedown", handleClickOutside)
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }

}, [open])

return(

<nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10 cursor-pointer">

<div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-6">

{/* LOGO */}

<div
onClick={()=>scrollToSection("hero")}
className="justify-center items-center flex"
>

<img src={logo} alt="Logo" className="w-10 h-10 mx-3" />

<span className="text-white font-titre font-bold text-xl">
Focus
</span>

<span className="gradient-text font-body font-titre font-bold text-xl">
Frame
</span>

</div>


{/* DESKTOP MENU */}

<ul className="hidden md:flex gap-8 font-body text-gray-300">

<li
onClick={()=>scrollToSection("howItWork")}
className="hover:text-white mx-3"
>
About
</li>

<li
onClick={()=>scrollToSection("features")}
className="hover:text-white mx-3"
>
Features
</li>

<li
onClick={()=>scrollToSection("portfolio")}
className="hover:text-white mx-3"
>
Portfolio
</li>

<li
onClick={()=>scrollToSection("pricing")}
className="hover:text-white mx-3"
>
Pricing
</li>

<li
onClick={()=>scrollToSection("contact")}
className="hover:text-white mx-3"
>
Contact
</li>

</ul>


{/* SIGN IN */}

<Link to="/login">

<button className="hidden md:block bg-accent px-5 py-2 rounded-lg text-black font-body">
Sign in
</button>

</Link>


{/* HAMBURGER */}

<div
onClick={()=>setOpen(!open)}
className="md:hidden text-white mx-3 cursor-pointer text-2xl"
>

{open ? "✕" : "☰"}

</div>

</div>


{/* MOBILE MENU */}

{open && (

<div
    ref={menuRef}
    className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
>

<ul className="flex flex-col items-center gap-6 py-8 text-gray-300 font-body">

<li
onClick={()=>scrollToSection("about")}
className="hover:text-white"
>
About
</li>

<li
onClick={()=>scrollToSection("features")}
className="hover:text-white"
>
Features
</li>

<li
onClick={()=>scrollToSection("portfolio")}
className="hover:text-white"
>
Portfolio
</li>

<li
onClick={()=>scrollToSection("pricing")}
className="hover:text-white"
>
Pricing
</li>

<li
onClick={()=>scrollToSection("contact")}
className="hover:text-white"
>
Contact
</li>

<Link to="/login">

<button
onClick={()=>setOpen(false)}
className="bg-accent px-6 py-2 rounded-lg text-black font-body"
>

Sign in

</button>

</Link>

</ul>

</div>

)}

</nav>

)

}