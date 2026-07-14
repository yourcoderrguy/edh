"use client";

import { BookOpen, Laptop, Users, ShieldCheck, Cpu, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AcademyPage() {
  const programmes = [
    {
      title: "Certificate Programme in Nano Enterprise Development",
      icon: <BookOpen size={32} />,
      desc: "A comprehensive programme equipping aspiring and existing entrepreneurs with the skills to establish and manage sustainable nano enterprises.",
    },
    {
      title: "Digital Nano Enterprise Accelerator",
      icon: <Laptop size={32} />,
      desc: "Prepares entrepreneurs to leverage digital technologies, AI, social media, and digital marketing to improve enterprise performance.",
    },
    {
      title: "Youth Nano Enterprise Development",
      icon: <GraduationCap size={32} />,
      desc: "Supports students and young graduates to move from entrepreneurial intention to enterprise creation through pitching and mentorship.",
    },
    {
      title: "Women Nano Enterprise Empowerment",
      icon: <Users size={32} />,
      desc: "Supports women entrepreneurs by providing access to digital skills, financial management training, and enterprise growth strategies.",
    },
    {
      title: "Nano Enterprise Sustainability Programme",
      icon: <ShieldCheck size={32} />,
      desc: "Focuses on strengthening existing businesses through financial management, risk management, and sustainable business practices.",
    },
    {
      title: "AI for Nano Enterprise Programme",
      icon: <Cpu size={32} />,
      desc: "Introduces entrepreneurs to practical applications of Artificial Intelligence for market research, content creation, and productivity.",
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-gray-50/50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="text-sm font-bold text-brand-green tracking-widest uppercase block mb-3">
          EDH Nano Enterprise Academy
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Building the Next Generation of <br className="hidden md:block"/> Sustainable Nano Entrepreneurs
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          The capacity-building arm of EDH, dedicated to developing entrepreneurs, innovators, students, and enterprise leaders with the practical capabilities required to create and sustain successful nano enterprises.
        </p>
      </div>

      {/* Learning Approach Flow */}
      <div className="bg-white py-16 border-y border-gray-200 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Learning Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "Learn", desc: "Acquire entrepreneurship knowledge, business concepts, and management principles." },
              { step: "Apply", desc: "Use practical tools, case studies, and real-world exercises to apply knowledge." },
              { step: "Create", desc: "Develop business ideas, validate opportunities, and establish enterprise solutions." },
              { step: "Sustain", desc: "Receive guidance on managing, improving, and growing sustainable enterprises." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <div className="w-10 h-10 bg-brand-gold text-gray-900 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-xl text-brand-green mb-2">{item.step}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flagship Programmes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" id="certificate-programmes">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Flagship Training Programmes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((prog, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="text-brand-green mb-6 group-hover:scale-110 transition-transform origin-left">{prog.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{prog.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-brand-green-dark text-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Build Your Enterprise?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you are starting your entrepreneurial journey or seeking to strengthen an existing enterprise, EDH provides the knowledge and tools you need.
          </p>
          <Link href="/contact" className="inline-block bg-brand-gold text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
            Register for a Programme
          </Link>
        </div>
      </div>
    </main>
  );
}