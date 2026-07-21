"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Microscope, GraduationCap, TrendingUp, Laptop, Leaf, Handshake, BookOpen, Users, CheckCircle2 } from "lucide-react";

// --- CUSTOM ANIMATED COUNTER COMPONENT ---
// This handles the fast number counting animation when the user scrolls to the impact section
const AnimatedCounter = ({ end, suffix, label }: { end: number, suffix: string, label: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          // Calculate how fast to count based on the target number
          const duration = 2000; // 2 seconds
          const increment = end / (duration / 16); 
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={countRef}>
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-gold mb-1 md:mb-2 transition-all">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm md:text-base font-medium text-brand-green-100">{label}</div>
    </div>
  );
};
// -----------------------------------------


export default function HomePage() {
  const pillars = [
    { title: "Research & Innovation", icon: <Microscope className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Capacity Building", icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Enterprise Development", icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Digital Transformation", icon: <Laptop className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Sustainability", icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Partnerships", icon: <Handshake className="w-6 h-6 md:w-8 md:h-8" /> }
  ];

  const programmes = [
    "Nano Enterprise Academy",
    "Digital Nano Enterprise Bootcamp",
    "Youth Enterprise Programme",
    "Women Nano Enterprise Programme",
    "Enterprise Sustainability Programme"
  ];

  return (
    <main className="min-h-screen">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
          <Image 
            src="/hero.jpg" 
            alt="Entrepreneurs working" 
            fill 
            className="object-cover" 
            priority 
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight max-w-5xl mx-auto tracking-tight">
            Africa’s Centre for Nano Enterprise Development and Sustainability
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto px-2">
            Advancing sustainable enterprises through research, innovation, capacity building, and strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4 sm:px-0">
            <Link href="/academy" className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-colors text-base md:text-lg">
              Explore Programmes
            </Link>
            <Link href="/partnerships" className="w-full sm:w-auto bg-brand-gold hover:bg-yellow-500 text-gray-900 font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-colors text-base md:text-lg">
              Partner With EDH
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE */}
      <section className="py-12 md:py-24 bg-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs md:text-sm font-bold text-brand-green tracking-widest uppercase block mb-3 md:mb-4">Who We Are</span>
          <p className="text-lg sm:text-xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-6 md:mb-8">
            Entrepreneurship Development Hub (EDH) is a research-driven centre dedicated to empowering nano entrepreneurs through practical knowledge, digital innovation, enterprise development, and sustainability solutions.
          </p>
          <Link href="/about" className="inline-flex items-center text-brand-green font-bold text-base md:text-lg hover:underline gap-2">
            Learn More <ArrowRight size={18} className="md:w-5 md:h-5" />
          </Link>
        </div>
      </section>

      {/* SECTION 3: WHY NANO ENTERPRISE? */}
      <section className="py-12 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">Why Nano Enterprise?</h2>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-6">
            {['Nano Enterprises', 'Employment', 'Income', 'Community Dev.', 'Economic Shift'].map((step, idx, arr) => (
              <div key={idx} className="flex items-center gap-3 md:gap-6">
                <div className="bg-white px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-sm border border-brand-green/20 font-bold text-gray-800 text-sm md:text-lg whitespace-nowrap">
                  {step}
                </div>
                {idx !== arr.length - 1 && <ArrowRight className="text-brand-green hidden md:block" size={20} />}
                {idx !== arr.length - 1 && <ArrowRight className="text-brand-green block md:hidden rotate-90" size={16} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR STRATEGIC PILLARS */}
      {/* Changed to grid-cols-3 on mobile to save space, shrank icons and text */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 md:mb-16 text-center">Our Strategic Pillars</h2>
          <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:gap-10">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="text-center group flex flex-col items-center">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-gray-50 group-hover:bg-brand-green text-brand-green group-hover:text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 transition-colors shadow-sm border border-gray-100">
                  {pillar.icon}
                </div>
                <h3 className="text-xs sm:text-sm md:text-xl font-bold text-gray-900 leading-tight">{pillar.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED KNOWLEDGE PRODUCT */}
      <section className="py-16 md:py-24 bg-brand-green-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
              <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden relative shadow-2xl">
                <Image 
                  src="/book-cover-amazon.jpg" 
                  alt="Nano Business in Nigeria Book Cover" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover" 
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block">Featured Book</span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">Nano Business in Nigeria: Principles, Practices, and Prospects</h2>
              <div className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 space-y-1 md:space-y-2">
                <p><strong>Author:</strong> Dr. Abigael Adewuni Ogunwoye</p>
                <p><strong>Co-Author:</strong> Dr. Olubode Olusegun Oladele</p>
              </div>
              <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed">
                A practical entrepreneurship manual supporting nano business creation and sustainability.
              </p>
              <Link href="https://amazon.com.au/NANO-BUSINESS-NIGERIA-Entrepreneurship-Entrepreneurs-ebook/dp/B0H3D59W5X/ref" target="_blank" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-brand-gold hover:bg-yellow-500 text-gray-900 font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-colors text-base md:text-lg">
                <BookOpen size={20} /> Available on Amazon
              </Link> 
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR PROGRAMMES */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Our Programmes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {programmes.map((prog, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={28} className="text-brand-gold mb-4 md:mb-6" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{prog}</h3>
                <Link href="/academy" className="text-brand-green font-bold text-xs md:text-sm flex items-center gap-2 hover:underline">
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: IMPACT HIGHLIGHTS (WITH ANIMATED COUNTERS) */}
      <section className="py-16 md:py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 text-center">
            <AnimatedCounter end={500} suffix="+" label="Entrepreneurs Trained" />
            <AnimatedCounter end={20} suffix="+" label="Programmes Delivered" />
            <AnimatedCounter end={15} suffix="+" label="Institutions Engaged" />
            <AnimatedCounter end={300} suffix="+" label="Enterprises Supported" />
          </div>
        </div>
      </section>

      {/* SECTION 8: SUCCESS STORIES (IMAGE GALLERY) */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            {/* Reduced text size specifically to keep it on one line on most mobile devices */}
            <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight whitespace-nowrap sm:whitespace-normal">
              Success Stories & Impact
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">Real entrepreneurs. Real enterprises. Real impact.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
              <div key={img} className="aspect-square bg-gray-100 rounded-lg md:rounded-xl overflow-hidden relative">
                <Image 
                  src={`/gallery/${img}.jpg`} 
                  fill 
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  alt={`EDH Success Story ${img}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: PARTNERSHIP INVITATION */}
      <section className="py-16 md:py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Join EDH in building sustainable nano enterprises across Africa.
          </h2>
          <Link href="/partnerships" className="w-full sm:w-auto inline-block bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl transition-colors text-base md:text-lg shadow-lg">
            Partner With Us
          </Link>
        </div>
      </section>

    </main>
  );
}