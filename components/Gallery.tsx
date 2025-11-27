import React from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-serif mt-4 text-stone-900 italic">Selected Works</h2>
          <p className="mt-6 text-stone-500 font-light max-w-2xl mx-auto">
            A visual diary of our recent editorial, bridal, and commercial projects.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY.map((item) => (
            <div key={item.id} className="group relative break-inside-avoid">
              <div className="overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-auto object-cover transition-filter duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                <span className="text-gold-400 text-[10px] tracking-[0.2em] uppercase mb-1">{item.category}</span>
                <span className="text-white font-serif text-xl italic">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-stone-400 text-sm font-light italic mb-4">Follow our daily stories</p>
            <a href="#" className="text-stone-900 text-xs font-bold uppercase tracking-widest hover:text-gold-400 transition-colors">
                @MakeoverStudio
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;