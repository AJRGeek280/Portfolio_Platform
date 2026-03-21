// Sidebar.jsx
import { NavLink } from "react-router-dom"
import { useState } from "react"
import {
    Home, Image, Upload, DollarSign,
    BarChart3, User, FileText, Settings, X,
    ChevronRight, HelpCircle, LogOut, Crown, LucideUserCog, Users
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../../assets/images/logo.png"

export default function Sidebar({ open, setOpen }) {

    const [userMenuOpen, setUserMenuOpen] = useState(false)
    const [helpOpen, setHelpOpen] = useState(false)

    // fake user (tu remplaceras plus tard)
    const user = {
        name: "Antoine Josue Remy",
        plan: "Pro"
    }

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
                    <NavLink to="/dashboard" className={link} end><Home size={18} /> Overview</NavLink>
                    <NavLink to="/dashboard/portfolio" className={link}><User size={18} /> Portfolio</NavLink>
                    <NavLink to="/dashboard/gallery" className={link}><Image size={18} /> Gallery</NavLink>
                    <NavLink to="/dashboard/clients" className={link}><Image size={18} /> Client Galleries</NavLink>
                    <NavLink to="/dashboard/sales" className={link}><DollarSign size={18} /> Sales</NavLink>
                    <NavLink to="/dashboard/analytics" className={link}><BarChart3 size={18} /> Analytics</NavLink>
                    <NavLink to="/dashboard/blog" className={link}><FileText size={18} /> Blog</NavLink>
                    <NavLink to="/dashboard/refferals" className={link}><Users size={18}/>Refferals</NavLink>
                    <NavLink to="/dashboard/settings" className={link}><Settings size={18} /> Settings</NavLink>
                    
                </nav>

                {/* USER CARD (BOTTOM) */}
                <div className="fixed bottom-6">

                    {/* CARD */}
                    <div
                        onClick={() => setUserMenuOpen(prev => !prev)}
                        className="flex items-center justify-between p-3 mt-6 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition"
                    >

                        {/* LEFT */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/90 text-black font-bold">
                                {user.name.split(" ").map(n => n[0]).join("")}
                            </div>

                            <div>
                                <p className="text-white text-sm font-semibold">{user.name}</p>
                                <p className="flex justify-start text-gray-400 text-xs">{user.plan} Plan</p>
                            </div>
                        </div>

                        <ChevronRight size={18} className="text-gray-400" />

                    </div>

                    {/* DROPDOWN */}
                    <AnimatePresence>
                        {userMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-16 left-0 w-full bg-background border border-white/10 rounded-xl p-2 shadow-xl z-60"
                            >

                                {/* PROFILE */}
                                <div className="px-4 py-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-300 hover:text-white flex justify-between items-center">
                                    Profile
                                    <LucideUserCog size={16} />
                                </div>

                                {/* UPGRADE */}
                                <div className="px-4 py-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-300 hover:text-white flex justify-between items-center">
                                    Upgrade Plan
                                    <Crown size={16} />
                                </div>

                                {/* HELP */}
                                <div
                                    onClick={() => setHelpOpen(prev => !prev)}
                                    className="px-4 py-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-300 hover:text-white flex justify-between items-center"
                                >
                                    Help
                                    <ChevronRight size={16} />
                                </div>

                                {/* SUB MENU */}
                                <AnimatePresence>
                                    {helpOpen && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="ml-4 mt-2 space-y-1"
                                        >
                                            <div className="px-3 py-2 text-sm hover:bg-white/10 rounded-lg cursor-pointer">
                                                Support Center
                                            </div>

                                            <div className="px-3 py-2 text-sm hover:bg-white/10 rounded-lg cursor-pointer">
                                                Terms & Policies
                                            </div>

                                            <div className="px-3 py-2 text-sm hover:bg-white/10 rounded-lg cursor-pointer">
                                                Report a bug
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* LOGOUT */}
                                <div className="mt-2 border-t border-white/10 pt-2">
                                    <div className="px-4 py-2 hover:bg-red-500/10 rounded-lg cursor-pointer text-red-400 flex items-center gap-2">
                                        <LogOut size={16} />
                                        Logout
                                    </div>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

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

                                <NavLink to="/dashboard" className={link} end onClick={() => setOpen(false)}>
                                    <Home size={18} /> Overview
                                </NavLink>

                                <NavLink to="/dashboard/portfolio" className={link} onClick={() => setOpen(false)}>
                                    <User size={18} /> Portfolio
                                </NavLink>

                                <NavLink to="/dashboard/gallery" className={link} onClick={() => setOpen(false)}>
                                    <Image size={18} /> Gallery
                                </NavLink>

                                <NavLink to="/dashboard/clients" className={link} onClick={() => setOpen(false)}>
                                    <Image size={18} /> Clients
                                </NavLink>

                                <NavLink to="/dashboard/sales" className={link} onClick={() => setOpen(false)}>
                                    <DollarSign size={18} /> Sales
                                </NavLink>

                                <NavLink to="/dashboard/analytics" className={link} onClick={() => setOpen(false)}>
                                    <BarChart3 size={18} /> Analytics
                                </NavLink>

                                <NavLink to="/dashboard/refferals" className={link} onClick={() => setOpen(false)}>
                                    <Users size={18} /> Refferals
                                </NavLink>

                                <NavLink to="/dashboard/settings" className={link} onClick={() => setOpen(false)}>
                                    <Settings size={18} /> Settings
                                </NavLink>

                                {/* USER CARD (BOTTOM) */}
                                <div className="fixed bottom-6">

                                    {/* CARD */}
                                    <div
                                        onClick={() => setUserMenuOpen(prev => !prev)}
                                        className="flex items-center justify-between p-3 mt-6 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition"
                                    >

                                        {/* LEFT */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/90 text-black font-bold">
                                                {user.name.split(" ").map(n => n[0]).join("")}
                                            </div>

                                            <div>
                                                <p className="text-white text-sm font-semibold">{user.name}</p>
                                                <p className="flex justify-start text-gray-400 text-xs">{user.plan} Plan</p>
                                            </div>
                                        </div>

                                        <ChevronRight size={18} className="text-gray-400" />

                                    </div>

                                    {/* DROPDOWN */}
                                    <AnimatePresence>
                                        {userMenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute bottom-16 left-0 w-full bg-background border border-white/10 rounded-xl p-2 shadow-xl z-60"
                                                
                                            >

                                                {/* PROFILE */}
                                                <div className="px-4 py-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-300 hover:text-white flex justify-between items-center">
                                                    Profile
                                                    <LucideUserCog size={16} />
                                                </div>

                                                {/* UPGRADE */}
                                                <div className="px-4 py-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-300 hover:text-white flex justify-between items-center">
                                                    Upgrade Plan
                                                    <Crown size={16} />
                                                </div>

                                                {/* HELP */}
                                                <div
                                                    onClick={() => setHelpOpen(prev => !prev)}
                                                    className="px-4 py-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-300 hover:text-white flex justify-between items-center"
                                                >
                                                    Help
                                                    <ChevronRight size={16} />
                                                </div>

                                                {/* SUB MENU */}
                                                <AnimatePresence>
                                                    {helpOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            className="ml-4 mt-2 space-y-1"
                                                        >
                                                            <div className="px-3 py-2 text-sm hover:bg-white/10 rounded-lg cursor-pointer">
                                                                Support Center
                                                            </div>

                                                            <div className="px-3 py-2 text-sm hover:bg-white/10 rounded-lg cursor-pointer">
                                                                Terms & Policies
                                                            </div>

                                                            <div className="px-3 py-2 text-sm hover:bg-white/10 rounded-lg cursor-pointer">
                                                                Report a bug
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {/* LOGOUT */}
                                                <div className="mt-2 border-t border-white/10 pt-2">
                                                    <div className="px-4 py-2 hover:bg-red-500/10 rounded-lg cursor-pointer text-red-400 flex items-center gap-2">
                                                        <LogOut size={16} />
                                                        Logout
                                                    </div>
                                                </div>

                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </div>

                            </nav>



                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}