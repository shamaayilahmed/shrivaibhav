import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banquet.jpg"
          alt="Luxury hotel banquet"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to experience true luxury?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Book your stay at Shri Vaibhav Hotels and discover a world of elegance, comfort, and exceptional service that will make your visit truly memorable.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
          >
            <Link href="/contact">Book Your Stay</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 bg-transparent"
          >
            <Link href="/rooms">View All Rooms</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
