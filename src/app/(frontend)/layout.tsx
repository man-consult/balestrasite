import React from 'react'
import { Inter, Crimson_Pro } from 'next/font/google'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './styles.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'Balestra Group',
    template: '%s | Balestra Group',
  },
  description:
    'AI-powered business insights that provides continuous monitoring, pattern recognition, and implementation guidance.',
  metadataBase: new URL('https://balestra.group'),
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Balestra Group',
    title: 'Balestra Group',
    description:
      'AI-powered business insights that provides continuous monitoring, pattern recognition, and implementation guidance.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Balestra Group',
  image: 'https://balestra.group/header-logo.svg',
  url: 'https://balestra.group',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NZ',
  },
  description:
    'Precision-targeted procurement transformation through AI-powered continuous intelligence.',
  priceRange: '$$$',
  founder: {
    '@type': 'Person',
    name: 'Brian Mangano',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable} scroll-smooth`}>
      <body className="bg-balestra-black text-gray-200 font-sans antialiased selection:bg-balestra-red selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
