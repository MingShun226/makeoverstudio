import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services preview />
        <About preview />
      </main>
      <Footer />
    </div>
  );
}