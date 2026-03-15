import { motion } from "framer-motion"
import { useState } from "react"

const plans = [
    {
        name: "Starter",
        priceMonthly: 9,
        priceYearly: 7,
        features: [
            "Portfolio Website",
            "5 Client Galleries",
            "5GB Cloud Storage",
            "Basic Analytics"
        ]
    },
    {
        name: "Pro",
        priceMonthly: 19,
        priceYearly: 15,
        popular: true,
        features: [
            "Unlimited Galleries",
            "50GB Cloud Storage",
            "Sell Prints & Downloads",
            "Advanced Analytics",
            "Custom Domain"
        ]
    },
    {
        name: "Studio",
        priceMonthly: 39,
        priceYearly: 32,
        features: [
            "Unlimited Everything",
            "200GB Cloud Storage",
            "Priority Support",
            "Advanced Store",
            "Team Members"
        ]
    }
]

export default function Pricing() {

    const [yearly, setYearly] = useState(false)

    return (

        <section id="pricing" className="py-20 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">


                {/* TITLE */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-4xl md:text-5xl font-titre text-white">

                        Simple pricing for

                        <span className="gradient-text block">
                            photographers
                        </span>

                    </h2>

                    <p className="text-gray-400 mt-6 text-lg">

                        Start free and upgrade when your business grows.

                    </p>

                </motion.div>


                {/* TOGGLE */}

                <div className="flex justify-center mb-16">

                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-4 py-2">

                        <span className={`${!yearly ? "text-white" : "text-gray-400"}`}>
                            Monthly
                        </span>

                        <button
                            onClick={() => setYearly(!yearly)}
                            className="w-12 h-6 bg-white rounded-full relative"
                        >

                            <motion.div
                                layout
                                className="w-5 h-5 bg-secondary rounded-full absolute top-0.5"
                                animate={{ x: yearly ? 24 : 2 }}
                            />

                        </button>

                        <span className={`${yearly ? "text-white" : "text-gray-400"}`}>
                            Yearly
                        </span>

                    </div>

                </div>


                {/* PRICING CARDS */}

                <div className="grid md:grid-cols-3 gap-8">

                    {plans.map((plan, index) => {

                        const price = yearly ? plan.priceYearly : plan.priceMonthly

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`group relative p-8 rounded-2xl backdrop-blur-xl border overflow-hidden
${plan.popular
                                        ? "border-accent bg-white/10 scale-105 shadow-[0_0_40px_rgba(255,150,0,0.25)]"
                                        : "border-white/10 bg-white/5"}
`}
                            >

                                {/* Glow hover effect */}

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-secondary/20 blur-3xl"></div>

                                </div>


                                {/* Popular glow */}

                                {plan.popular && (

                                    <motion.div
                                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="absolute inset-0 bg-secondary/10 blur-2xl"
                                    />

                                )}


                                {/* Popular badge */}

                                {plan.popular && (

                                    <div className="absolute top-0 left-11 -translate-x-1/2 bg-accent text-black text-xs px-3 py-1 rounded-br-lg font-semibold">

                                        Most Popular

                                    </div>

                                )}


                                <div className="relative space-y-6">

                                    <h3 className="text-white text-xl font-semibold">
                                        {plan.name}
                                    </h3>


                                    {/* PRICE */}

                                    <div className="flex items-end gap-1">

                                        <span className="text-4xl font-bold text-white">
                                            ${price}
                                        </span>

                                        <span className="text-gray-400 text-sm">
                                            /mo
                                        </span>

                                    </div>


                                    {/* FEATURES */}

                                    <ul className="space-y-3">

                                        {plan.features.map((feature, i) => (

                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-gray-300 text-sm"
                                            >

                                                <span className="text-accent">✔</span>

                                                {feature}

                                            </li>

                                        ))}

                                    </ul>


                                    {/* CTA */}

                                    <button className="w-full mt-6 bg-accent text-black py-2 rounded-lg font-semibold hover:scale-105 transition">

                                        Get Started

                                    </button>

                                </div>

                            </motion.div>

                        )

                    })}

                </div>

            </div>

        </section>

    )

}