import { motion } from "framer-motion"

const features = [
    {
        name: "Portfolio Website",
        starter: true,
        pro: true,
        studio: true
    },
    {
        name: "Client Galleries",
        starter: true,
        pro: true,
        studio: true
    },
    {
        name: "Sell Prints",
        starter: false,
        pro: true,
        studio: true
    },
    {
        name: "Cloud Storage",
        starter: "5GB",
        pro: "50GB",
        studio: "200GB"
    },
    {
        name: "Team Members",
        starter: false,
        pro: false,
        studio: true
    }
]

export default function PricingComparison() {

    return (

        <section id="pricingComparison" className="py-16">

            <div className="max-w-5xl mx-auto px-6">

                <h3 className="gradient-text text-center text-3xl font-titre mb-12">

                    Compare Plans

                </h3>


                {/* DESKTOP TABLE */}

                <div className="hidden md:block overflow-hidden rounded-xl border border-white/10">

                    <table className="w-full text-sm">

                        <thead className="bg-white/5">

                            <tr>

                                <th className="p-4 text-left text-gray-400">Feature</th>
                                <th className="p-4 text-accent">Starter</th>
                                <th className="p-4 text-accent">Pro</th>
                                <th className="p-4 text-accent">Studio</th>

                            </tr>

                        </thead>

                        <tbody>

                            {features.map((feature, i) => (

                                <motion.tr
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border-t border-white/10"
                                >

                                    <td className="p-4 text-gray-300">
                                        {feature.name}
                                    </td>

                                    <td className="p-4 text-center text-gray-300">
                                        {feature.starter === true ? "✔" : feature.starter || "—"}
                                    </td>

                                    <td className="p-4 text-center text-gray-300">
                                        {feature.pro === true ? "✔" : feature.pro || "—"}
                                    </td>

                                    <td className="p-4 text-center text-gray-300">
                                        {feature.studio === true ? "✔" : feature.studio || "—"}
                                    </td>

                                </motion.tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                {/* MOBILE VERSION */}

                <div className="md:hidden space-y-4">

                    {features.map((feature, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-4"
                        >

                            <p className="text-white block font-semibold mb-3">
                                {feature.name}
                            </p>

                            <div className="flex justify-between text-sm text-white">

                                <span>Starter</span>
                                <span>{feature.starter === true ? "✔" : feature.starter || "—"}</span>

                            </div>

                            <div className="flex justify-between text-sm text-white">

                                <span>Pro</span>
                                <span>{feature.pro === true ? "✔" : feature.pro || "—"}</span>

                            </div>

                            <div className="flex justify-between text-sm text-white">

                                <span>Studio</span>
                                <span>{feature.studio === true ? "✔" : feature.studio || "—"}</span>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    )
}