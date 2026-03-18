// Topbar.jsx
import { Bell, User, Activity, Menu } from "lucide-react"

export default function Topbar({ setOpen }) {

    return (

        <div className="flex justify-between items-center p-4 border-b border-white/10 bg-background backdrop-blur">

            {/* LEFT */}
            <div className="flex items-center gap-3">

                {/* MOBILE MENU */}
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden"
                >
                    <Menu className="cursor-pointer" />
                </button>

                {/* TITLE (DESKTOP ONLY) */}
                <h1 className="hidden md:block text-lg font-bold font-body">
                    Dashboard
                </h1>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-8">

                {[
                    { icon: Activity, label: "Activity" },
                    { icon: Bell, label: "Notifications" },
                    { icon: User, label: "Profile" }
                ].map((item, index) => {

                    const Icon = item.icon

                    return (
                        <div key={index} className="relative group flex flex-col items-center">

                            <Icon className="cursor-pointer hover:text-accent transition" />

                            <div className="
                                absolute -bottom-10 left-1/2 -translate-x-1/2
                                opacity-0 group-hover:opacity-100
                                translate-y-2 group-hover:translate-y-0
                                bg-white/10 backdrop-blur-md border border-white/20
                                text-white text-xs px-3 py-1 rounded-lg
                                whitespace-nowrap
                                transition-all duration-300
                            ">
                                {item.label}
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}