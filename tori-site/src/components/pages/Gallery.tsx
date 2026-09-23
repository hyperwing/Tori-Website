import { Link } from "react-router-dom"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Define the structure of your artwork metadata
interface Artwork {
    id: string
    title: string
    src: string
    medium: string
    year: string
    dimensions: string
    hasPrint: boolean
}

// Mock data: Replace 'src' with the actual filenames of the .webp 
// images you place in your public/ folder.
const ARTWORKS: Artwork[] = [
    {
        id: "1",
        title: "Midnight in Seattle",
        src: "/gallery_1.JPG",
        medium: "Silver Gelatin Print",
        year: "2025",
        dimensions: "16x20 in",
        hasPrint: true,
    },
    {
        id: "2",
        title: "Alpine Ascent",
        src: "/gallery-2.webp",
        medium: "Digital Photography",
        year: "2026",
        dimensions: "11x14 in",
        hasPrint: true,
    },
    {
        id: "3",
        title: "Urban Decay",
        src: "/gallery-3.webp",
        medium: "35mm Film",
        year: "2024",
        dimensions: "8x10 in",
        hasPrint: false,
    }
]

export default function Gallery() {
    return (
        <div className="w-full animate-in fade-in duration-700">
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                    Selected Works
                </h1>
                <p className="mt-4 text-lg text-zinc-500 max-w-2xl">
                    A collection of recent photography and physical prints. Click any image to view details and availability.
                </p>
            </div>

            {/* Masonry Grid Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                {ARTWORKS.map((art) => (
                    <div key={art.id} className="break-inside-avoid mb-6">
                        <Dialog>
                            {/* The Thumbnail */}
                            <DialogTrigger
                                render={
                                    <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
                                        <img
                                            src={art.src}
                                            alt={art.title}
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                            <span className="text-white font-medium tracking-wide drop-shadow-md">
                                                View Details
                                            </span>
                                        </div>
                                    </div>
                                }
                            />

                            {/* The Lightbox Modal */}
                            <DialogContent className="max-w-5xl overflow-hidden p-0 border-none bg-white dark:bg-zinc-950">
                                <div className="flex flex-col md:flex-row max-h-[90vh]">

                                    {/* Left Side: Full Image */}
                                    <div className="relative flex-1 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center overflow-hidden p-4 md:p-8">
                                        <img
                                            src={art.src}
                                            alt={art.title}
                                            className="w-full h-full object-contain max-h-[50vh] md:max-h-[85vh]"
                                        />
                                    </div>

                                    {/* Right Side: Metadata and Actions */}
                                    <div className="w-full md:w-96 p-6 md:p-8 flex flex-col justify-between">
                                        <div>
                                            <DialogHeader className="text-left">
                                                <DialogTitle className="text-3xl font-semibold tracking-tight">
                                                    {art.title}
                                                </DialogTitle>
                                                <DialogDescription className="mt-2 text-base text-zinc-500">
                                                    {art.medium}, {art.year}
                                                </DialogDescription>
                                            </DialogHeader>

                                            <div className="mt-8 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
                                                <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                                                    <span className="text-zinc-500">Dimensions</span>
                                                    <span className="font-medium">{art.dimensions}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                                                    <span className="text-zinc-500">Status</span>
                                                    <span className="font-medium">
                                                        {art.hasPrint ? "Prints Available" : "Archived"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Store Routing Logic */}
                                        {art.hasPrint && (
                                            <div className="mt-10">
                                                <Button  className="w-full h-12 text-base">
                                                    <Link to={`/store?item=${art.id}`}>
                                                        Purchase Custom Print
                                                    </Link>
                                                </Button>
                                                <p className="text-xs text-center text-zinc-500 mt-3">
                                                    Framed in handmade custom woodwork.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                ))}
            </div>
        </div>
    )
}