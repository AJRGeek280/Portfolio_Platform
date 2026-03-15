import { motion } from "framer-motion"
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import img4 from "../../assets/images/img4.jpg"
import img5 from "../../assets/images/img5.jpg"
import img6 from "../../assets/images/img6.jpg"
export default function PhotoColumns() {

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
    ]


    return (

        <div className="grid grid-cols-3 gap-6">

            {images.map((img, i) => (

                <motion.div
                    key={i}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className={`overflow-hidden rounded-[50px] ${i % 2 === 0 ? "h-50" : "h-40"
                        }`}
                >

                    <img
                        src={img}
                        className="w-full h-full object-cover"
                    />

                </motion.div>

            ))}

        </div>

    )

}