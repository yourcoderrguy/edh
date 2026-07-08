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
    <main className="pt-32 pb-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-green tracking-widest uppercase block mb-2">Our Programs</span>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Method & Approach</h1>
          <div className="w-12 h-1 bg-brand-green mx-auto mt-4 rounded-full" />
        </div>

        {/* Video / Media Section */}
        <div className="mb-20 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
          <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center group">
            {/* Replace this div with an actual <iframe> for YouTube/Vimeo when you have the video */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/80 to-gray-900/90 z-10" />
            
            {/* Optional Background Image Placeholder for the Video Cover */}
            {/* <Image src="/workshop-cover.jpg" fill className="object-cover opacity-50" alt="Workshop Video Cover" /> */}
            
            <div className="relative z-20 text-center flex flex-col items-center cursor-pointer">
              <PlayCircle size={64} className="text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white text-xl font-bold">Watch Our Introduction</h3>
              <p className="text-gray-300 text-sm mt-2">See how we transform ideas into enterprises</p>
            </div>
          </div>
        </div>

        {/* Practical Resource Highlight with Image */}
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch mb-20">
          {/* Image Placeholder - Just drop a picture named 'book-resource.jpg' in your public folder to use this */}
          <div className="lg:w-2/5 bg-brand-green/10 relative min-h-[300px] flex items-center justify-center">
            {/* <Image src="/book-resource.jpg" fill className="object-cover" alt="Nano Business in Nigeria Book" /> */}
            <BookOpen size={80} className="text-brand-green/20" />
          </div>
          
          <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
            <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center mb-6">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-950 mb-4">Publications & Knowledge Resources</h3>
            <p className="text-gray-600 text-base font-medium leading-relaxed">
              Our activities are supported by practical knowledge resources, including the book <span className="text-brand-green font-bold">"Nano Business in Nigeria"</span>, which serves as a foundational guide for training and entrepreneurial development.
            </p>
          </div>
        </div>

        {/* Structured Grid Approach */}
        <h2 className="text-2xl font-bold text-brand-green mb-8 flex items-center gap-2">
          <Layers size={22} /> Strategic Framework
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approaches.map((item, index) => (
            <div key={index} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-4 group">
              <CheckCircle2 className="text-brand-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}