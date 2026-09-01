import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/webp/contact-booking-banner.webp"
          alt="Shri Vaibhav hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20">
        <span className="text-accent uppercase tracking-widest text-sm font-medium">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
          Contact & Booking
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Ready to experience true luxury? Reach out to us for reservations, inquiries, or to plan your special event.
        </p>
      </div>
    </section>
  )
}
