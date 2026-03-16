import { motion } from "framer-motion"
import { Camera, Image, Lock, ShoppingCart } from "lucide-react"
import img4_no_background from "../../assets/images/img4-noBackground.png"

const features = [
  {
    icon: Camera,
    title: "Portfolio Builder",
    description: "Create a stunning photography portfolio in minutes."
  },
  {
    icon: Image,
    title: "Client Galleries",
    description: "Deliver photo galleries professionally to clients."
  },
  {
    icon: Lock,
    title: "Private Galleries",
    description: "Secure galleries with private links."
  },
  {
    icon: ShoppingCart,
    title: "Sell Photos",
    description: "Sell prints and digital photos online."
  }
]

export default function Features() {

  return (

    <section id="features" className="py-20 bg-background relative flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="font-titre text-4xl md:text-5xl text-white leading-tight">

            <span className="gradient-text block">
              Everything
            </span>

            photographers need

          </h2>

          <p className="text-gray-400 mt-6 text-lg font-body">

            Build your portfolio, deliver photos to clients,
            secure your galleries and sell your work —
            all in one powerful platform.

          </p>

          {/* FEATURES GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            {features.map((feature, index) => {

              const Icon = feature.icon

              return (

                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:border-accent hover:scale-[1.03] transition flex flex-col justify-between"
                >

                  <div>

                    <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-lg mb-4">

                      <Icon className="text-accent" size={22} />

                    </div>

                    <h3 className="text-white font-semibold font-body">

                      {feature.title}

                    </h3>

                    <p className="text-gray-400 text-sm mt-2">

                      {feature.description}

                    </p>

                  </div>

                  <a
                    href="#"
                    className="text-accent text-sm font-medium mt-6 group"
                  >

                    <span className="inline-block transition group-hover:translate-x-1">
                      Learn more →
                    </span>

                  </a>

                </div>

              )

            })}

          </div>

        </motion.div>


        {/* RIGHT SIDE IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center md:justify-end items-center"
        >

          {/* glow shapes */}

          <div className="absolute w-60 h-60 bg-secondary/30 blur-[120px] rounded-full left-20 top-20"></div>


          {/* floating card 1 */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 left-30 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl text-sm text-white"
          >

            1200+ photos delivered

          </motion.div>


          {/* floating card 2 */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="z-20 absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl text-sm text-white"
          >

            Private client gallery

          </motion.div>

          {/* floating card 3 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="z-20 absolute top-30 left-0 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl text-sm text-white"
          >

            Build your Portfolio

          </motion.div>
          {/* main image */}

          <img
            src={img4_no_background}
            alt="photographer"
            className="absolue right-0 z-10 w-[350px] md:w-[450px] object-center rounded-full"
          />

        </motion.div>

      </div>

    </section>

  )

}