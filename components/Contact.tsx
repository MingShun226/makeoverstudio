import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section className="py-24 bg-white min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Info */}
          <div>
            <span className="text-xs font-bold text-gold-400 tracking-[0.25em] uppercase">Contact Us</span>
            <h2 className="text-5xl font-serif mt-4 mb-8 text-stone-900 italic leading-tight">Get A Quote</h2>
            
            <div className="text-stone-600 font-light text-lg leading-relaxed space-y-6 mb-12">
                <p>
                    If you have any inquiries about our services, rates, or available dates, please feel free to contact us through Whatsapp chat.
                </p>
                <p>
                    Our team will respond as soon as possible to assist you.
                </p>
                <p className="font-serif italic text-2xl text-stone-900 pt-4">Thank you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-light text-sm tracking-wide text-stone-600">
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest text-stone-900 mb-4">Coverage</h4>
                <p>Door-to-door service available across<br />Klang Valley & throughout Malaysia.</p>
              </div>
              
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest text-stone-900 mb-4">Availability</h4>
                <p>Appointments accepted 24/7.<br />Booking required.</p>
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div className="bg-stone-50 p-10 md:p-14 border border-stone-100 shadow-xl shadow-stone-200/50 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 bg-gold-400/10 rounded-full flex items-center justify-center mb-8 text-gold-500">
                <MessageCircle size={32} />
            </div>
            <h3 className="text-3xl font-serif italic text-stone-900 mb-4">Chat with us</h3>
            <p className="text-stone-500 font-light mb-8 max-w-sm">
                The fastest way to reach us. Click below to start a conversation about your makeover needs.
            </p>
            <button 
                onClick={handleWhatsApp}
                className="w-full md:w-auto bg-[#25D366] text-white px-10 py-5 text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
                <MessageCircle size={18} />
                Whatsapp Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;