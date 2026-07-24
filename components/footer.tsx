import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

const footerLinks = {
  explore: [
    { href: "/rooms", label: "Rooms" },
    // { href: "/dining", label: "Rooftop" },
    // { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ],
  services: [
    { href: "/dining", label: "Restaurant" },
    { href: "/dining#banquet", label: "Banquet Hall" },
    { href: "/rooms", label: "Business Center" },
    { href: "/contact", label: "Event Planning" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="color-logo font-serif text-2xl font-bold tracking-wide">
                Shri Vaibhav
              </span>
              <span className="color-logo text-xs tracking-[0.3em] uppercase opacity-70">
                Hotels
              </span>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Where heritage meets hospitality. Experience graceful living, inspired by tradition and delivered through heartfelt service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          {/* <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">
                  Tiruchirappalli, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 opacity-80" />
                <a
                  href="tel:+04312456789"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  0431 - 2456789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 opacity-80" />
                <a
                  href="mailto:info@shrivaibhav.co"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  info@shrivaibhav.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} Shri Vaibhav Hotels. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
