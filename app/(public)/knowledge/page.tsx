"use client";

import { FileText, Book, BookOpen, Presentation, BarChart, Download, ArrowRight } from "lucide-react";

export default function KnowledgePage() {
  const resources = [
    { title: "Research Publications", icon: <FileText className="w-6 h-6 md:w-7 md:h-7" />, desc: "Evidence-based knowledge published in reputable academic journals covering digital entrepreneurship, human capital, and sustainability." },
    { title: "Entrepreneurship Articles", icon: <BookOpen className="w-6 h-6 md:w-7 md:h-7" />, desc: "Practical insights on starting sustainable nano enterprises, managing business finances, and building customer relationships." },
    { title: "Training Manuals", icon: <Presentation className="w-6 h-6 md:w-7 md:h-7" />, desc: "Business development guides, enterprise assessment tools, and business planning templates for educators and practitioners." },
    { title: "Reports & Policy Briefs", icon: <BarChart className="w-6 h-6 md:w-7 md:h-7" />, desc: "Enterprise development studies and impact assessments that contribute to improved entrepreneurship ecosystems." },
  ];

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50/50">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-20">
        <span className="text-xs md:text-sm font-bold text-brand-green tracking-widest uppercase block mb-2 md:mb-3">
          EDH Knowledge Centre
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight">
          Advancing Knowledge for <br className="hidden md:block"/> Sustainable Enterprise
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
          Knowledge is the foundation of enterprise transformation. We bridge the gap between academic research and entrepreneurial practice by translating evidence into practical solutions, training materials, and business tools.
        </p>
      </div>

      {/* Grid of Knowledge Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {resources.map((res, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
              <div className="text-brand-gold mb-4 md:mb-6">{res.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{res.title}</h3>
              <p className="text-gray-600 leading-relaxed text-xs md:text-sm mb-4 md:mb-6">{res.desc}</p>
              <button className="text-brand-green font-bold text-sm md:text-base flex items-center gap-2 hover:underline">
                Explore <ArrowRight size={14} className="md:w-4 md:h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Learning Resources Highlight */}
      <div className="bg-gray-950 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Digital Learning Resources</h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 px-2">
            Supporting entrepreneurs in the digital economy with AI tools, online marketing resources, technology adoption strategies, and digital productivity solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4 sm:px-0">
            <button className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 md:py-4 px-6 rounded-lg md:rounded-xl transition-colors flex justify-center items-center gap-2 text-sm md:text-base">
              <Download size={18} className="md:w-5 md:h-5" /> Download Digital Guide
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-3 md:py-4 px-6 rounded-lg md:rounded-xl transition-colors flex justify-center items-center gap-2 text-sm md:text-base">
              <Book size={18} className="md:w-5 md:h-5" /> Access AI Tool Directory
            </button>
          </div>
        </div>
      </div>

    </main>
  );
}