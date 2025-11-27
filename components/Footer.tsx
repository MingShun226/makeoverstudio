import React from 'react';
import Link from 'next/link';
import { SERVICE_CATEGORIES, WHATSAPP_LINK, CONTACT_INFO } from '../constants';
import { Instagram, Facebook, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 border-t border-stone-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-white italic">Makeover Studio</h2>
            <p className="text-sm leading-relaxed font-light">
              Premier beauty styling services in Malaysia. We bring out your natural elegance with professional care and artistic expertise.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Our Services</h3>
            <ul className="space-y-4">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    href={`/services?category=${cat.id}`}
                    className="text-sm font-light hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                   href="/gallery"
                   className="text-sm font-light hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                   <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                   Portfolio Showcase
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Studio</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm font-light hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm font-light hover:text-gold-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm font-light hover:text-gold-400 transition-colors">Contact</Link></li>
              <li>
                 <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-sm font-light hover:text-gold-400 transition-colors">
                    Book Appointment
                 </a>
              </li>
              <li>
                 <a href="#" className="text-sm font-light hover:text-gold-400 transition-colors">
                    Privacy Policy
                 </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Contact Us</h3>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span>
                  {CONTACT_INFO.address}<br/>
                  <span className="text-stone-500">{CONTACT_INFO.area}</span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-gold-500 flex-shrink-0" />
                <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={18} className="text-gold-500 flex-shrink-0" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-600">
          <p>&copy; {new Date().getFullYear()} Makeover Studio. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;