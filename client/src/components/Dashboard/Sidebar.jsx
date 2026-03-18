// Sidebar.jsx
import { NavLink } from "react-router-dom"
import {
    Home, Image, Upload, DollarSign,
    BarChart3, User, FileText, Settings, X
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../../assets/images/logo.png"

export default function Sidebar({ open, setOpen }) {

    const link = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition
${isActive
            ? "bg-accent text-black shadow-lg"
            : "text-gray-400 hover:bg-white/10 hover:text-white"}`

    return (
        <>
            {/* DESKTOP */}
            <div className="hidden md:flex flex-col w-64 bg-background border-r border-white/10 p-2">

                <div className="flex items-center mb-8">
                    <img src={logo} className="w-10 h-10 mx-3" />
                    <span className="text-white font-titre font-bold text-xl">
                        Focus
                    </span>
                    <span className="gradient-text font-titre font-bold text-xl">
                        Frame
                    </span>
                </div>

                <nav className="space-y-2">
                    <NavLink to="/dashboard" className={link}><Home size={18}/> Overview</NavLink>
                    <NavLink to="/dashboard/portfolio" className={link}><User size={18}/> Portfolio</NavLink>
                    <NavLink to="/dashboard/gallery" className={link}><Image size={18}/> Gallery</NavLink>
                    <NavLink to="/dashboard/clients" className={link}><Image size={18}/> Client Galleries</NavLink>
                    <NavLink to="/dashboard/upload" className={link}><Upload size={18}/> Upload</NavLink>
                    <NavLink to="/dashboard/sales" className={link}><DollarSign size={18}/> Sales</NavLink>
                    <NavLink to="/dashboard/analytics" className={link}><BarChart3 size={18}/> Analytics</NavLink>
                    <NavLink to="/dashboard/blog" className={link}><FileText size={18}/> Blog</NavLink>
                    <NavLink to="/dashboard/settings" className={link}><Settings size={18}/> Settings</NavLink>
                </nav>

            </div>

            {/* MOBILE NAV (STYLE NAVBAR) */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* OVERLAY */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 z-40"
                            onClick={() => setOpen(false)}
                        />

                        {/* NAVBAR STYLE */}
                        <motion.div
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ type: "spring", stiffness: 260, damping: 25 }}
                            className="fixed -left-0 -top-0 h-screen min-w-64 bg-background border-b border-white/10 p-4 z-50"
                        >

                            {/* HEADER */}
                            <div className="flex justify-between items-center mb-4">
                                <img src={logo} className="w-8 h-8" />
                                <button onClick={() => setOpen(false)}>
                                    <X />
                                </button>
                            </div>

                            {/* NAV GRID */}
                            <nav className="grid grid-cols-1 gap-3">

                                <NavLink to="/dashboard" className={link} onClick={() => setOpen(false)}>
                                    <Home size={18}/> Overview
                                </NavLink>

                                <NavLink to="/dashboard/portfolio" className={link} onClick={() => setOpen(false)}>
                                    <User size={18}/> Portfolio
                                </NavLink>

                                <NavLink to="/dashboard/gallery" className={link} onClick={() => setOpen(false)}>
                                    <Image size={18}/> Gallery
                                </NavLink>

                                <NavLink to="/dashboard/clients" className={link} onClick={() => setOpen(false)}>
                                    <Image size={18}/> Clients
                                </NavLink>

                                <NavLink to="/dashboard/upload" className={link} onClick={() => setOpen(false)}>
                                    <Upload size={18}/> Upload
                                </NavLink>

                                <NavLink to="/dashboard/sales" className={link} onClick={() => setOpen(false)}>
                                    <DollarSign size={18}/> Sales
                                </NavLink>

                                <NavLink to="/dashboard/analytics" className={link} onClick={() => setOpen(false)}>
                                    <BarChart3 size={18}/> Analytics
                                </NavLink>

                                <NavLink to="/dashboard/settings" className={link} onClick={() => setOpen(false)}>
                                    <Settings size={18}/> Settings
                                </NavLink>

                            </nav>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}