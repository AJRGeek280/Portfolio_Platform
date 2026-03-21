import { Trash2 } from "lucide-react"
import { motion } from "framer-motion"

export default function UploadPreviewGrid({ files, removeFile }) {

    if (!files.length) return null

    return (

        <div className="grid md:grid-cols-3 gap-4">

            {files.map((f, i) => (

                <motion.div
                    key={f.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                >

                    <div className="relative">

                        <img
                            src={f.preview}
                            className="w-full h-40 object-cover"
                        />

                        <button
                            onClick={() => removeFile(f.id)}
                            className="absolute top-2 right-2 bg-black/50 p-1 rounded"
                        >
                            <Trash2 size={16} />
                        </button>

                    </div>

                    <div className="p-3">

                        <p className="text-white text-sm truncate">{f.name}</p>
                        <p className="text-gray-400 text-xs">{f.size}</p>

                        {/* progress */}
                        <div className="mt-2 h-1 bg-white/10 rounded">
                            <div
                                className="h-1 bg-accent rounded"
                                style={{ width: `${f.progress}%` }}
                            />
                        </div>

                    </div>

                </motion.div>

            ))}

        </div>
    )
}