import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Timeless Elegance",
  "Unmatched Service",
  "Exquisite Experiences",
  "Exclusive Privacy",
  "Culinary Excellence",
  "Sustainable Luxury",
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src="/reception.webp"
                    alt="Hotel lobby"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src="/dining.webp"
                    alt="Hotel restaurant"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            {/* <span className="text-accent uppercase tracking-widest text-sm font-medium">
              About Us
            </span> */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Redefines luxury with world-class accommodations
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Spread across two elegant complexes, each thoughtfully designed to cater to your every need. Our commitment to excellence ensures that every moment of your stay is filled with comfort, elegance, and personalized service that exceeds expectations.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/rooms">Discover Our Rooms</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
