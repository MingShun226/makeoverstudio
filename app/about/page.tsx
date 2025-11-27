import React from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Makeover Studio',
  description: 'Meet our team of senior makeup artists with over 5 years of experience serving Kuala Lumpur and Selangor.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}