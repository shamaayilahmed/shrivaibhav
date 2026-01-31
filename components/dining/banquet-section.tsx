import Image from "next/image"
import Link from "next/link"
import { Users, Sparkles, Music, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Users,
    title: "Capacity",
    description: "Up to 500 guests for grand celebrations",
  },
  {
    icon: Sparkles,
    title: "Decor Services",
    description: "In-house decor team for stunning setups",
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Sound and lighting systems available",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Partner photographers for your event",
  },
]

export function BanquetSection() {
  return (
    <section id="banquet" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative lg:order-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/banquet.jpg"
                alt="Grand banquet hall"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="lg:order-1">
            <span className="text-accent uppercase tracking-widest text-sm font-medium">
              Events & Celebrations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Grand Banquet Hall
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Host your dream wedding, corporate event, or celebration in our magnificent banquet hall. With elegant decor, world-class catering, and impeccable service, we create unforgettable experiences for you and your guests.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Inquire About Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
