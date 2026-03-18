// DashboardLayout.jsx
import { useState } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function DashboardLayout({ children }) {

    const [open, setOpen] = useState(false)

    return (
        <div className="flex h-screen bg-background text-white font-body">

            {/* SIDEBAR */}
            <Sidebar open={open} setOpen={setOpen} />

            <div className="flex-1 flex flex-col">

                {/* TOPBAR */}
                <Topbar setOpen={setOpen} />

                {/* CONTENT */}
                <div
                    className="p-6 overflow-y-auto"
                    onClick={() => setOpen(false)} // 👈 ferme si clique extérieur
                >
                    {children}
                </div>

            </div>

        </div>
    )
}