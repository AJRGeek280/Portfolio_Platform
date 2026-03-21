import { UploadCloud } from "lucide-react"
import { useRef } from "react"

export default function UploadDropzone({ onFiles }) {

    const inputRef = useRef()

    const handleDrop = (e) => {
        e.preventDefault()
        onFiles(e.dataTransfer.files)
    }

    return (

        <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="border-2 border-dashed border-white/10 rounded-2xl p-10 text-center bg-white/5 hover:border-accent transition cursor-pointer"
            onClick={() => inputRef.current.click()}
        >

            <UploadCloud className="mx-auto mb-4 text-accent" size={40} />

            <p className="text-white font-semibold">
                Drag & Drop your photos
            </p>

            <p className="text-gray-400 text-sm">
                or click to browse files
            </p>

            <input
                type="file"
                multiple
                hidden
                ref={inputRef}
                onChange={(e) => onFiles(e.target.files)}
            />

        </div>
    )
}