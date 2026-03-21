import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Heart, Download } from "lucide-react"

export default function PublicGallery() {

  const { token } = useParams()
  const [gallery, setGallery] = useState(null)

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("galleries") || "[]")

    const found = all.find(g => g.share?.token === token && g.status === "Public")

    if (found) {
      // 🔥 TRACK VIEW
      found.analytics.views += 1

      localStorage.setItem("galleries", JSON.stringify(all))
      setGallery(found)
    }
  }, [token])

  // 🔥 READY BACKEND - TRACK LIKE
  function likePhoto(photo) {
    const all = JSON.parse(localStorage.getItem("galleries") || "[]")

    const updated = all.map(g => {
      if (g.id === gallery.id) {

        g.analytics.likes += 1

        g.analytics.interactions.push({
          type: "like",
          photo,
          date: new Date()
        })

        return g
      }
      return g
    })

    localStorage.setItem("galleries", JSON.stringify(updated))
  }

  // 🔥 READY BACKEND - TRACK DOWNLOAD
  function downloadPhoto(photo) {
    const link = document.createElement("a")
    link.href = photo
    link.download = "photo.jpg"
    link.click()

    const all = JSON.parse(localStorage.getItem("galleries") || "[]")

    const updated = all.map(g => {
      if (g.id === gallery.id) {

        g.analytics.downloads += 1

        g.analytics.interactions.push({
          type: "download",
          photo,
          date: new Date()
        })

        return g
      }
      return g
    })

    localStorage.setItem("galleries", JSON.stringify(updated))
  }

  if (!gallery) return <div className="text-white p-10">Not found</div>

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-white text-2xl font-bold">{gallery.name}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {gallery.photos.map((photo, i) => (
          <div key={i} className="relative group">

            <img src={photo} className="rounded-lg"/>

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-between p-2">

              <button onClick={() => likePhoto(photo)}>
                <Heart className="text-white"/>
              </button>

              <button onClick={() => downloadPhoto(photo)}>
                <Download className="text-white"/>
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}