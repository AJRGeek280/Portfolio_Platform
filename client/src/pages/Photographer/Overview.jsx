import { motion } from "framer-motion"
import {
    DollarSign, Image, Users,
    ShoppingCart, FileText, Upload,
    PlusCircle, Eye
} from "lucide-react"

const stats = [
    { title: "Revenue", value: "$12,450", icon: DollarSign, color: "text-accent" },
    { title: "Photos", value: "1,240", icon: Image },
    { title: "Clients", value: "320", icon: Users },
    { title: "Sales", value: "89", icon: ShoppingCart },
    { title: "Projects", value: "24", icon: FileText }
]

const activities = [
    "New client Emma added",
    "20 photos uploaded",
    "Sale completed $120",
    "Gallery delivered",
    "New blog post published"
]

const clients = [
    { name: "Emma Carter", status: "Active" },
    { name: "John Doe", status: "Pending" },
    { name: "Sophia Lee", status: "Active" }
]

const galleries = [
    {
        title: "Wedding - Emma",
        photos: 120,
        cover: "/src/assets/images/img1.jpg"
    },
    {
        title: "Fashion Shoot",
        photos: 80,
        cover: "/src/assets/images/img2.jpg"
    },
    {
        title: "Nature Collection",
        photos: 60,
        cover: "/src/assets/images/img3.jpg"
    }
]

export default function Overview() {

    return (

        <div className="space-y-10">

            {/* 🔥 KPI */}
            <div className="grid md:grid-cols-5 gap-6">

                {stats.map((stat, i) => {
                    const Icon = stat.icon

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className=" border border-white/10 backdrop-blur-xl rounded-2xl p-5 flex justify-between items-center hover:border-accent transition"
                        >
                            <div>
                                <p className="text-gray-400 text-sm font-body">{stat.title}</p>
                                <h3 className="text-xl font-bold text-white font-body">{stat.value}</h3>
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10">
                                <Icon className={stat.color || "text-accent"} size={18} />
                            </div>
                        </motion.div>
                    )
                })}

            </div>


            {/* 🔥 GRID */}
            <div className="grid md:grid-cols-3 gap-6">

                {/* ⚡ QUICK ACTIONS */}
                <div className="rounded-2xl p-4 space-y-2 hover:border hover:border-accent">

                    <h3 className="text-accent font-body font-bold">Quick Actions</h3>

                    {[
                        { label: "Upload Photo", icon: Upload },
                        { label: "Create Gallery", icon: PlusCircle },
                        { label: "Add Client", icon: Users },
                        { label: "View Portfolio", icon: Eye },
                        { label: "New Blog Post", icon: FileText }
                    ].map((action, i) => {

                        const Icon = action.icon

                        return (
                            <div
                                key={i}
                                className="flex justify-center items-center gap-3 p-3 rounded-xl hover:bg-white/20 cursor-pointer transition "
                            >
                                <Icon size={18} />
                                <span>{action.label}</span>
                            </div>
                        )
                    })}

                </div>
                
                {/* 📊 CHART */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="md:col-span-2 rounded-2xl p-6 hover:border-accent"
                >
                    <h3 className="text-white mb-4 font-body font-bold">Activity Overview</h3>

                    <div className="h-48 flex items-end gap-2">

                        {[30, 50, 40, 70, 60, 90, 80, 65, 75, 85, 95, 100, 70, 60, 90, 80, 65, 75].map((h, i) => (

                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: i * 0.05 }}
                                className="flex-1 bg-accent/80 rounded-t-lg"
                            />

                        ))}

                    </div>

                </motion.div>


            </div>

            {/* 🔥 FOURTHY GRID - GALLERIES */}
            <div className="rounded-2xl p-6">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">

                    <h3 className="text-white font-body font-bold">
                        Recent Galleries
                    </h3>

                    <button className="text-accent text-sm hover:underline">
                        View all
                    </button>

                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-6">

                    {galleries.map((g, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-black/5 border border-white/10 rounded-xl overflow-hidden transition group"
                        >

                            {/* IMAGE */}
                            <div className="relative">

                                <img
                                    src={g.cover}
                                    className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
                                />

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                                    <button className="bg-accent text-black px-4 py-2 rounded-lg text-sm">
                                        View Gallery
                                    </button>

                                </div>

                            </div>

                            {/* INFO */}
                            <div className="p-4">

                                <h4 className="text-white font-semibold">
                                    {g.title}
                                </h4>

                                <p className="text-gray-400 text-sm">
                                    {g.photos} photos
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>


            {/* 🔥 THIRD GRID */}
            <div className="grid md:grid-cols-3 gap-6">

                {/* 🔔 ACTIVITY */}
                <div className="rounded-2xl p-6 hover:border hover:border-accent">

                    <h3 className="text-white font-body font-bold mb-4">Recent Activity</h3>

                    <div className="space-y-3 text-sm">

                        {activities.slice(0, 5).map((a, i) => (
                            <div key={i} className="text-gray-400">
                                {a}
                            </div>
                        ))}

                    </div>

                </div>


                {/* 🏆 TOP CONTENT */}
                <div className="hover:border hover:border-accent rounded-2xl p-6">

                    <h3 className="text-white font-body font-bold mb-4">Top Content</h3>

                    <div className="grid grid-cols-3 gap-2">

                        {[1, 2, 3].map((i) => (
                            <img
                                key={i}
                                src={`/src/assets/images/img${i}.jpg`}
                                className="aspect-square object-cover rounded-lg"
                            />
                        ))}

                    </div>

                </div>


                {/* 📊 ANALYTICS */}
                <div className="hover:border hover:border-accent rounded-2xl p-6">

                    <h3 className="text-white font-body font-bold mb-4">Traffic</h3>

                    <p className="text-3xl font-bold text-accent">12.4k</p>

                    <p className="text-gray-400 text-sm">Monthly views</p>

                </div>

            </div>

            {/* 🔥 CLIENT TABLE - SECOND GRID */}
            <div className="border border-white/10 rounded-2xl p-6">

                <h3 className="text-white font-body font-bold mb-6">Clients</h3>

                <table className="w-full text-sm">

                    <thead className="text-gray-400">
                        <tr>
                            <th className="text-center pb-3">Name</th>
                            <th className="text-center pb-3">Status</th>
                            <th className="text-center pb-3">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="text-white">

                        {clients.map((c, i) => (

                            <tr key={i} className="border-t border-white/10">

                                <td className="py-3">{c.name}</td>

                                <td className="py-3">
                                    <span className={`text-xs px-2 py-1 rounded 
                                        ${c.status === "Active"
                                            ? "bg-green-500/20 text-green-400"
                                            : "bg-yellow-500/20 text-yellow-400"}`}>
                                        {c.status}
                                    </span>
                                </td>

                                <td className="py-3 text-center space-x-2">

                                    <button className="px-3 py-1 bg-white/10 rounded hover:bg-accent/20">
                                        View
                                    </button>

                                    <button className="px-3 py-1 bg-white/10 rounded hover:bg-red-500/20">
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    )
}