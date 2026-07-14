"use client";

import { FileText, Book, BookOpen, Presentation, BarChart, Download } from "lucide-react";

export default function KnowledgePage() {
  const resources = [
    { title: "Research Publications", icon: <FileText size={28} />, desc: "Evidence-based knowledge published in reputable academic journals covering digital entrepreneurship, human capital, and sustainability." },
    { title: "Entrepreneurship Articles", icon: <BookOpen size={28} />, desc: "Practical insights on starting sustainable nano enterprises, managing business finances, and building customer relationships." },
    { title: "Training Manuals", icon: <Presentation size={28} />, desc: "Business development guides, enterprise assessment tools, and business planning templates for educators and practitioners." },
    { title: "Reports & Policy Briefs", icon: <BarChart size={28} />, desc: "Enterprise development studies and impact assessments that contribute to improved entrepreneurship ecosystems." },
  ];

  return (
    <main className="pt-32 pb-24 bg-gray-50/50">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="text-sm font-bold text-brand-green tracking-widest uppercase block mb-3">
          EDH Knowledge Centre
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Advancing Knowledge for <br className="hidden md:block"/> Sustainable Enterprise
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Knowledge is the foundation of enterprise transformation. We bridge the gap between academic research and entrepreneurial practice by translating evidence into practical solutions, training materials, and business tools.
        </p>
      </div>

      {/* Grid of Knowledge Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
              <div className="text-brand-gold mb-6">{res.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{res.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">{res.desc}</p>
              <button className="text-brand-green font-bold text-sm flex items-center gap-2 hover:underline">
                Explore <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Learning Resources Highlight */}
      <div className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Digital Learning Resources</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Supporting entrepreneurs in the digital economy with AI tools, online marketing resources, technology adoption strategies, and digital productivity solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
              <Download size={18} /> Download Digital Business Guide
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
              <Book size={18} /> Access AI Tool Directory
            </button>
          </div>
        </div>
      </div>

    </main>
  );
}