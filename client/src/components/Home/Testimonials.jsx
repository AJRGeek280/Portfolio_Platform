import { motion, useAnimation } from "framer-motion"
import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import p1 from "../../assets/images/img1.jpg"
import p2 from "../../assets/images/img2.jpg"
import p3 from "../../assets/images/img3.jpg"
import p4 from "../../assets/images/img4.jpg"
import p5 from "../../assets/images/img5.jpg"
import p6 from "../../assets/images/img6.jpg"

const testimonials = [
    {
        name: "Emma Carter",
        job: "Wedding Photographer",
        avatar: p1,
        review: "This platform completely changed the way I deliver photos to my clients.",
        gallery: [p1, p2, p3]
    },
    {
        name: "Daniel Ross",
        job: "Travel Photographer",
        avatar: p2,
        review: "Selling prints directly from my galleries increased my revenue instantly.",
        gallery: [p2, p3, p4]
    },
    {
        name: "Sophia Miller",
        job: "Portrait Photographer",
        avatar: p3,
        review: "I launched my photography website in less than one hour.",
        gallery: [p3, p4, p5]
    }
]

export default function Testimonials() {

    const controls = useAnimation()
    const carouselRef = useRef(null)

    const [active, setActive] = useState(0)

    const startLoop = () => {
        controls.start({
            x: ["0%", "-50%"],
            transition: {
                repeat: Infinity,
                duration: 25,
                ease: "linear"
            }
        })
    }

    const stopLoop = () => {
        controls.stop()
    }

    useEffect(() => {
        startLoop()

        const handleClickOutside = () => startLoop()

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }

    }, [])

    return (

        <section id="testimonials" className="py-20 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE */}

                <div className="text-center mb-20">

                    <h2 className="text-4xl md:text-5xl font-titre text-white">

                        Trusted by

                        <span className="gradient-text block">
                            photographers worldwide
                        </span>

                    </h2>

                </div>


                {/* STATS */}

                <div className="grid md:grid-cols-3 gap-8 mb-24 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="text-4xl font-bold text-white">10k+</p>
                        <p className="text-gray-400">Photographers</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-4xl font-bold text-white">2M+</p>
                        <p className="text-gray-400">Photos Delivered</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <p className="text-4xl font-bold text-white">$5M+</p>
                        <p className="text-gray-400">Earned by photographers</p>
                    </motion.div>

                </div>


                {/* DESKTOP CAROUSEL */}

                <div
                    className="hidden md:block relative overflow-hidden"
                    onMouseEnter={stopLoop}
                    onMouseLeave={startLoop}
                >

                    <motion.div
                        ref={carouselRef}
                        drag="x"
                        dragElastic={0.1}
                        onDragStart={stopLoop}
                        onDragEnd={startLoop}
                        animate={controls}
                        className="flex gap-8 w-max cursor-grab active:cursor-grabbing"
                    >

                        {[...testimonials, ...testimonials].map((t, i) => (

                            <Card key={i} t={t} />

                        ))}

                    </motion.div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />

                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />

                </div>


                {/* MOBILE SLIDER */}

                <div className="md:hidden">

                    <motion.div
                        className="flex"
                        animate={{ x: `-${active * 100}%` }}
                        transition={{ duration: 0.4 }}
                    >

                        {testimonials.map((t, i) => (
                            <div key={i} className="min-w-full flex justify-center">
                                <Card t={t} />
                            </div>
                        ))}

                    </motion.div>


                    {/* DOTS */}

                    <div className="flex justify-center gap-3 mt-6">

                        {testimonials.map((_, i) => (

                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`h-2 rounded-full transition-all
${active === i
                                        ? "w-6 bg-accent"
                                        : "w-2 bg-gray-500"
                                    }`}
                            ></button>

                        ))}

                    </div>

                </div>

            </div>


            {/* WALL OF PHOTOS */}

            <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 px-6">

                {[p1, p2, p3, p4].map((img, i) => (

                    <motion.img
                        key={i}
                        src={img}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="rounded-xl object-cover aspect-square"
                    />

                ))}

            </div>

        </section>

    )
}



function Card({ t }) {

    return (

        <div className="w-[320px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-4">

            <div className="flex items-center gap-3">

                <img
                    src={t.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.job}</p>
                </div>

            </div>

            <div className="flex text-accent gap-1">

                {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="currentColor" />
                ))}

            </div>

            <p className="text-gray-300 text-sm">
                "{t.review}"
            </p>

            <div className="grid grid-cols-3 gap-2 pt-2">

                {t.gallery.map((img, index) => (

                    <img
                        key={index}
                        src={img}
                        className="aspect-square object-cover rounded"
                    />

                ))}

            </div>

        </div>

    )

}