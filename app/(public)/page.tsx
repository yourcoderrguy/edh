"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Microscope, GraduationCap, TrendingUp, Laptop, Leaf, Handshake, BookOpen, Users, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const pillars = [
    { title: "Research & Innovation", icon: <Microscope size={32} /> },
    { title: "Capacity Building", icon: <GraduationCap size={32} /> },
    { title: "Enterprise Development", icon: <TrendingUp size={32} /> },
    { title: "Digital Transformation", icon: <Laptop size={32} /> },
    { title: "Sustainability", icon: <Leaf size={32} /> },
    { title: "Partnerships", icon: <Handshake size={32} /> }
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
      <section className="relative h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {/* Replace with one of her training/entrepreneur images */}
          <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
          <Image src="/hero-bg.jpg" alt="Entrepreneurs working" fill className="object-cover" priority />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-5xl mx-auto">
            Africa’s Centre for Nano Enterprise Development and Sustainability
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Advancing sustainable enterprises through research, innovation, capacity building, and strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/academy" className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg">
              Explore Programmes
            </Link>
            <Link href="/partnerships" className="bg-brand-gold hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl transition-colors text-lg">
              Partner With EDH
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE */}
      <section className="py-24 bg-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm font-bold text-brand-green tracking-widest uppercase block mb-4">Who We Are</span>
          <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
            Entrepreneurship Development Hub (EDH) is a research-driven centre dedicated to empowering nano entrepreneurs through practical knowledge, digital innovation, enterprise development, and sustainability solutions.
          </p>
          <Link href="/about" className="inline-flex items-center text-brand-green font-bold text-lg hover:underline gap-2">
            Learn More <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* SECTION 3: WHY NANO ENTERPRISE? */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Nano Enterprise?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {['Nano Enterprises', 'Employment', 'Income', 'Community Development', 'Economic Transformation'].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-brand-green/20 font-bold text-gray-800 text-lg">
                  {step}
                </div>
                {idx !== arr.length - 1 && <ArrowRight className="text-brand-green rotate-90 md:rotate-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR STRATEGIC PILLARS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Our Strategic Pillars</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-gray-50 group-hover:bg-brand-green text-brand-green group-hover:text-white rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors shadow-sm border border-gray-100">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED KNOWLEDGE PRODUCT */}
      <section className="py-24 bg-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden relative shadow-2xl">
                {/* Upload 'book-cover.jpg' to public folder */}
                <Image src="/book-cover.png" alt="Nano Business in Nigeria Book Cover" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:w-2/3">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Featured Book</span>
              <h2 className="text-4xl font-bold mb-4 leading-tight">Nano Business in Nigeria: Principles, Practices, and Prospects</h2>
              <div className="text-lg text-gray-300 mb-8 space-y-2">
                <p><strong>Author:</strong> Dr. Abigael Adewuni Ogunwoye</p>
                <p><strong>Co-Author:</strong> Dr. Olubode Olusegun Oladele</p>
              </div>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                A practical entrepreneurship manual supporting nano business creation and sustainability.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 bg-brand-gold hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl transition-colors text-lg">
                <BookOpen size={20} /> Available on Amazon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR PROGRAMMES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((prog, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={32} className="text-brand-gold mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{prog}</h3>
                <Link href="/academy" className="text-brand-green font-bold text-sm flex items-center gap-2 hover:underline">
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: IMPACT HIGHLIGHTS */}
      <section className="py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Note: Update these numbers with the actual verified figures from Dr. Abigael */}
            {[
              { label: "Entrepreneurs Trained", value: "500+" },
              { label: "Programmes Delivered", value: "20+" },
              { label: "Institutions Engaged", value: "15+" },
              { label: "Enterprises Supported", value: "300+" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-extrabold text-brand-gold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: SUCCESS STORIES (IMAGE GALLERY) */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories & Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real entrepreneurs. Real enterprises. Real impact.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Upload your gallery images to public/assets/images/ and use them here */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
              <div key={img} className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
                {/* <Image src={`/gallery-${img}.jpg`} fill className="object-cover hover:scale-105 transition-transform duration-500" alt="EDH Success Story" /> */}
                <div className="w-full h-full flex items-center justify-center text-gray-300"><Users size={32} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: PARTNERSHIP INVITATION */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join EDH in building sustainable nano enterprises across Africa.
          </h2>
          <Link href="/partnerships" className="inline-block bg-brand-green hover:bg-brand-green-dark text-white font-bold py-4 px-10 rounded-xl transition-colors text-lg shadow-lg">
            Partner With Us
          </Link>
        </div>
      </section>

    </main>
  );
}