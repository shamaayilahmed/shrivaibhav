import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DiningHero } from "@/components/dining/dining-hero"
import { RestaurantSection } from "@/components/dining/restaurant-section"
import { BanquetSection } from "@/components/dining/banquet-section"
import { MenuHighlights } from "@/components/dining/menu-highlights"

export const metadata: Metadata = {
  title: "Dining | Shri Vaibhav Hotels",
  description: "Experience culinary excellence at Shri Vaibhav Hotels. From fine dining to our elegant banquet facilities, discover exceptional cuisine and hospitality.",
}

export default function DiningPage() {
  return (
    <>
      <Header />
      <main>
        <DiningHero />
        <RestaurantSection />
        <MenuHighlights />
        <BanquetSection />
      </main>
      <Footer />
    </>
  )
}
