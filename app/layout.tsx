import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Makeover Studio | Professional Makeup Artist Malaysia',
  description: 'Premier makeup and hairdo services in Klang Valley and throughout Malaysia. We offer bridal makeup, ROM styling, and personal makeovers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
        
        {/* Tailwind CDN for runtime styling */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    sans: ['Lato', 'sans-serif'],
                    serif: ['Playfair Display', 'serif'],
                  },
                  colors: {
                    gold: {
                      300: '#E5C568',
                      400: '#D4AF37',
                      500: '#B08D28',
                    },
                    stone: {
                      50: '#FAF9F6', // Alabaster
                      100: '#F5F5F0',
                      200: '#E6E6E1',
                      800: '#2C2C2A',
                      900: '#1C1C1C',
                    }
                  },
                  animation: {
                    'fade-in': 'fadeIn 1s ease-out',
                    'fade-in-up': 'fadeInUp 1s ease-out forwards',
                  },
                  keyframes: {
                    fadeIn: {
                      '0%': { opacity: '0' },
                      '100%': { opacity: '1' },
                    },
                    fadeInUp: {
                      '0%': { opacity: '0', transform: 'translateY(20px)' },
                      '100%': { opacity: '1', transform: 'translateY(0)' },
                    }
                  }
                }
              }
            }
          `
        }} />
        
        {/* Schema.org SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Makeover Studio",
            "image": "https://picsum.photos/id/338/600/800",
            "telephone": "+60123456789",
            "email": "hello@makeoverstudio.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kuala Lumpur",
              "addressRegion": "Wilayah Persekutuan",
              "addressCountry": "MY"
            },
            "areaServed": ["Klang Valley", "Malaysia"],
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            ]
          })
        }} />
      </head>
      <body className="antialiased bg-stone-50 text-stone-900 selection:bg-gold-200 selection:text-black">
        {children}
      </body>
    </html>
  );
}