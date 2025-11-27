import React from 'react';
import { SERVICE_CATEGORIES } from '../constants';
import { Plus } from 'lucide-react';

const ROMPage: React.FC = () => {
  const romCategory = SERVICE_CATEGORIES.find(cat => cat.id === 'rom');

  if (!romCategory) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-stone-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${romCategory.services[0]?.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <span className="text-white/90 text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Services</span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">{romCategory.title}</h1>
          <p className="text-white/90 text-lg max-w-2xl">{romCategory.description}</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase block mb-4">Packages</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">ROM & Solemnisation Packages</h2>
            <p className="text-stone-500 font-light max-w-2xl mx-auto">
              Perfect for your registration of marriage and intimate celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {romCategory.services.map((service) => (
              <div key={service.id} className="bg-stone-50 border border-stone-100 p-8 md:p-12 flex flex-col relative group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-gold-400 transition-colors duration-300"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold-500 mb-2 block">
                      {service.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif text-stone-900">{service.title}</h3>
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <div className="text-2xl md:text-3xl font-serif text-stone-900">{service.price}</div>
                    {service.secondaryPrice && (
                      <div className="text-sm md:text-base font-serif text-stone-500 italic mt-1">{service.secondaryPrice}</div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base text-stone-600 font-light group-hover:text-stone-900 transition-colors">
                      <span className="mr-4 mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {(service.addOns || service.notes) && (
                  <div className="border-t border-stone-200 pt-6 mt-auto">
                    {service.addOns?.map((addon, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm mb-3 text-stone-700 bg-white p-4 rounded-sm border border-stone-100 shadow-sm">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Plus size={14} className="text-gold-400 mr-2" />
                          <span className="font-medium tracking-wide">Add-on: {addon.title}</span>
                        </div>
                        <span className="font-serif italic text-gold-600">{addon.price}</span>
                      </div>
                    ))}

                    {service.notes && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {service.notes.map((note, idx) => (
                          <span key={idx} className="text-[10px] uppercase tracking-wider text-stone-400 border border-stone-200 px-3 py-1 rounded-full">
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase block mb-4">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Our ROM Work</h2>
            <p className="text-stone-500 font-light max-w-2xl mx-auto">
              Elegant and timeless looks for your special registration day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {romCategory.services.map((service, idx) => (
              <div key={idx} className="aspect-[3/4] overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ROMPage;
