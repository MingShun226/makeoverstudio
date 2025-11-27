import React from 'react';
import Link from 'next/link';
import { TEAM } from '../constants';

interface AboutProps {
  preview?: boolean;
}

const About: React.FC<AboutProps> = ({ preview }) => {
  return (
    <section className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold-400/30 hidden md:block"></div>
            <img 
              src="https://picsum.photos/id/129/600/800" 
              alt="Studio Interior" 
              className="w-full h-[600px] object-cover relative z-10 shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase block mb-4">Welcome</span>
            <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-8 italic leading-tight">
              One-stop makeup <br/>service.
            </h2>
            <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
              <p>
                We provide one-stop makeup service and can accept appointments 24/7. Our professional makeup artists have more than 5 years of service experience and can provide you with professional skills to ensure you transform into a fresh and radiant version of yourself.
              </p>
              <p>
                We are not only based in Kuala Lumpur & Selangor; we also provide door-to-door makeup and hairdo services across Klang Valley & throughout Malaysia. Our artists take what you want and offer their experience, advice, and technical skill.
              </p>
            </div>
            {preview && (
               <Link 
               href="/about"
               className="mt-10 inline-block border-b border-stone-900 pb-1 text-xs uppercase tracking-widest hover:text-gold-400 hover:border-gold-400 transition-colors"
             >
               Meet the Team
             </Link>
            )}
          </div>
        </div>

        {/* Team Section - Only shown if not in preview mode */}
        {!preview && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h3 className="text-4xl font-serif italic text-stone-900 mb-4">The Artists</h3>
              <p className="text-stone-500 font-light">Dedicated professionals with over 5 years of experience.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {TEAM.map((member) => (
                <div key={member.id} className="group">
                  <div className="overflow-hidden mb-6 aspect-[3/4] relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h4 className="text-2xl font-serif italic mb-1">{member.name}</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold-400 mb-4">{member.role}</p>
                  <p className="text-stone-600 font-light leading-relaxed max-w-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;