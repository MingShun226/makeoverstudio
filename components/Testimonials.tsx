import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase block mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">What Our Clients Say</h2>
          <p className="text-stone-500 font-light max-w-2xl mx-auto">
            Hear from brides and clients who trusted us with their special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-stone-50 p-8 md:p-10 relative">
              <Quote className="text-gold-400/20 mb-6" size={48} />
              <p className="text-stone-700 text-base mb-8 font-light leading-relaxed italic">
                {t.content}
              </p>
              <div className="flex items-center gap-4 border-t border-stone-200 pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif text-lg text-stone-900">{t.name}</h4>
                  <span className="text-xs text-stone-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
