import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft, Heart, Download, X
} from "lucide-react"

export default function ViewGallery(){

  const { id } = useParams()
  const navigate = useNavigate()

  const [gallery, setGallery] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [favorites, setFavorites] = useState([])

  // 🔥 LOAD GALLERY
  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("galleries") || "[]")
    const found = saved.find(g => g.id === Number(id))
    if(found){
      setGallery(found)
      setFavorites(found.favorites || [])
    }
  }, [id])

  // 🔥 SAVE FAVORITES (ready backend)
  function toggleFavorite(photo){
    let updatedFavs

    if(favorites.includes(photo)){
      updatedFavs = favorites.filter(f => f !== photo)
    }else{
      updatedFavs = [...favorites, photo]
    }

    setFavorites(updatedFavs)

    // update localStorage
    const all = JSON.parse(localStorage.getItem("galleries") || "[]")
    const updated = all.map(g =>
      g.id === gallery.id ? { ...g, favorites: updatedFavs } : g
    )

    localStorage.setItem("galleries", JSON.stringify(updated))
  }

  // 🔥 DOWNLOAD
  function downloadImage(src){
    const link = document.createElement("a")
    link.href = src
    link.download = "photo.jpg"
    link.click()
  }

  if(!gallery) return null

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <button
          onClick={()=>navigate("/dashboard/gallery")}
          className="flex items-center gap-2 text-gray-400 hover:text-white"
        >
          <ArrowLeft size={18}/> Back
        </button>

        <h1 className="text-white font-bold text-xl">
          {gallery.name}
        </h1>

        <div className="text-gray-400 text-sm">
          {gallery.photos?.length || 0} photos
        </div>

      </div>

      {/* NETFLIX GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {gallery.photos?.map((photo, i)=>(
          <motion.div
            key={i}
            whileHover={{ scale:1.05 }}
            className="relative group cursor-pointer"
          >

            <img
              src={photo}
              className="w-full h-40 object-cover rounded-xl"
              onClick={()=>setSelectedImage(photo)}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-between items-start p-2 transition">

              <button
                onClick={()=>toggleFavorite(photo)}
                className={`p-1 rounded ${
                  favorites.includes(photo)
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                <Heart size={18}/>
              </button>

              <button
                onClick={()=>downloadImage(photo)}
                className="text-white"
              >
                <Download size={18}/>
              </button>

            </div>

          </motion.div>
        ))}

      </div>

      {/* 🔥 LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            onClick={()=>setSelectedImage(null)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={28}/>
          </button>

          <img
            src={selectedImage}
            className="max-h-[90%] max-w-[90%] rounded-xl"
          />

          {/* ACTIONS */}
          <div className="absolute bottom-10 flex gap-6">

            <button
              onClick={()=>toggleFavorite(selectedImage)}
              className={`p-3 rounded-full ${
                favorites.includes(selectedImage)
                  ? "bg-red-500"
                  : "bg-white/20"
              }`}
            >
              <Heart/>
            </button>

            <button
              onClick={()=>downloadImage(selectedImage)}
              className="p-3 bg-white/20 rounded-full"
            >
              <Download/>
            </button>

          </div>

        </div>
      )}

    </div>
  )
}