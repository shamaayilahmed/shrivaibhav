import Image from "next/image"

export function GalleryHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lobby.jpg"
          alt="Shri Vaibhav hotel lobby"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20">
        <span className="text-accent uppercase tracking-widest text-sm font-medium">
          Visual Tour
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
          Photo Gallery
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Take a visual journey through our elegant spaces, from luxurious rooms to world-class amenities.
        </p>
      </div>
    </section>
  )
}
