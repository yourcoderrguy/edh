"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Calendar, Laptop, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ImpactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 📝 PASTE ALL 9+ TESTIMONIALS HERE
  const testimonials = [
    { 
      company: "Rehoboth Creative Hub", 
      quote: "EDH completely transformed how I structure my business. The practical knowledge and mentorship gave me the confidence to scale my operations sustainably.", 
      image: "/success/rehoboth.jpg" 
    },
    { 
      company: "P.FRESH MULTI-VENTURE", 
      quote: "The digital enterprise bootcamp opened my eyes to online marketing. By applying what I learned, my customer base and revenue have grown significantly.", 
      image: "/success/pfresh.jpg" 
    },
    { 
      company: "Travel With Convenience", 
      quote: "Thanks to the financial capability training at EDH, I was able to properly document my business finances and position my enterprise for long-term growth.", 
      image: "/success/travel.jpg" 
    },
    // Add the rest of your testimonials below using the exact same format:
    { 
      company: "Fourth Success Story", 
      quote: "Paste the fourth testimonial quote here. The slider will automatically adapt and create a new dot for it!", 
      image: "/success/placeholder4.jpg" 
    },
    { 
      company: "Fifth Success Story", 
      quote: "Paste the fifth testimonial quote here.", 
      image: "/success/placeholder5.jpg" 
    }
  ];

  // Auto-play the slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50/50">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-20">
        <span className="text-xs md:text-sm font-bold text-brand-green tracking-widest uppercase block mb-2 md:mb-3">
          Impact & Success Stories
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight">
          Transforming Ideas Into <br className="hidden md:block"/> Sustainable Nano Enterprises
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
          At EDH, our impact is measured by the entrepreneurs empowered, businesses created, skills developed, and communities transformed. We move participants beyond awareness to practical enterprise creation.
        </p>
      </div>

      {/* Flagship Initiatives */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="entrepreneurship-day">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-gold/20 text-brand-gold rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <Calendar className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Entrepreneurship Day Initiative</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
              Designed to expose students to entrepreneurship beyond classroom theories. Implemented across 2024, 2025, and 2026, the initiative provides opportunities to develop ideas, pitch products, and engage with real entrepreneurs.
            </p>
            <ul className="space-y-2 md:space-y-3">
              {['Develop business ideas', 'Present products and services', 'Practice business pitching'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-green shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="digital-bootcamp">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-green/10 text-brand-green rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <Laptop className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Digital Nano Enterprise Bootcamp</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
              Equips participants with entrepreneurship knowledge and digital capabilities required for modern enterprise development, ensuring businesses use technology to scale sustainably.
            </p>
            <ul className="space-y-2 md:space-y-3">
              {['Digital business development', 'Artificial Intelligence tools', 'Digital marketing & Financial literacy'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-green shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Testimonials Slider Section */}
      <div className="bg-brand-green-dark py-16 md:py-24 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Entrepreneurs We've Empowered</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">Real stories from the nano enterprise founders building the future of Africa's economy.</p>
          </div>
          
          <div className="relative">
            {/* The Slider Track */}
            <div className="overflow-hidden rounded-2xl md:rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((test, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2 md:px-4">
                    <div className="bg-white/10 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm text-center flex flex-col items-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-brand-green-dark bg-gray-200 mb-6 relative">
                        <Image src={test.image} alt={test.company} fill className="object-cover" />
                      </div>
                      <Quote className="text-brand-gold w-8 h-8 md:w-10 md:h-10 mb-6 opacity-50" />
                      <p className="text-gray-200 text-base md:text-xl md:leading-relaxed italic mb-8 max-w-2xl">"{test.quote}"</p>
                      <div>
                        <h4 className="font-bold text-white text-lg">{test.company}</h4>
                        <p className="text-brand-gold text-sm">EDH Alumnus</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows (Hidden on very small screens, visible on md and up) */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors text-white hidden sm:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors text-white hidden sm:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8 md:mt-10">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === idx ? "w-8 bg-brand-gold h-2" : "w-2 bg-white/30 h-2 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Stories of Transformation (Image Gallery) */}
      <div className="bg-white py-16 md:py-24 border-y border-gray-200" id="success-stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Gallery of Transformation</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Celebrating the entrepreneurs and participants who have successfully launched and sustained their nano enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((imgNumber) => (
              <div key={imgNumber} className="aspect-square bg-gray-100 rounded-lg md:rounded-xl overflow-hidden relative group">
                <Image 
                  src={`/gallery/${imgNumber}.jpg`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={`EDH Success Story ${imgNumber}`}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}