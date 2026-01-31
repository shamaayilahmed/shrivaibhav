import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const _lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Shri Vaibhav Hotels - Where Heritage Meets Hospitality',
  description: 'Experience graceful living at Shri Vaibhav Hotels in Tiruchirappalli. Luxury accommodations, world-class dining, and exceptional service inspired by tradition.',
  keywords: 'luxury hotel, Tiruchirappalli, heritage hotel, accommodation, dining, banquet',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_playfair.variable} ${_lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
