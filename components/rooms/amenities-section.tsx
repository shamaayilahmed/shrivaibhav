import { Wifi, Car, Coffee, Utensils, Dumbbell, ShieldCheck, Clock, Sparkles } from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet access throughout the hotel",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Secure valet parking service available 24/7",
  },
  // {
  //   icon: Coffee,
  //   title: "In-Room Dining",
  //   description: "24-hour room service with an extensive menu",
  // },
  // {
  //   icon: Utensils,
  //   title: "Fine Dining",
  //   description: "World-class restaurant serving international cuisine",
  // },
  // {
  //   icon: Dumbbell,
  //   title: "Fitness Center",
  //   description: "State-of-the-art gym with personal trainers",
  // },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Round-the-clock security for your peace of mind",
  },
  // {
  //   icon: Clock,
  //   title: "Concierge",
  //   description: "Dedicated concierge service for all your needs",
  // },
  {
    icon: Sparkles,
    title: "Housekeeping",
    description: "Daily housekeeping with turndown service",
  },
]

export function AmenitiesSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium">
            Hotel Amenities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Premium services for your comfort
          </h2>
          <p className="text-muted-foreground">
            Every aspect of your stay has been carefully considered to ensure maximum comfort and convenience.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => {
            const Icon = amenity.icon
            return (
              <div
                key={amenity.title}
                className="bg-card rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
