import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { MapSection } from "@/components/contact/map-section"

export const metadata: Metadata = {
  title: "Contact & Booking | Shri Vaibhav Hotels",
  description: "Contact Shri Vaibhav Hotels for reservations, inquiries, and event bookings. We're here to help you plan your perfect stay.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
