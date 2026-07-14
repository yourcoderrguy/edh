"use client";

import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-sm font-bold text-brand-green tracking-widest uppercase block mb-3">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Contact EDH
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question about our programmes, research, or enterprise support services? Send us a message and our team will get back to you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Information Panel */}
          <div className="lg:w-1/3 bg-gray-900 text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-brand-gold mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-gray-400">partnerships@entrepreneurshipdevhub.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-gold mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-lg">Location</p>
                    <p className="text-gray-400">Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-brand-gold mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-lg">Working Hours</p>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                Empowering Nano Enterprises. Transforming Communities. Building Sustainable Economies.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-10 md:p-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="How can we help you?" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="Write your message here..."></textarea>
              </div>

              <button type="button" className="bg-brand-green text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-brand-green-dark transition-colors flex items-center gap-2 w-full md:w-auto justify-center">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}