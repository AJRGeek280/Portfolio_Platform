export default function UploadFooterBar({ files }) {

    const ready = files.length > 0

    return (

        <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 p-4 flex justify-between items-center">

            <p className="text-gray-400 text-sm">
                {files.length} files selected
            </p>

            <div className="flex gap-3">

                <button className="px-4 py-2 bg-white/10 rounded">
                    Save Draft
                </button>

                <button
                    disabled={!ready}
                    className={`px-5 py-2 rounded text-black font-semibold
                        ${ready ? "bg-accent" : "bg-gray-500 cursor-not-allowed"}
                    `}
                >
                    Publish
                </button>

            </div>

        </div>
    )
}