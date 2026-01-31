"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Are there activities for children at the resort?",
    answer: "Yes, we have a dedicated kids' club with fun and educational activities for children of all ages, as well as family-friendly amenities like child care services, family pools, and guided nature tours designed for young guests.",
  },
  {
    question: "What dining options are available at the resort?",
    answer: "Our resort features multiple dining options, including a fine dining restaurant, casual poolside lounges, and in-room dining. We offer a variety of international cuisines and locally inspired dishes, all curated by our team of renowned chefs.",
  },
  {
    question: "Can I host a wedding or event at the resort?",
    answer: "Absolutely! We specialize in hosting luxurious weddings and private events. Our experienced events team will assist with everything from planning the decor and menu to coordinating with local vendors and ensuring every detail is perfect for your special day.",
  },
  {
    question: "Are there activities and excursions available at the resort?",
    answer: "Yes, we offer a wide range of activities and excursions, from water sports like snorkeling, scuba diving, and kayaking to land-based activities such as guided hikes, golf, and cultural tours. We also provide private experiences, including yacht charters and sunset cruises.",
  },
  {
    question: "Can I request early check-in or late check-out?",
    answer: "We offer early check-in and late check-out options based on availability. Please contact our front desk or concierge team in advance to arrange these services, or request during your booking for the best chance of availability.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-accent uppercase tracking-widest text-sm font-medium">
              FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Find answers to common questions about our hotel, services, and amenities. Can&apos;t find what you&apos;re looking for? Contact our concierge team anytime.
            </p>
          </div>

          {/* Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
