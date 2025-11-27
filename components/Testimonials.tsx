import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-studio-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Quote className="mx-auto text-gold-400 mb-6" size={40} />
          <h2 className="text-3xl md:text-5xl font-serif">Client Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="text-center">
              <p className="text-gray-300 text-lg italic mb-8 font-light leading-relaxed">"{t.content}"</p>
              <div className="flex flex-col items-center">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-400 mb-4"
                />
                <h4 className="font-serif text-xl">{t.name}</h4>
                <span className="text-xs uppercase tracking-widest text-gold-400 mt-1">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
