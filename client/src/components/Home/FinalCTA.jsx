import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

import p1 from "../../assets/images/img1.jpg"
import p2 from "../../assets/images/img2.jpg"
import p3 from "../../assets/images/img3.jpg"
import p4 from "../../assets/images/img4.jpg"
import p5 from "../../assets/images/img5.jpg"
import p6 from "../../assets/images/img6.jpg"


export default function FinalCTA() {

    const [email, setEmail] = useState("")

    return (

        <section id="finalCTA" className="relative py-10 overflow-hidden rounded-2xl w-full">

            {/* BACKGROUND PHOTOS */}

            <div className="absolute inset-0 grid grid-cols-3 opacity-20">

                <img
                    src={p1}
                    className="w-full h-full object-cover"
                />

                <img
                    src={p2}
                    className="w-full h-full object-cover"
                />

                <img
                    src={p3}
                    className="w-full h-full object-cover"
                />

            </div>

            {/* PARALLAX OVERLAY */}

            <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* CONTENT */}

            <div className="relative max-w-4xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-titre text-white leading-tight"
                >

                    Turn Your Photography

                    <span className="gradient-text block">
                        Into a Business
                    </span>

                </motion.h2>


                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 mt-6 text-lg text-body"
                >

                    Create stunning galleries, deliver photos to clients,
                    and sell your work online.

                </motion.p>


                {/* EMAIL CAPTURE */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
                >

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition w-full md:w-80"
                    />


                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 bg-accent text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-accent/40 transition"
                    >

                        Start Free Trial

                        <ArrowRight size={18} />

                    </motion.button>

                </motion.div>


                {/* TRUST BADGES */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 text-sm text-gray-400"
                >

                    No credit card required • Free 7-day trial

                </motion.div>

            </div>

        </section>

    )
}