import { useState, useRef } from "react"
import {
    ArrowLeft, Trash2, Upload, Check,
    ChevronDown, Lock
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { Listbox } from "@headlessui/react"

export default function CreateGallery() {

    const options = ["Private", "Public", "Client"]

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("Private")

    // CLIENT
    const [clientName, setClientName] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [clientPassword, setClientPassword] = useState("")

    const [coverPreview, setCoverPreview] = useState(null)
    const [photosPreview, setPhotosPreview] = useState([])

    const coverRef = useRef(null)
    const photosRef = useRef(null)

    const coverInputRef = useRef(null)
    const photosInputRef = useRef(null)

    // ====== COVER ======
    function handleCoverUpload(e) {
        const file = e.target.files[0]
        if (file) {
            setCoverPreview(URL.createObjectURL(file))
        }
    }

    function handleCoverDrop(e) {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        if (file) {
            setCoverPreview(URL.createObjectURL(file))
        }
    }

    // ====== PHOTOS ======
    function handlePhotosUpload(e) {
        const files = Array.from(e.target.files)
        if (files.length) {
            setPhotosPreview(prev => [...prev, ...files.map(f => URL.createObjectURL(f))])
        }
    }

    function handlePhotosDrop(e) {
        e.preventDefault()
        const files = Array.from(e.dataTransfer.files)
        if (files.length) {
            setPhotosPreview(prev => [...prev, ...files.map(f => URL.createObjectURL(f))])
        }
    }

    function handleRemovePhoto(index) {
        setPhotosPreview(prev => prev.filter((_, i) => i !== index))
    }

    // Generate TOKEN (Pret pour Backend)
    function generateToken() {
        return Math.random().toString(36).substring(2) + Date.now()
    }

    // ====== SUBMIT ======
    function handleSubmit(e) {
        e.preventDefault()

        if (!name || !coverPreview) {
            toast.error("Gallery name and cover image are required")
            return
        }

        if (description.length > 100) {
            toast.error("Gallery description have most than 100 character")
            return
        }

        if (status === "Client") {
            if (!clientName || !clientPassword) {
                toast.error("Client info required !")
                return
            }
        }

        const newGallery = {
            id: Date.now(),
            name,
            description,
            status,
            cover: coverPreview,
            photos: photosPreview,
            date: new Date().toLocaleDateString(),


            // SHARE SYSTEM
            share: {
                token: Math.random().toString(36).substring(2) + Date.now(),
                enabled: status !== "Private"
            },

            // CLIENT MODE
            client: status === "Client" ? {
                name: clientName,
                email: clientEmail,
                password: clientPassword, // Backend -> hash password
                // token: generateToken()
            }: null,

            // ANALYTICS (READY BACKEND)
            analytics: {
                views: 0,
                downloads: 0,
                likes: 0,
                interactions: []
                // { type: "like" | "download", photo, date, user }
            },

            favorites: [],
            approved: false,

            comments: [],
            approvedPhotos: []
        }

        const existing = JSON.parse(localStorage.getItem("galleries") || "[]")
        
        localStorage.setItem("galleries", JSON.stringify([...existing, newGallery]))

        toast.success("Gallery created successfully")
        navigate("/dashboard/gallery")
    }

    return (
        <div className="space-y-8 p-4">

            {/* BACK */}
            <button
                onClick={() => navigate("/dashboard/gallery")}
                className="flex items-center gap-2 text-gray-400 hover:text-white mb-6"
            >
                <ArrowLeft size={18} /> Back to Galleries
            </button>

            {/* TITLE */}
            <div>
                <h1 className="text-3xl font-body font-bold text-white">Create New Gallery</h1>
                <p className="text-gray-400 text-sm">Configure your gallery and upload photos</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

                {/* INFO */}
                <div className="space-y-8">
                    <input
                        type="text"
                        placeholder="Gallery Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 text-white"
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 text-white"
                    />

                    <Listbox value={status} onChange={setStatus}>
                        <div className="relative">
                            <Listbox.Button className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 text-white flex justify-between items-center focus:border-white">
                                {status}
                                <ChevronDown size={18} />
                            </Listbox.Button>

                            <Listbox.Options className="absolute mt-2 w-full bg-black border border-white/20 rounded-lg shadow-lg z-10">
                                {options.map((option) => (
                                    <Listbox.Option
                                        key={option}
                                        value={option}
                                        className={({ active }) =>
                                            `cursor-pointer px-4 py-2 flex justify-between ${active ? "bg-white/10" : ""
                                            }`
                                        }
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span>{option}</span>
                                                {selected && <Check size={16} />}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </div>
                    </Listbox>

                    {/* CLIENT INPUT */}
                    {status === "Client" && (
                        <div className="space-y-4 border border-white/10 p-4 rounded-xl">

                            <h3 className="text-white font-body text-xl font-bold flex items-center gap-2">
                                <Lock size={16} /> Client Access
                            </h3>

                            <input
                                type="text"
                                placeholder="Client Name"
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 text-white"
                            />

                            <input
                                type="email"
                                placeholder="Client Email"
                                value={clientEmail}
                                onChange={(e) => setClientEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 text-white"
                            />

                            <input
                                type="password"
                                placeholder="Access Password"
                                value={clientPassword}
                                onChange={(e) => setClientPassword(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 text-white"
                            />

                        </div>
                    )}
                </div>

                {/* COVER */}
                <div
                    ref={coverRef}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleCoverDrop}
                    onClick={(e) => {
                        if (e.target.tagName !== "BUTTON") {
                            coverInputRef.current?.click()
                        }
                    }}
                    className="border-2 border-dashed border-white/30 p-6 rounded-lg text-center cursor-pointer hover:border-accent relative"
                >

                    <input
                        ref={coverInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleCoverUpload}
                        className="hidden"
                    />

                    {!coverPreview ? (
                        <>
                            <Upload className="mx-auto mb-2" />
                            <p>Drag & drop cover or click</p>
                        </>
                    ) : (
                        <>
                            <img src={coverPreview} className="w-64 h-40 object-cover mx-auto rounded-lg" />

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setCoverPreview(null)

                                    if (coverInputRef.current) {
                                        coverInputRef.current.value = ""
                                    }
                                }}
                                className="absolute top-2 right-2 bg-black/60 p-2 rounded-full"
                            >
                                <Trash2 size={16} />
                            </button>
                        </>
                    )}
                </div>

                {/* PHOTOS */}
                <div
                    ref={photosRef}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handlePhotosDrop}
                    onClick={(e) => {
                        if (
                            e.target.tagName !== "IMG" &&
                            e.target.tagName !== "BUTTON"
                        ) {
                            photosInputRef.current?.click()
                        }
                    }}
                    className="border-2 border-dashed border-white/30 p-6 rounded-lg text-center cursor-pointer hover:border-accent"
                >
                    <input
                        ref={photosInputRef}
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handlePhotosUpload}
                        className="hidden"
                    />

                    <p>Drag & drop photos</p>

                    {photosPreview.length > 0 && (
                        <div className="grid grid-cols-4 gap-2 mt-4">
                            {photosPreview.map((p, i) => (
                                <motion.div key={i} className="relative">
                                    <img src={p} className="w-full h-24 object-cover rounded" />

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleRemovePhoto(i)
                                        }}
                                        className="absolute top-1 right-1 bg-black/50 p-1 rounded-full"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* SUBMIT */}
                <button
                    type="submit"
                    disabled={!name || !coverPreview}
                    className={`w-full py-3 rounded-lg font-bold ${name && coverPreview
                        ? "bg-accent text-black hover:scale-105"
                        : "bg-white/20 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Create Gallery
                </button>

            </form>
        </div>
    )
}