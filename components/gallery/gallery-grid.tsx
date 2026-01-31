"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms" },
  { id: "dining", label: "Dining" },
  { id: "amenities", label: "Amenities" },
  { id: "events", label: "Events" },
]

const galleryImages = [
  { id: 1, src: "/images/hero-hotel.jpg", alt: "Hotel exterior", category: "amenities" },
  { id: 2, src: "/images/lobby.jpg", alt: "Hotel lobby", category: "amenities" },
  { id: 3, src: "/images/family-suite.jpg", alt: "Family suite", category: "rooms" },
  { id: 4, src: "/images/deluxe-room.jpg", alt: "Deluxe king room", category: "rooms" },
  { id: 5, src: "/images/executive-suite.jpg", alt: "Executive suite", category: "rooms" },
  { id: 6, src: "/images/restaurant.jpg", alt: "Restaurant", category: "dining" },
  { id: 7, src: "/images/cuisine.jpg", alt: "Gourmet cuisine", category: "dining" },
  { id: 8, src: "/images/bar-lounge.jpg", alt: "Bar lounge", category: "dining" },
  { id: 9, src: "/images/banquet.jpg", alt: "Banquet hall", category: "events" },
  { id: 10, src: "/images/pool.jpg", alt: "Swimming pool", category: "amenities" },
  { id: 11, src: "/images/spa.jpg", alt: "Spa", category: "amenities" },
  { id: 12, src: "/images/gym.jpg", alt: "Fitness center", category: "amenities" },
  { id: 13, src: "/images/bathroom.jpg", alt: "Luxury bathroom", category: "rooms" },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:bg-secondary"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index % 5 === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary-foreground font-medium text-sm bg-foreground/50 px-4 py-2 rounded-full">
                    View
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <div
              className="relative max-w-5xl w-full aspect-[16/10]"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground text-center">
              {selectedImage.alt}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
