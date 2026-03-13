import { motion } from "framer-motion"
import { useState } from "react"

import p1 from "../../assets/images/img1.jpg"
import p2 from "../../assets/images/img2.jpg"
import p3 from "../../assets/images/img3.jpg"
import p4 from "../../assets/images/img4.jpg"
import p5 from "../../assets/images/img5.jpg"
import p6 from "../../assets/images/img6.jpg"

import po1 from "../../assets/images/p1.png"
import po2 from "../../assets/images/p1.png"
import po3 from "../../assets/images/p1.png"
import po4 from "../../assets/images/p1.png"
import po5 from "../../assets/images/p1.png"
import po6 from "../../assets/images/p1.png"

const uploadImages = [p1, p2, p3, p4, p5, p6];

const steps = [
    {
        title: "Create Portfolio",
        desc: "Build a professional portfolio in minutes with beautiful layouts.",
    },
    {
        title: "Upload Photos",
        desc: "Upload full galleries quickly with secure cloud storage.",
    },
    {
        title: "Deliver Galleries",
        desc: "Send private galleries to clients with easy access.",
    },
    {
        title: "Sell Your Work",
        desc: "Sell prints and digital downloads directly from your gallery.",
    }
]

export default function HowItWorks() {

    const [active, setActive] = useState(0)

    return (

        <section className="py-32 bg-background relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


                {/* LEFT SIDE — TEXT STEPS */}

                <div className="space-y-10">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <h2 className="font-titre text-4xl md:text-5xl text-white">

                            How it <span className="gradient-text"> works</span>

                        </h2>

                        <p className="text-gray-400 mt-6 text-lg font-body max-w-md">

                            From upload to delivery, manage your photography business in one place.

                        </p>

                    </motion.div>


                    <div className="space-y-6">

                        {steps.map((step, index) => {

                            const isActive = active === index

                            return (

                                <motion.div
                                    key={index}
                                    onMouseEnter={() => setActive(index)}
                                    className={`p-6 rounded-xl border transition cursor-pointer
${isActive
                                            ? "border-accent bg-white/5"
                                            : "border-white/10 hover:border-white/20"}
`}
                                    whileHover={{ scale: 1.02 }}
                                >

                                    <div className="flex items-start gap-4">

                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold
${isActive ? "bg-accent text-black" : "bg-white/10 text-white"}
`}>

                                            {index + 1}

                                        </div>

                                        <div>

                                            <h3 className="text-white font-bold text-lg font-body">

                                                {step.title}

                                            </h3>

                                            <p className="text-gray-400 text-sm mt-1 font-body">

                                                {step.desc}

                                            </p>

                                        </div>

                                    </div>

                                </motion.div>

                            )

                        })}

                    </div>

                </div>



                {/* RIGHT SIDE — DASHBOARD MOCKUP */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >

                    {/* glow background */}

                    <div className="absolute w-60 h-60 left-20 -inset-10 bg-secondary/20 blur-3xl rounded-full"></div>

                    {/* FLOATING GLASS CARDS */}

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-20 right-24 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 shadow-xl w-40 z-20"
                    >

                        <p className="text-xs text-gray-300">Client Gallery</p>

                        <p className="text-accent font-bold text-sm">
                            Emma & David
                        </p>

                    </motion.div>


                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="z-20 absolute -bottom-24 -left-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 shadow-xl w-36"
                    >

                        <p className="text-xs text-gray-300">
                            Gallery Views
                        </p>

                        <p className="text-accent font-bold text-lg">
                            +1.2K
                        </p>

                    </motion.div>


                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="z-20 absolute top-32 right-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 shadow-xl w-36"
                    >

                        <p className="text-xs text-gray-300">
                            Portfolio Create
                        </p>

                        <p className="text-accent font-bold text-lg">
                            +1k
                        </p>

                    </motion.div>

                    {/* dashboard frame */}

                    <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

                        {/* top bar */}

                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">

                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                            <div className="w-3 h-3 bg-secondary rounded-full"></div>

                        </div>


                        {/* dashboard content */}

                        <div className="p-6 space-y-4 bg-background">

                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-4"
                            >

                                {/* upload animation */}

                                {active === 1 && (

                                    <div className="space-y-4 bg-background">

                                        <p className="text-gray-400 text-sm">
                                            Uploading photos...
                                        </p>

                                        <div className="grid grid-cols-3 gap-2">


                                            {[0, 1, 2, 3, 4, 5].map((i) => (

                                                <motion.div
                                                    key={i}
                                                    initial={{
                                                        opacity: 0,
                                                        y: -40,
                                                        scale: 0.8
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        scale: 1
                                                    }}
                                                    transition={{
                                                        delay: i * 0.15,
                                                        type: "spring",
                                                        stiffness: 120
                                                    }}

                                                    className="aspect-square bg-background rounded"
                                                >
                                                    <img
                                                        src={uploadImages[i]}
                                                        className="w-full h-full object-cover rounded-3xl"
                                                        alt="Uploading pictures"
                                                    />

                                                </motion.div>

                                            ))}

                                        </div>

                                    </div>

                                )}


                                {/* gallery preview */}

                                {active === 2 && (

                                    <div className="space-y-4">

                                        {/* gallery header */}

                                        <div className="flex items-center justify-between">

                                            <p className="text-white text-sm font-semibold">
                                                Emma & David Wedding
                                            </p>

                                            <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">
                                                Private Gallery
                                            </span>

                                        </div>


                                        {/* photo grid */}

                                        <div className="grid grid-cols-3 gap-2 auto-rows-[80px]">

{[0,1,2,3,4,5].map((i)=>{

const layouts = [
"row-span-2 col-span-2",
"row-span-1 col-span-1",
"row-span-2 col-span-1",
"row-span-2 col-span-1",
"row-span-1 col-span-1",
"row-span-2 col-span-1"
]

return(

<motion.div
key={i}
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
transition={{delay:i*0.12}}
className={`overflow-hidden rounded-xl ${layouts[i]}`}
>

<div className="relative group">

<img
src={uploadImages[i]}
className="w-full h-full object-cover transition duration-500 hover:scale-110"
alt="Gallery"
/>

<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

</div>

</div>


</motion.div>

)

})}

</div>


                                        {/* share link */}

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2"
                                        >

                                            <p className="text-xs text-gray-400">
                                                focusframe.app/g/emma-david
                                            </p>

                                            <span className="text-accent text-xs font-semibold">
                                                Copy Link
                                            </span>

                                        </motion.div>


                                        {/* notification */}

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1 }}
                                            className="bg-accent/20 text-accent text-xs px-3 py-2 rounded-lg w-fit"
                                        >

                                            Gallery sent to client ✓

                                        </motion.div>

                                    </div>

                                )}




                                {/* sales card */}

                                {active === 3 && (

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">

                                        <p className="text-gray-400 text-sm">

                                            Print Sale

                                        </p>

                                        <p className="text-accent text-2xl font-bold">

                                            $120

                                        </p>

                                    </div>

                                )}


                                {/* portfolio layout */}

                                {active === 0 && (

                                    <div className="space-y-4">

                                        {/* portfolio header */}

                                        <div className="space-y-1">

                                            <div className="h-4 bg-white/10 rounded w-2/3"></div>
                                            <div className="h-3 bg-white/10 rounded w-1/3"></div>

                                        </div>


                                        {/* photo grid */}

                                        <div className="grid grid-cols-3 gap-2">

                                            {[po1, po2, po3, po4, po5, po6].map((img, i) => (

                                                <motion.img
                                                    key={i}
                                                    src={img}
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.9
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1
                                                    }}
                                                    transition={{
                                                        delay: i * 0.1
                                                    }}
                                                    className="aspect-square object-cover rounded"
                                                />

                                            ))}

                                        </div>

                                    </div>

                                )}

                            </motion.div>

                        </div>

                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 right-6 backdrop-blur-xl bg-secondary/10 border border-white/20 rounded-xl px-4 py-3 shadow-lg"
                >

                    <p className="text-accent text-sm font-body">

                        Gallery delivered

                    </p>

                </motion.div>

            </div>

        </section>

    )

}