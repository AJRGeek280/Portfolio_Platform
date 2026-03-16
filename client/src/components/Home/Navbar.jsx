import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../../assets/images/logo.png"
import { User } from "lucide-react"

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Reference pour le Menu
  const menuRef = useRef(null)
  const closeRef = useRef(null)

  // scroll vers section
  const scrollToSection = (id) => {

    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }

    setOpen(false)

  }

  // Bloque le Scroll
  useEffect(() => {

    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

  }, [open])

  // Fermer Menu au click en dehors
  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        closeRef.current &&
        !closeRef.current.contains(event.target)
      ) {
        setOpen(false)
      }

    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [open])

  // Scroll Spy - Active Section
  useEffect(() => {

    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }

        })

      },
      { threshold: 0.3 }

    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()

  }, [])

  return (

    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-6">

        {/* LOGO */}

        <div
          onClick={() => scrollToSection("hero")}
          className="justify-center items-center flex cursor-pointer"
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
            onClick={() => scrollToSection("features")}
            className={`mx-3 transition cursor-pointer ${activeSection === "features"
                ? "border-b-2 border-accent pb-1"
                : "hover:text-white"
              }`}
          >
            Features
          </li>

          <li
            onClick={() => scrollToSection("howItWork")}
            className={`mx-3 transition cursor-pointer ${activeSection === "howItWork"
                ? "border-b-2 border-accent pb-1"
                : "hover:text-white"
              }`}
          >
            About
          </li>

          <li
            onClick={() => scrollToSection("portfolio")}
            className={`mx-3 transition cursor-pointer ${activeSection === "portfolio"
                ? "border-b-2 border-accent pb-1"
                : "hover:text-white"
              }`}
          >
            Portfolio
          </li>

          <li
            onClick={() => scrollToSection("pricing")}
            className={`mx-3 transition cursor-pointer ${activeSection === "pricing"
                ? "border-b-2 border-accent pb-1"
                : "hover:text-white"
              }`}
          >
            Pricing
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className={`mx-3 transition cursor-pointer ${activeSection === "contact"
                ? "border-b-2 border-accent pb-1"
                : "hover:text-white"
              }`}
          >
            Contact
          </li>

        </ul>


        {/* SIGN IN */}

        <Link to="/login">

          <button className="hidden md:block bg-accent px-5 py-2 rounded-lg text-black font-bold font-body hover:scale-105 transition">
            <User size={18} className="inline-block mr-2" />
            Sign in
          </button>

        </Link>


        {/* HAMBURGER ANIMÉ */}

        <div
          ref={closeRef}
          onClick={() => setOpen(prev => !prev)}
          className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
        >

          <span
            className={`h-[2px] w-full bg-white transition-transform duration-300
${open ? "rotate-45 translate-y-2" : ""}`}
          ></span>

          <span
            className={`h-[2px] w-full bg-white transition-opacity duration-300
${open ? "opacity-0" : "opacity-100"}`}
          ></span>

          <span
            className={`h-[2px] w-full bg-white transition-transform duration-300
${open ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>

        </div>

      </div>


      {/* MOBILE MENU SLIDE DOWN */}

      <AnimatePresence>

        {open && (

          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >

            <ul className="flex flex-col items-center gap-6 py-8 text-gray-300 font-body">

              <li
                onClick={() => scrollToSection("features")}
                className="hover:text-white cursor-pointer"
              >
                Features
              </li>

              <li
                onClick={() => scrollToSection("howItWork")}
                className="hover:text-white cursor-pointer"
              >
                About
              </li>

              <li
                onClick={() => scrollToSection("portfolio")}
                className="hover:text-white cursor-pointer"
              >
                Portfolio
              </li>

              <li
                onClick={() => scrollToSection("pricing")}
                className="hover:text-white cursor-pointer"
              >
                Pricing
              </li>

              <li
                onClick={() => scrollToSection("contact")}
                className="hover:text-white cursor-pointer"
              >
                Contact
              </li>

              <Link to="/login">

                <button
                  onClick={() => setOpen(false)}
                  className="bg-accent px-6 py-2 rounded-lg text-black font-body font-bold"
                >
                  
                  <User size={18} className="inline-block mr-2" />
                  Sign in

                </button>

              </Link>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  )

}