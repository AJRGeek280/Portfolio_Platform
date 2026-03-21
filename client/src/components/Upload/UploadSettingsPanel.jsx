export default function UploadSettingsPanel() {

    return (

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 sticky top-6">

            <h3 className="text-white font-bold">Settings</h3>

            {/* Gallery */}
            <div>
                <label className="text-gray-400 text-sm">Gallery</label>
                <select className="w-full mt-1 bg-black/30 border border-white/10 p-2 rounded text-white">
                    <option>Wedding</option>
                    <option>Portfolio</option>
                </select>
            </div>

            {/* Visibility */}
            <div>
                <label className="text-gray-400 text-sm">Visibility</label>
                <select className="w-full mt-1 bg-black/30 border border-white/10 p-2 rounded text-white">
                    <option>Public</option>
                    <option>Private</option>
                </select>
            </div>

            {/* Price */}
            <div>
                <label className="text-gray-400 text-sm">Price</label>
                <input
                    type="number"
                    placeholder="$"
                    className="w-full mt-1 bg-black/30 border border-white/10 p-2 rounded text-white"
                />
            </div>

            {/* Tags */}
            <div>
                <label className="text-gray-400 text-sm">Tags</label>
                <input
                    placeholder="wedding, portrait..."
                    className="w-full mt-1 bg-black/30 border border-white/10 p-2 rounded text-white"
                />
            </div>

        </div>
    )
}