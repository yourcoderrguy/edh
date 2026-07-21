"use client";

import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-16">
        <span className="text-xs md:text-sm font-bold text-brand-green tracking-widest uppercase block mb-2 md:mb-3">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
          Contact EDH
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Have a question about our programmes, research, or enterprise support services? Send us a message and our team will get back to you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Information Panel */}
          <div className="lg:w-1/3 bg-gray-900 text-white p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Contact Information</h3>
              <div className="space-y-6">
                
                <div className="flex items-start gap-3 md:gap-4">
                  <Mail className="text-brand-gold mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-base md:text-lg">Email</p>
                    <p className="text-sm md:text-base text-gray-400 break-all">ent.devhub@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <Phone className="text-brand-gold mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-base md:text-lg">Phone</p>
                    <p className="text-sm md:text-base text-gray-400">08117085419 <br/> 08136831209</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <MapPin className="text-brand-gold mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-base md:text-lg">Location</p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Aina Olaoluwa Building, Opposite SLOT, <br className="hidden md:block" /> 
                      Ogooluwa Area, Osogbo, <br className="hidden md:block" />
                      Osun State. Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <Clock className="text-brand-gold mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-base md:text-lg">Working Hours</p>
                    <p className="text-sm md:text-base text-gray-400">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-gray-800">
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Empowering Nano Enterprises. Transforming Communities. Building Sustainable Economies.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-6 md:p-10 lg:p-16">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Send us a Message</h3>
            <form className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 text-sm md:text-base focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 text-sm md:text-base focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 text-sm md:text-base focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="How can we help you?" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 text-sm md:text-base focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="Write your message here..."></textarea>
              </div>

              <button type="button" className="bg-brand-green text-white font-bold text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-xl hover:bg-brand-green-dark transition-colors flex items-center gap-2 w-full md:w-auto justify-center shadow-md">
                Send Message <Send size={18} className="md:w-5 md:h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}