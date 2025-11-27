"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-105"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/id/250/1920/1200")',
        }}
      >
        {/* Darker Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-white/90 text-[10px] md:text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in-up font-light">
            Available Across Klang Valley & Malaysia
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 animate-fade-in-up delay-100 leading-none italic">
            Makeover Studio
          </h1>
          <p className="text-stone-100 text-base md:text-xl font-light max-w-xl mx-auto mb-12 animate-fade-in-up delay-200 leading-relaxed font-sans px-4">
            Your one-stop solution for beauty needs. Extensive makeover and hairdo services exclusively by professional makeup artists.
          </p>
          
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-md md:max-w-none px-6">
            <button 
              onClick={handleWhatsApp}
              className="bg-gold-500 text-white border-2 border-gold-500 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-gold-500 hover:border-white transition-all duration-300 min-w-[220px] shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              Whatsapp Us
            </button>
            <Link 
              href="/services"
              className="bg-white text-stone-900 border-2 border-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-stone-200 hover:border-stone-200 transition-all duration-300 min-w-[220px] shadow-lg flex items-center justify-center"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;