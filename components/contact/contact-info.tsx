import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    // content: ["Shri Vaibhav Hotels", "Tiruchirappalli", "Tamil Nadu, India 620001"],
    content: ["Major Saravanan Rd", "next to Courtyard Marriott", "SBI Officers Colony", "Raja Colony", "Tiruchirappalli", "Tamil Nadu 620001"]
  },
  {
    icon: Phone,
    title: "Phone",
    content: ["0431 - 2456789", "0431 - 2456789"],
    href: ["tel:+04312456789", "tel:+04312456789"],
  },
  {
    icon: Mail,
    title: "Email",
    content: ["reservations@shrivaibhav.co", "feedback@shrivaibhav.co"],
    href: ["mailto:reservations@shrivaibhav.co", "mailto:feedback@shrivaibhav.co"],
  },
  {
    icon: Clock,
    title: "Front Desk",
    content: ["24 hours, 7 days a week", "Check-in: 12:00 PM", "Check-out: 10:00 AM"],
  },
]

export function ContactInfo() {
  return (
    <div className="bg-secondary rounded-xl p-8">
      <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
        Contact Information
      </h3>

      <div className="space-y-6">
        {contactDetails.map((detail) => {
          const Icon = detail.icon
          return (
            <div key={detail.title} className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg flex-shrink-0">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{detail.title}</h4>
                {detail.content.map((line, index) => (
                  detail.href && detail.href[index] ? (
                    <a
                      key={line}
                      href={detail.href[index]}
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  )
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Links */}
      <div className="mt-8 pt-8 border-t border-border">
        <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
        <div className="space-y-2">
          <a
            href="tel:04312456789"
            className="block w-full text-center py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Call to Book
          </a>
          <a
            href="https://wa.me/04312456789"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 bg-card text-foreground border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  )
}
