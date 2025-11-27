import React from 'react';
import Header from '../../components/Header';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Gallery | Makeover Studio',
  description: 'Our portfolio of bridal portraits, editorial makeup, and styling works.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}