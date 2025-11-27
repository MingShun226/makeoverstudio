import React from 'react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Makeover Studio',
  description: 'Book your appointment today. Door-to-door service available 24/7.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}