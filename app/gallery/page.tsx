import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery | Shri Vaibhav Hotels",
  description: "Explore our luxury hotel through our photo gallery. View our elegant rooms, fine dining, banquet halls, and world-class amenities.",
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
    </>
  )
}
