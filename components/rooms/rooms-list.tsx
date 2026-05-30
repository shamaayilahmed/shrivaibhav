import Image from "next/image"
import Link from "next/link"
import { Bed, Tv, Snowflake, Wine, Wifi, Bath, Coffee, Users, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const rooms = [
  {
    id: 1,
    name: "Executive",
    image: "/images/family-suite.jpg",
    description: "Premium suite designed for business professionals, offering a blend of luxury and functionality. Features a separate work area with high-speed internet and a relaxing lounge space for unwinding after meetings.",
    price: 5250,
    badge: "Family",
    // size: "650 sq ft",
    guests: 2,
    extra: 1,
    amenities: ["King-sized Bed", "Smart TV", "Cold AC", "Minibar", "Free WiFi", "Room Service"],
    features: ["Two separate bedrooms", "Living area with sofa", "City view balcony", "24-hour room service"],
  },
  {
    id: 2,
    name: "Signature",
    description: "Elegant room with a king-sized bed and city views, ideal for business travelers or couples seeking comfort and style. Designed with modern amenities and sophisticated decor for a memorable stay.",
    image: "/images/deluxe-room.jpg",
    price: 6000,
    badge: "Deluxe",
    // size: "450 sq ft",
    guests: 2,
    extra: 1,
    amenities: ["King-sized Bed", "Smart TV", "Cold AC", "Minibar", "Free WiFi", "Rainfall Shower"],
    features: ["Panoramic city views", "Work desk with ergonomic chair", "Marble bathroom", "Premium bedding"],
  },
  // {
  //   id: 3,
  //   name: "Family Room",
  //   description: "Spacious family-friendly suite with two bedrooms and a living area, perfect for a family vacation. Features separate sleeping quarters for parents and children with a comfortable common area for quality family time.",
  //   image: "/images/executive-suite.jpg",
  //   price: 9999,
  //   badge: "Business",
  //   size: "800 sq ft",
  //   guests: 5,
  //   amenities: ["King-sized Bed", "Smart TV", "Cold AC", "Minibar", "Free WiFi", "Espresso Machine"],
  //   features: ["Dedicated office space", "Conference call setup", "Premium lounge access", "Butler service"],
  // },
]

const amenityIcons: Record<string, typeof Bed> = {
  "King-sized Bed": Bed,
  "Smart TV": Tv,
  "Cold AC": Snowflake,
  "Minibar": Wine,
  "Free WiFi": Wifi,
  "Room Service": Coffee,
  "Rainfall Shower": Bath,
  "Espresso Machine": Coffee,
}

export function RoomsList() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {room.badge}
                  </Badge>
                </div>
                {/* Decorative Element */}
                <div className={`absolute -bottom-4 ${index % 2 === 1 ? "-left-4" : "-right-4"} w-32 h-32 bg-accent/10 rounded-xl -z-10`} />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {room.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Room Details */}
                <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-accent" />
                    <span className="text-sm text-foreground">{room.guests} guests + {room.extra} extra (Chargeable)</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">{room.size}</span>
                  </div> */}
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Room Amenities</h4>
                  <div className="flex flex-wrap gap-3">
                    {room.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity] || Wifi
                      return (
                        <div
                          key={amenity}
                          className="flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full text-sm text-foreground"
                        >
                          <Icon className="h-4 w-4 text-accent" />
                          {amenity}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-3xl font-bold text-foreground">
                        ₹{room.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">/ night</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/contact">
                      Book This Room
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
