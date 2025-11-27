import React, { Suspense } from 'react';
import Header from '../../components/Header';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Packages | Makeover Studio',
  description: 'Bridal makeup, ROM hairdo, and personal makeover packages in Klang Valley.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Services />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}