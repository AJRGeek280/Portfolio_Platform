import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Heart, Download, Check, Send
} from "lucide-react"

export default function ClientGallery() {

  const { token } = useParams()

  const [gallery, setGallery] = useState(null)
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)

  const [favorites, setFavorites] = useState([])
  const [approved, setApproved] = useState([])
  const [commentInput, setCommentInput] = useState({})

  // 🔥 LOAD GALLERY
  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("galleries") || "[]")

    const found = all.find(g => g.share?.token === token && g.status === "Client")

    if (found) {
      setGallery(found)
      setFavorites(found.favorites || [])
      setApproved(found.approvedPhotos || [])

      // 🔥 track view
      found.analytics.views += 1
      localStorage.setItem("galleries", JSON.stringify(all))
    }
  }, [token])

  // 🔐 LOGIN
  function handleLogin() {
    if (password === gallery.client.password) {
      setAuthenticated(true)
    } else {
      alert("Wrong password")
    }
  }

  // ❤️ FAVORITE
  function toggleFavorite(photo) {
    let updated

    if (favorites.includes(photo)) {
      updated = favorites.filter(p => p !== photo)
    } else {
      updated = [...favorites, photo]
    }

    setFavorites(updated)
    updateGallery({ favorites: updated, type: "like", photo })
  }

  // ✅ APPROVE
  function toggleApprove(photo) {
    let updated

    if (approved.includes(photo)) {
      updated = approved.filter(p => p !== photo)
    } else {
      updated = [...approved, photo]
    }

    setApproved(updated)
    updateGallery({ approvedPhotos: updated })
  }

  // 💬 COMMENT
  function addComment(photo) {
    const text = commentInput[photo]
    if (!text) return

    const comment = {
      photo,
      text,
      date: new Date(),
      user: "client"
    }

    updateGallery({
      addComment: comment
    })

    setCommentInput(prev => ({ ...prev, [photo]: "" }))
  }

  // ⬇️ DOWNLOAD
  function download(photo) {
    const link = document.createElement("a")
    link.href = photo
    link.download = "photo.jpg"
    link.click()

    updateGallery({
      type: "download",
      photo
    })
  }

  // 🔥 CORE UPDATE (BACKEND READY)
  function updateGallery(action) {

    const all = JSON.parse(localStorage.getItem("galleries") || "[]")

    const updated = all.map(g => {

      if (g.id !== gallery.id) return g

      // favorites
      if (action.favorites) g.favorites = action.favorites

      // approved
      if (action.approvedPhotos) g.approvedPhotos = action.approvedPhotos

      // comments
      if (action.addComment) {
        g.comments = g.comments || []
        g.comments.push(action.addComment)
      }

      // analytics
      if (action.type) {
        g.analytics[action.type + "s"]++

        g.analytics.interactions.push({
          type: action.type,
          photo: action.photo,
          date: new Date(),
          user: "client"
        })
      }

      return g
    })

    localStorage.setItem("galleries", JSON.stringify(updated))
  }

  // 🔐 LOGIN SCREEN
  if (!authenticated) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white space-y-4">
        <h1 className="text-2xl font-bold">Client Access</h1>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="px-4 py-2 rounded bg-white/10 border border-white/20"
        />

        <button
          onClick={handleLogin}
          className="bg-accent px-6 py-2 rounded text-black"
        >
          Access Gallery
        </button>
      </div>
    )
  }

  if (!gallery) return null

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-white text-2xl font-bold">
        {gallery.name}
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {gallery.photos.map((photo, i) => (

          <motion.div key={i} className="relative group">

            <img
              src={photo}
              className="rounded-xl object-cover h-40 w-full"
            />

            {/* ACTIONS */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-2 transition">

              {/* TOP */}
              <div className="flex justify-between">

                <button onClick={()=>toggleFavorite(photo)}>
                  <Heart className={favorites.includes(photo) ? "text-red-500" : "text-white"}/>
                </button>

                <button onClick={()=>download(photo)}>
                  <Download className="text-white"/>
                </button>

              </div>

              {/* BOTTOM */}
              <div className="flex justify-between items-center">

                <button onClick={()=>toggleApprove(photo)}>
                  <Check className={approved.includes(photo) ? "text-green-500" : "text-white"}/>
                </button>

              </div>

            </div>

            {/* COMMENT */}
            <div className="mt-1 flex gap-1">
              <input
                value={commentInput[photo] || ""}
                onChange={(e)=>setCommentInput(prev => ({
                  ...prev,
                  [photo]: e.target.value
                }))}
                placeholder="Comment..."
                className="w-full text-xs px-2 py-1 bg-white/10 border border-white/20 text-white rounded"
              />
              <button onClick={()=>addComment(photo)}>
                <Send size={14}/>
              </button>
            </div>

          </motion.div>

        ))}

      </div>

      {/* APPROVE BUTTON GLOBAL */}
      <button
        onClick={()=>alert("Photos approved (ready backend)")}
        className="bg-green-500 px-6 py-2 rounded text-white"
      >
        Approve Selection
      </button>

    </div>
  )
}