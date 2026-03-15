import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import FloatinShapes from '../UI/FloatingShapes'

const faqData = [
    {
        question: "Can I create a photography portfolio in minutes?",
        answer: "Yes. Our portfolio builder allows photographers to create a beautiful website in less than 10 minutes without coding."
    },
    {
        question: "Can I deliver private galleries to clients?",
        answer: "Absolutely. Each gallery can be protected with a private link or password so only your clients can access their photos."
    },
    {
        question: "Can I sell my photos online?",
        answer: "Yes. Photographers can sell prints and digital downloads directly from their galleries with secure payments."
    },
    {
        question: "How much storage do I get?",
        answer: "Storage depends on your plan. Starter includes 5GB, Pro includes 50GB and Studio includes 200GB of storage."
    },
    {
        question: "Do clients need an account to view galleries?",
        answer: "No. Clients simply open the private link you send them and can instantly view or download their photos."
    },
    {
        question: "Can I use my own domain?",
        answer: "Yes. Pro and Studio plans allow you to connect a custom domain to your portfolio website."
    }
]

export default function FAQ() {

    const [open, setOpen] = useState(null)
    const [search, setSearch] = useState("")

    // Recherche intelligente (question + réponse)
    const filteredFAQ = faqData.filter(f =>
        f.question.toLowerCase().includes(search.toLowerCase()) ||
        f.answer.toLowerCase().includes(search.toLowerCase())
    )

    // Highlight du texte recherché
    const highlight = (text) => {
        if (!search) return text

        const regex = new RegExp(`(${search})`, "gi")

        return text.split(regex).map((part, i) =>
            regex.test(part)
                ? <span key={i} className="text-accent font-semibold">{part}</span>
                : part
        )
    }

    return (

        <section id="faq" className="py-20">

            <div className="max-w-4xl mx-auto px-6">

                {/* TITLE */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-titre text-white">

                        Frequently Asked

                        <span className="gradient-text block">
                            Questions
                        </span>

                    </h2>

                    <p className="text-gray-400 mt-4">
                        Everything photographers need to know.
                    </p>

                </div>


                {/* SEARCH BAR */}

                <div className="relative mb-12">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search a question..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition"
                    />

                </div>


                {/* FAQ LIST */}

                <div className="space-y-4">

                    {filteredFAQ.length === 0 && (

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center text-gray-400"
                        >

                            No results found.

                        </motion.p>

                    )}


                    {filteredFAQ.map((faq, index) => {

                        const isOpen = open === index

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.01 }}
                                className="bg-white/5 border border-white/10 hover:border-accent backdrop-blur-xl rounded-xl overflow-hidden transition"
                            >

                                <button
                                    onClick={() => setOpen(isOpen ? null : index)}
                                    className="w-full flex justify-between items-center p-5 text-left"
                                >

                                    <span className="text-white font-medium">

                                        {highlight(faq.question)}

                                    </span>

                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                    >

                                        <ChevronDown size={20} className="text-gray-400" />

                                    </motion.div>

                                </button>


                                <AnimatePresence>

                                    {isOpen && (

                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-5 pb-5 text-gray-300 text-sm leading-relaxed"
                                        >

                                            {highlight(faq.answer)}

                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </motion.div>

                        )

                    })}

                </div>

            </div>

        </section>

    )
}