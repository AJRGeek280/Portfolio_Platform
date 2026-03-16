import { motion } from "framer-motion"
import { Mail, MessageCircle, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
    }

    return (

        <section id="contact" className="py-20">

            <div className="max-w-6xl mx-auto px-6">

                {/* TITLE */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-titre text-white">

                        Need Help?

                        <span className="gradient-text block">
                            Contact Us
                        </span>

                    </h2>

                    <p className="text-gray-400 mt-4">
                        Our team is here to help photographers succeed.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* CONTACT INFO */}

                    <div className="space-y-6">

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex justify-start items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-xl hover:border-accent"
                        >

                            <Mail className="text-accent" size={24} />

                            <div>

                                <p className="flex text-white font-medium">
                                    Email Support
                                </p>

                                <p className="text-gray-400 text-sm">
                                    support@focusframe.photo
                                </p>

                            </div>

                        </motion.div>


                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex justify-start items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-xl hover:border-accent"
                        >

                            <MessageCircle className="text-accent" size={24} />

                            <div>

                                <p className="flex text-white font-medium">
                                    Live Chat
                                </p>

                                <p className="text-gray-400 text-sm">
                                    Available 24/7
                                </p>

                            </div>

                        </motion.div>

                    </div>


                    {/* CONTACT FORM */}

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-2xl space-y-5"
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition"
                        />

                        <textarea
                            name="message"
                            placeholder="Your message"
                            rows="4"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition"
                        />


                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 bg-accent text-black font-semibold px-6 py-3 rounded-xl w-full"
                        >

                            Send Message

                            <Send size={18} />

                        </motion.button>

                    </motion.form>

                </div>

            </div>

        </section>

    )
}