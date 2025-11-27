"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SERVICE_CATEGORIES } from '../constants';
import { CategoryId } from '../types';
import { ArrowRight, Plus } from 'lucide-react';

interface ServicesProps {
  preview?: boolean;
}

const Services: React.FC<ServicesProps> = ({ preview }) => {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('bridal');

  useEffect(() => {
    const categoryParam = searchParams.get('category') as CategoryId;
    if (categoryParam && SERVICE_CATEGORIES.some(c => c.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  const activeData = SERVICE_CATEGORIES.find(c => c.id === activeCategory) || SERVICE_CATEGORIES[0];

  return (
    <section className="py-16 md:py-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {preview ? (
          // Preview Layout (Home Page)
          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
              <div className="max-w-2xl">
                <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase block mb-4">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.1]">
                  Curated Beauty <br/> <span className="italic text-stone-400">Services.</span>
                </h2>
              </div>
              <Link 
                href="/services"
                className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gold-400 transition-all duration-300 mt-6 md:mt-0"
              >
                View All Packages <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {SERVICE_CATEGORIES.map((category) => {
                const coverImage = category.services[0]?.image;
                const startingPrice = category.services[0]?.price;

                return (
                  <Link 
                    key={category.id} 
                    href={`/services?category=${category.id}`}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="relative overflow-hidden aspect-[2/1] md:aspect-[4/5] mb-6 md:mb-8 bg-stone-100">
                      <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-all duration-500 z-10"></div>
                      <img 
                        src={coverImage} 
                        alt={category.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-sm">
                        View Details
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-baseline mb-2 md:mb-3">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gold-500">
                          Category 0{SERVICE_CATEGORIES.indexOf(category) + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-serif italic text-stone-900 mb-2 md:mb-3 group-hover:text-gold-500 transition-colors">
                        {category.title}
                      </h3>
                      
                      <p className="text-stone-500 font-light text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                        {category.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                         <span className="text-stone-900 font-serif italic text-lg">
                           From {startingPrice.split(' ')[0]} {startingPrice.split(' ')[1]}
                         </span>
                         <ArrowRight size={16} className="text-stone-300 group-hover:text-gold-400 transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 text-center md:hidden">
               <Link 
                  href="/services"
                  className="inline-block border border-stone-900 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors"
                >
                  View All Services
                </Link>
            </div>
          </>
        ) : (
          // Full Page Layout
          <>
            <div className="text-center mb-12 md:mb-20">
              <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase">Services</span>
              <h2 className="text-5xl md:text-7xl font-serif mt-4 text-stone-900 italic">Packages & Rates</h2>
              
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-12 mt-12 border-b border-stone-200">
                {SERVICE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-sm md:text-base font-serif italic pb-4 px-4 transition-all duration-300 relative ${
                      activeCategory === cat.id 
                        ? 'text-stone-900 border-b-2 border-gold-400' 
                        : 'text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up">
              <div className="text-center mb-16 max-w-2xl mx-auto px-4">
                <p className="text-stone-500 font-light leading-relaxed text-lg">{activeData.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {activeData.services.map((service) => (
                  <div key={service.id} className="bg-stone-50 border border-stone-100 p-8 md:p-12 flex flex-col relative group hover:shadow-xl transition-all duration-300 rounded-sm">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-gold-400 transition-colors duration-300"></div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gold-500 mb-2 block">
                          {service.subtitle}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-serif italic text-stone-900">{service.title}</h3>
                      </div>
                      <div className="mt-4 md:mt-0 text-left md:text-right">
                         <div className="text-2xl md:text-3xl font-serif text-stone-900">{service.price}</div>
                         {service.secondaryPrice && (
                           <div className="text-sm md:text-base font-serif text-stone-500 italic mt-1">{service.secondaryPrice}</div>
                         )}
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <ul className="space-y-4 mb-8 flex-grow">
                        {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm md:text-base text-stone-600 font-light group-hover:text-stone-900 transition-colors">
                                <span className="mr-4 mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" />
                                <span className="leading-relaxed">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Add Ons & Notes */}
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
          </>
        )}
      </div>
    </section>
  );
};

export default Services;