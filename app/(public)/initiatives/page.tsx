"use client";

import { CheckCircle2, BookOpen, Layers, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function InitiativesPage() {
  const approaches = [
    { title: "Capacity Building", desc: "Delivering hands-on training programmes focused on starting and managing nano businesses with minimal capital." },
    { title: "Mentorship", desc: "Connecting participants with experienced entrepreneurs and industry practitioners for guidance and support." },
    { title: "Case-Based Learning", desc: "Leveraging real-life business cases to enhance understanding and inspire action." },
    { title: "Applied Research", desc: "Documenting and analysing nano business practices to inform policy and enterprise development." }
  ];

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-bold text-brand-green tracking-widest uppercase block mb-2">Our Programs</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Our Method & Approach</h1>
          <div className="w-10 md:w-12 h-1 bg-brand-green mx-auto mt-3 md:mt-4 rounded-full" />
        </div>

        {/* Video / Media Section */}
        <div className="mb-16 md:mb-20 bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
          <div className="relative w-full aspect-video bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center group">
            {/* Replace this div with an actual <iframe> for YouTube/Vimeo when you have the video */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/80 to-gray-900/90 z-10" />
            
            {/* <Image src="/workshop-cover.jpg" fill className="object-cover opacity-50" alt="Workshop Video Cover" /> */}
            
            <div className="relative z-20 text-center flex flex-col items-center cursor-pointer px-4">
              <PlayCircle className="w-12 h-12 md:w-16 md:h-16 text-brand-gold mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white text-lg md:text-xl font-bold">Watch Our Introduction</h3>
              <p className="text-gray-300 text-xs md:text-sm mt-1 md:mt-2">See how we transform ideas into enterprises</p>
            </div>
          </div>
        </div>

        {/* Practical Resource Highlight with Image */}
        <div className="bg-white border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch mb-16 md:mb-20">
          <div className="lg:w-2/5 bg-brand-green/10 relative min-h-[200px] md:min-h-[300px] flex items-center justify-center">
            {/* <Image src="/book-resource.jpg" fill className="object-cover" alt="Nano Business in Nigeria Book" /> */}
            <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-brand-green/20" />
          </div>
          
          <div className="p-6 sm:p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-gold/10 text-brand-gold rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <BookOpen size={20} className="md:w-6 md:h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-950 mb-3 md:mb-4">Publications & Knowledge Resources</h3>
            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
              Our activities are supported by practical knowledge resources, including the book <span className="text-brand-green font-bold">"Nano Business in Nigeria"</span>, which serves as a foundational guide for training and entrepreneurial development.
            </p>
          </div>
        </div>

        {/* Structured Grid Approach */}
        <h2 className="text-xl md:text-2xl font-bold text-brand-green mb-6 md:mb-8 flex items-center gap-2">
          <Layers size={20} className="md:w-[22px] md:h-[22px]" /> Strategic Framework
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {approaches.map((item, index) => (
            <div key={index} className="bg-white border border-gray-100 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-3 md:gap-4 group">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{item.title}</h4>
                <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}