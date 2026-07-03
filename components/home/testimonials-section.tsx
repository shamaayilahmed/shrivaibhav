"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    title: "A truly luxurious experience.",
    content: "Shri Vaibhav Hotel exceeded all my expectations. From the moment I walked in, the service was impeccable, and the ambiance was pure elegance. The room was spacious, with breathtaking views, and every detail screamed luxury, from the fine linens to the state-of-the-art amenities. The staff went above and beyond to ensure I felt pampered throughout my stay. It's hands down the best hotel experience I've ever had, and I look forward to returning.",
    author: "Bruce Mitchell",
    role: "Travel Blogger",
  },
  {
    id: 2,
    title: "An oasis of tranquility and elegance.",
    content: "Shri Vaibhav Hotel provided the perfect escape from my busy life. The atmosphere is serene, and every space within the hotel is designed with sophistication. My suite was spacious, the bed was like sleeping on a cloud, and the private balcony had stunning views of the city. The staff were incredibly professional and discreet, making sure every need was met. I've stayed at many luxury hotels, but Shri Vaibhav Hotel truly stands out for its elegance and personalized service.",
    author: "Sandiago Martin",
    role: "Interior Designer",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium">
            Guest Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Read our real testimonial services
          </h2>
          <p className="text-muted-foreground">
            Our guests enjoy more than just a stay — they indulge in a true escape. Here&apos;s what our distinguished guests have to say.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12">
              <Quote className="h-16 w-16 text-accent/20" />
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                &ldquo;{current.title}&rdquo;
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                &ldquo;{current.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                {/* <div>
                  <h4 className="font-semibold text-foreground">{current.author}</h4>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                </div> */}

                {/* Navigation */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="h-10 w-10 rounded-full border-border bg-transparent"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="h-10 w-10 rounded-full border-border bg-transparent"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
