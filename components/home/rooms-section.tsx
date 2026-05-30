import Image from "next/image"
import Link from "next/link"
import { Bed, Tv, Snowflake, Wine, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const rooms = [
  {
    id: 1,
    name: "Executive",
    description: "Premium suite designed for business professionals, offering a blend of luxury and functionality.",
    image: "/images/family-suite.jpg",
    price: 5250,
    badge: "Family",
    amenities: ["King-sized", "Smart TV", "Cold AC", "Minibar"],
  },
  {
    id: 2,
    name: "Signature",
    description: "Elegant room with a king-sized bed and city views, ideal for business travelers or couples.",
    image: "/images/deluxe-room.jpg",
    price: 6000,
    badge: "Deluxe",
    amenities: ["King-sized", "Smart TV", "Cold AC", "Minibar"],
  },
  // {
  //   id: 3,
  //   name: "Family Room",
  //   description: "Spacious family-friendly suite with two bedrooms and a living area, perfect for a family vacation.",
  //   image: "/images/executive-suite.jpg",
  //   price: 9999,
  //   badge: "Business",
  //   amenities: ["King-sized", "Smart TV", "Cold AC", "Minibar"],
  // },
]

const amenityIcons: Record<string, typeof Bed> = {
  "King-sized": Bed,
  "Smart TV": Tv,
  "Cold AC": Snowflake,
  "Minibar": Wine,
}

export function RoomsSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium">
            Our Rooms
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Unique stay to comfort your needs
          </h2>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {room.badge}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {room.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || Bed
                    return (
                      <div
                        key={amenity}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{amenity}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Price and CTA */}
                <div className="flex items-end justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-2xl font-bold text-foreground">
                        ₹{room.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground">/ night</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/contact">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/rooms">View All Rooms</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
