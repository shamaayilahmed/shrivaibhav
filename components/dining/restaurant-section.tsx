import Image from "next/image"
import { Clock, MapPin, Phone } from "lucide-react"

export function RestaurantSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-accent uppercase tracking-widest text-sm font-medium">
              Fine Dining
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              The Grand Restaurant
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our signature restaurant offers an unforgettable dining experience with a menu that celebrates both traditional South Indian cuisine and international favorites. Each dish is crafted with passion using the freshest ingredients sourced locally and globally.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The elegant ambiance, attentive service, and exquisite presentation make every meal at The Grand Restaurant a celebration of culinary artistry.
            </p>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Breakfast: 7:00 AM - 10:30 AM | Lunch: 12:30 PM - 3:00 PM | Dinner: 7:00 PM - 11:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Ground Floor, Main Building</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Reservations</p>
                  <p className="text-sm text-muted-foreground">0431 - 2456789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="/images/restaurant.jpg"
                    alt="Restaurant interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="/images/cuisine.jpg"
                    alt="Gourmet cuisine"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
