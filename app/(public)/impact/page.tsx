"use client";

import { CheckCircle2, TrendingUp, Calendar, Laptop } from "lucide-react";
import Image from "next/image";

export default function ImpactPage() {
  return (
    <main className="pt-32 pb-24 bg-gray-50/50">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="text-sm font-bold text-brand-green tracking-widest uppercase block mb-3">
          Impact & Success Stories
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Transforming Ideas Into <br className="hidden md:block"/> Sustainable Nano Enterprises
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At EDH, our impact is measured by the entrepreneurs empowered, businesses created, skills developed, and communities transformed. We move participants beyond awareness to practical enterprise creation.
        </p>
      </div>

      {/* Flagship Initiatives */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100" id="entrepreneurship-day">
            <div className="w-14 h-14 bg-brand-gold/20 text-brand-gold rounded-2xl flex items-center justify-center mb-6">
              <Calendar size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrepreneurship Day Initiative</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Designed to expose students to entrepreneurship beyond classroom theories. Implemented across 2024, 2025, and 2026, the initiative provides opportunities to develop ideas, pitch products, and engage with real entrepreneurs.
            </p>
            <ul className="space-y-3">
              {['Develop business ideas', 'Present products and services', 'Practice business pitching'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <CheckCircle2 size={18} className="text-brand-green" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100" id="digital-bootcamp">
            <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mb-6">
              <Laptop size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Nano Enterprise Bootcamp</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Equips participants with entrepreneurship knowledge and digital capabilities required for modern enterprise development, ensuring businesses use technology to scale sustainably.
            </p>
            <ul className="space-y-3">
              {['Digital business development', 'Artificial Intelligence tools', 'Digital marketing & Financial literacy'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <CheckCircle2 size={18} className="text-brand-green" /> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Stories of Transformation (Image Gallery Placeholder) */}
      <div className="bg-white py-24 border-y border-gray-200" id="success-stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Transformation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating the entrepreneurs and participants who have successfully launched and sustained their nano enterprises.
            </p>
          </div>
          
          {/* This is where you will map over the 50+ images of students/events */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {/* This automatically creates a grid for your 30 images */}
  {Array.from({ length: 15 }, (_, i) => i + 1).map((imgNumber) => (
    <div key={imgNumber} className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
      
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