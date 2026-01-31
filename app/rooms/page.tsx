import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RoomsHero } from "@/components/rooms/rooms-hero"
import { RoomsList } from "@/components/rooms/rooms-list"
import { AmenitiesSection } from "@/components/rooms/amenities-section"

export const metadata: Metadata = {
  title: "Rooms & Suites | Shri Vaibhav Hotels",
  description: "Discover our luxurious rooms and suites at Shri Vaibhav Hotels. From family suites to executive accommodations, find your perfect stay.",
}

export default function RoomsPage() {
  return (
    <>
      <Header />
      <main>
        <RoomsHero />
        <RoomsList />
        <AmenitiesSection />
      </main>
      <Footer />
    </>
  )
}
