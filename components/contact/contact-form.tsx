"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-secondary rounded-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
          <Calendar className="h-8 w-8 text-accent" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Thank You for Your Inquiry!
        </h3>
        <p className="text-muted-foreground mb-6">
          We have received your message and will get back to you within 24 hours. Our team is excited to help you plan your stay at Shri Vaibhav Hotels.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <div>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
        Make a Reservation
      </h2>
      <p className="text-muted-foreground mb-8">
        Fill out the form below and our team will get back to you within 24 hours to confirm your booking or answer any questions.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              className="bg-secondary border-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
              className="bg-secondary border-border"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="bg-secondary border-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              required
              className="bg-secondary border-border"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="checkIn">Check-in Date</Label>
            <Input
              id="checkIn"
              name="checkIn"
              type="date"
              required
              className="bg-secondary border-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="checkOut">Check-out Date</Label>
            <Input
              id="checkOut"
              name="checkOut"
              type="date"
              required
              className="bg-secondary border-border"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="roomType">Room Type</Label>
            <Select name="roomType" required>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="family-suite">Family Suite - ₹5,000/night</SelectItem>
                <SelectItem value="deluxe-king">Deluxe King Room - ₹7,000/night</SelectItem>
                <SelectItem value="executive-suite">Executive Suite - ₹9,000/night</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Select name="guests" required>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5+">5+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Special Requests</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Any special requests or questions?"
            rows={4}
            className="bg-secondary border-border resize-none"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Reservation Request"}
        </Button>
      </form>
    </div>
  )
}
