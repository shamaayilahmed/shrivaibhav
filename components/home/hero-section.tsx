"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/webp/home-banner.webp"
          alt="Shri Vaibhav Hotels exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-card-foreground">
              Rated 4.9 of 5
            </span>
          </div> */}

          {/* Main Heading */}
          {/* <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            <span className="block">Where heritage</span>
            <span className="block">meets hospitality</span>
          </h1> */}

          {/* Description */}
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-xl">
            We invite you to experience graceful living, inspired by tradition and delivered through heartfelt service, refined spaces, and comforts designed for meaningful rest.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
            >
              <Link href="/contact">Check Availability</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 bg-transparent"
            >
              <Link href="/rooms">Explore Rooms</Link>
            </Button>
          </div> */}

          {/* Stats */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70">
              More than <span className="text-primary-foreground font-semibold">1,100+ guests</span> have experienced true luxury
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
