import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import {
    Plus, Upload, Search,
    Eye, Edit, Trash2, Share2
} from "lucide-react"

export default function Gallery() {
    const navigate = useNavigate()

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All")

    const [galleries, setGalleries] = useState([])
    const [selectedGalleryId, setSelectedGalleryId] = useState(null)
    const [uploadProgress, setUploadProgress] = useState({})

    const fileInputRef = useRef(null)

    // 🔥 LOAD
    useEffect(() => {
        const loadGalleries = () => {
            const saved = localStorage.getItem("galleries")
            if (saved) setGalleries(JSON.parse(saved))
        }

        loadGalleries()
        window.addEventListener("focus", loadGalleries)

        return () => window.removeEventListener("focus", loadGalleries)
    }, [])

    // 🔥 SAVE
    useEffect(() => {
        if (galleries.length > 0) {
            localStorage.setItem("galleries", JSON.stringify(galleries))
        }

    }, [galleries])

    // 🔍 FILTER
    const filtered = galleries.filter(g =>
        g.name.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "All" || g.status === filter)
    )

    // ===== UPLOAD CLICK =====
    function handleUploadClick(galleryId) {
        setSelectedGalleryId(galleryId)
        fileInputRef.current.click()
    }

    // ===== HANDLE FILE SELECT =====
    function handleFileChange(e) {
        const files = Array.from(e.target.files)
        if (!files.length) return

        const newPhotos = files.map(file => URL.createObjectURL(file))

        // 🔥 FAKE PROGRESS (ready backend)
        let progress = 0
        const interval = setInterval(() => {
            progress += 10
            setUploadProgress(prev => ({
                ...prev,
                [selectedGalleryId]: progress
            }))

            if (progress >= 100) {
                clearInterval(interval)

                const updated = galleries.map(g =>
                    g.id === selectedGalleryId
                        ? { ...g, photos: [...(g.photos || []), ...newPhotos] }
                        : g
                )

                setGalleries(updated)

                setUploadProgress(prev => ({
                    ...prev,
                    [selectedGalleryId]: 0
                }))
            }
        }, 100)

        e.target.value = ""
    }

    // ===== DRAG & DROP =====
    function handleDrop(e, galleryId) {
        e.preventDefault()

        const files = Array.from(e.dataTransfer.files)
        if (!files.length) return

        const newPhotos = files.map(file => URL.createObjectURL(file))

        const updated = galleries.map(g =>
            g.id === galleryId
                ? { ...g, photos: [...(g.photos || []), ...newPhotos] }
                : g
        )

        setGalleries(updated)
    }

    // ===== SHARE GALLERY (ready backend) =====
    function handleShare(gallery) {
        if (gallery.status === "Private") {
            alert("This gallery is private")
            return
        }

        const url = 
        gallery.status === "Public"
        ? `${window.location.origin}/gallery/public/${gallery.share.token}`
        : `${window.location.origin}/gallery/client/${gallery.share.token}`
    
        navigator.clipboard.writeText(url)
        alert("Gallery link copied to clipboard!")
    }
        

    return (
        <div className="space-y-10">

            {/* INPUT HIDDEN */}
            <input
                type="file"
                multiple
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />

            {/* HEADER */}
            <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold text-white font-body flex justify-center">
                        Your Galleries
                    </h1>
                    <p className="text-gray-400 text-sm flex justify-center">
                        Manage and organize your photography collections
                    </p>
                </div>
            </div>

            {/* Btn CREATE GALLERY */}
            <div className="flex justify-center gap-3">

                    <button
                        onClick={() => navigate("create")}
                        className="flex items-center gap-2 bg-accent px-4 py-2 rounded-xl text-black font-bold hover:scale-105 transition"
                    >
                        <Plus size={18} /> Create Gallery
                    </button>

            </div>

            {/* SEARCH */}
            <div className="flex flex-col md:flex-row justify-between gap-4">

                <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-2 w-full md:w-80">
                    <Search size={16} className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search galleries..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-transparent outline-none text-white w-full text-sm"
                    />
                </div>

                <div className="flex gap-2 flex-wrap">
                    {["All", "Private", "Public", "Client"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-1 rounded-full text-sm transition
              ${filter === f
                                    ? "bg-accent text-black"
                                    : "bg-background border border-white/20 text-gray-300 hover:text-white"}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-6">

                {filtered.map((gallery, i) => (

                    <motion.div
                        key={gallery.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, gallery.id)}
                        className="group relative bg-background border border-white/10 rounded-2xl overflow-hidden hover:border-accent transition"
                    >

                        {/* IMAGE */}
                        <div className="relative overflow-hidden">

                            <img
                                src={gallery.cover}
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* STATUS */}
                            <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 text-white">
                                {gallery.status}
                            </span>

                            

                            {/* HOVER */}
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">

                                <button
                                    onClick={() => navigate(`${gallery.id}`)}
                                    className="p-4 bg-white/10 rounded-lg hover:bg-accent"
                                >
                                    <Eye size={18} />
                                </button>

                                <button className="p-4 bg-white/10 rounded-lg hover:bg-accent">
                                    <Edit size={18} />
                                </button>

                                <button
                                    onClick={() => handleUploadClick(gallery.id)}
                                    className="p-4 bg-white/10 rounded-lg hover:bg-accent"
                                >
                                    <Upload size={18} />
                                </button>

                            </div>

                            {/* 🔥 PROGRESS BAR */}
                            {uploadProgress[gallery.id] > 0 && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                                    <div
                                        className="h-full bg-accent transition-all"
                                        style={{ width: `${uploadProgress[gallery.id]}%` }}
                                    />
                                </div>
                            )}

                        </div>

                        {/* CONTENT */}
                        <div className="p-4">

                            <h3 className="text-white font-bold font-body">
                                {gallery.name}
                            </h3>

                            {
                                gallery.client && (
                                <p className="text-xs text-gray-500 mt-1">
                                    Token: {gallery.share.token}
                                </p>
                            )}

                            {
                                gallery.status === "Public" && (
                                <p className="text-xs text-gray-500 mt-1">
                                    Token: {gallery.share.token}
                                </p>
                            )}

                            <p className="text-gray-400 text-sm">
                                {gallery.photos?.length || 0} photos • {gallery.date || "Recently"}
                            </p>

                            <div className="flex justify-between mt-4 mx-12 text-gray-400">
                                {/* SHARE */}
                                <Share2 
                                size={16} 
                                className="hover:text-white cursor-pointer"
                                onClick={() => handleShare(gallery)} />

                                {/* DELETE */}
                                <Trash2 size={16} className="hover:text-red-400 cursor-pointer" />
                            </div>

                        </div>

                    </motion.div>

                ))}

            </div>

            {/* EMPTY */}
            {filtered.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                    <p className="mb-4">No galleries found</p>
                    <button
                        onClick={() => navigate("create")}
                        className="bg-accent px-5 py-2 rounded-lg text-black"
                    >
                        Create your first gallery
                    </button>
                </div>
            )}

        </div>
    )
}