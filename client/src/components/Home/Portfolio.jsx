import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"

import p1 from "../../assets/images/img1.jpg"
import p2 from "../../assets/images/img2.jpg"
import p3 from "../../assets/images/img3.jpg"
import p4 from "../../assets/images/img4.jpg"
import p5 from "../../assets/images/img5.jpg"
import p6 from "../../assets/images/img6.jpg"


const photos = [
    {
        src: p1,
        size: "large",
        title: "Wedding Story",
        desc: "A romantic wedding captured in natural light."
    },
    {
        src: p2,
        size: "small",
        title: "Portrait Session",
        desc: "Studio portrait with cinematic lighting."
    },
    {
        src: p3,
        size: "small",
        title: "Travel Moments",
        desc: "Exploring landscapes around the world."
    },
    {
        src: p4,
        size: "large",
        title: "Fashion Editorial",
        desc: "Modern fashion photography for brands."
    },
    {
        src: p5,
        size: "large",
        title: "Nature Gallery",
        desc: "Wild landscapes and nature scenes."
    },
    {
        src: p6,
        size: "small",
        title: "Urban Photography",
        desc: "City life captured through the lens."
    }
]

export default function PortfolioShowcase() {

    const { scrollYProgress } = useScroll()

    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -120])

    const [active, setActive] = useState(null)

    return (

        <section id="portfolio" className="py-20 bg-background relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >

                    <h2 className="font-titre text-4xl md:text-5xl text-white">

                        Showcase your work

                        <span className="gradient-text block">
                            beautifully
                        </span>

                    </h2>

                    <p className="text-gray-400 mt-6 text-lg font-body">

                        Create stunning galleries that make your photography stand out.

                    </p>

                </motion.div>


                {/* GALLERY GRID */}

                <motion.div
                    style={{ y: yParallax }}
                    className="grid md:grid-cols-3 gap-6 py-10"
                >

                    {photos.map((photo, index) => {

                        const sizeClass =
                            photo.size === "large"
                                ? "md:col-span-2 h-[420px]"
                                : "h-[260px]"

                        return (

                            <div
                                key={index}
                                onClick={() => setActive(photo.src)}
                                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${sizeClass}`}
                            >

                                {/* IMAGE */}

                                <img
                                    src={photo.src}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                />


                                {/* LIGHT REFLECTION */}

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">

                                    <div className="absolute -top-40 -left-40 w-80 h-80 bg-secondary/20 blur-3xl rotate-45"></div>

                                </div>


                                {/* OVERLAY */}

                                <div className="absolute inset-0 bg-black/50 opacity-1 group-hover:opacity-100 transition flex items-center justify-center p-6">

                                    <div className="space-y-2">

                                        <h3 className="text-accent text-lg font-extrabold font-titre">

                                            {photo.title}

                                        </h3>

                                        <p className="text-gray-300 text-sm max-w-xs font-body">

                                            {photo.desc}

                                        </p>

                                        <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-2 text-white text-sm inline-flex items-center gap-2 hover:bg-accent/20 transition">

                                            View Gallery →

                                        </div>

                                    </div>

                                </div>

                            </div>

                        )

                    })}

                </motion.div>
           

            </div>


            {/* MODAL PREVIEW */}

            {active && (

                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setActive(null)}
                >

                    <img
                        src={active}
                        className="max-h-[90vh] max-w-[90vw] rounded-xl"
                    />

                </div>

            )}

        </section>

    )

}