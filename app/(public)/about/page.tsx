"use client";

import Image from "next/image";
import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50/50">
      
      {/* 1. Who We Are Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20 text-center">
        <span className="text-xs md:text-sm font-bold text-brand-green tracking-widest uppercase block mb-2 md:mb-3">
          Who We Are
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-8 leading-tight tracking-tight">
          Africa's Centre for Nano Enterprise <br className="hidden md:block"/> Development and Sustainability
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
          Entrepreneurship Development Hub (EDH) is a research-driven centre dedicated to advancing Nano Enterprise Development and Sustainability across Africa. We empower entrepreneurs, students, youth, women, institutions, and communities with the knowledge, skills, innovation, and strategic support needed to build resilient enterprises that create sustainable livelihoods and drive inclusive economic growth.
        </p>
      </div>

      {/* 2. Vision & Mission Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-brand-green/5 rounded-bl-full -mr-4 -mt-4"></div>
            <Target className="text-brand-green mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10 relative z-10" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 relative z-10">Our Vision</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10">
              To become Africa's leading centre of excellence for Nano Enterprise Development and Sustainability, empowering entrepreneurs, institutions, and communities to build innovative, resilient, and sustainable enterprises that drive inclusive economic growth and sustainable development.
            </p>
          </div>
          
          <div className="bg-brand-green p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-sm relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-bl-full -mr-4 -mt-4"></div>
            <Lightbulb className="text-brand-gold mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10 relative z-10" />
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative z-10">Our Mission</h3>
            <p className="text-sm md:text-base text-gray-100 leading-relaxed relative z-10">
              To advance Nano Enterprise Development and Sustainability by providing research-driven entrepreneurship education, enterprise development programmes, digital innovation, business incubation, mentorship, financial capability, and strategic advisory services that transform ideas into sustainable enterprises and measurable socio-economic impact.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Why Nano Enterprises Matter */}
      <div className="bg-white py-12 md:py-20 border-y border-gray-200 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Nano Enterprises Matter</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                Nano enterprises are the backbone of many developing economies. They create employment, stimulate local innovation, strengthen household incomes, and contribute to community resilience. Yet many struggle due to limited access to knowledge, technology, finance, mentorship, and markets.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                EDH addresses these challenges by equipping entrepreneurs with practical skills, evidence-based strategies, and continuous support that enable nano enterprises to survive, grow, and thrive in an increasingly competitive and digital economy.
              </p>
            </div>
            
            {/* Visual Flow Representation */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100">
              <div className="flex flex-col gap-3 md:gap-4">
                {['Nano Enterprises', 'Employment & Income', 'Community Development', 'Economic Transformation'].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green font-bold shrink-0 text-sm md:text-base">
                      {idx + 1}
                    </div>
                    <span className="font-bold text-gray-800 text-sm md:text-base">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Staff / Leadership Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="leadership">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs md:text-sm font-bold text-brand-green tracking-widest uppercase block mb-2 md:mb-3">
            Leadership
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Meet Our Founders</h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {/* Profile 1: Dr. Abigael */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shrink-0 mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-gray-200">
                <Image src="/ogunwoye.jpg" alt="Dr. Abigael Adewuni Ogunwoye" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Dr. Abigael Adewuni Ogunwoye</h3>
              <p className="text-brand-green font-bold text-base md:text-lg mb-4 md:mb-6">Co-Founder & Principal Consultant</p>
              
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8 text-left">
                <p>
                  Dr. Abigael Adewuni Ogunwoye is an entrepreneurship scholar, educator, researcher, and enterprise development expert dedicated to transforming lives through entrepreneurship education, innovation, and capacity building. She currently serves as a Lecturer in the Department of Business, Entrepreneurship, and Executive Education at the University of Ibadan School of Business.
                </p>
                <p>
                  She holds a B.Sc. in Entrepreneurship, an M.Tech. in Management Sciences, and a Ph.D. in Business Administration with a specialization in Entrepreneurship. Driven by the conviction that entrepreneurship is one of the most effective tools for combating poverty, she co-founded the Entrepreneurship Development Hub (EDH) to bridge rigorous academic research with practical enterprise solutions.
                </p>
              </div>

              <div className="bg-brand-green/5 border-l-4 border-brand-green p-4 md:p-6 rounded-r-xl text-left">
                <h4 className="text-xs md:text-sm font-bold text-gray-900 uppercase mb-1 md:mb-2">Personal Philosophy</h4>
                <p className="italic text-gray-700 text-sm md:text-base">
                  "Entrepreneurship is more than creating businesses—it is about unlocking human potential, solving societal challenges, creating opportunities, and building a future where innovation drives inclusive prosperity."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200"></div>

          {/* Profile 2: Dr. Olubode */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shrink-0 mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-gray-200">
                <Image src="/oladele.jpg" alt="Dr. Olubode Olusegun Oladele" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Dr. Olubode Olusegun Oladele</h3>
              <p className="text-brand-green font-bold text-base md:text-lg mb-4 md:mb-6">Co-Founder & Director of Finance and Enterprise Advisory</p>
              
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8 text-left">
                <p>
                  Dr. Olubode Olusegun Oladele is an accomplished accounting scholar, financial management expert, researcher, and enterprise advisor with extensive experience in academia and professional accounting practice. He currently serves as a Lecturer in the Department of Accounting at Obafemi Awolowo University, Ile-Ife.
                </p>
                <p>
                  With more than twelve years of professional accounting experience, Dr. Oladele integrates accounting theory with practical financial solutions that support business growth and organizational sustainability. As the Co-Founder of EDH, he leads the Hub's financial advisory and enterprise support services, working with entrepreneurs to strengthen financial management systems and improve investment readiness.
                </p>
              </div>

              <div className="bg-brand-gold/10 border-l-4 border-brand-gold p-4 md:p-6 rounded-r-xl text-left">
                <h4 className="text-xs md:text-sm font-bold text-gray-900 uppercase mb-1 md:mb-2">Personal Philosophy</h4>
                <p className="italic text-gray-700 text-sm md:text-base">
                  "Financial discipline, integrity, and strategic thinking are the foundation of every successful enterprise. My mission is to help entrepreneurs build financially resilient businesses that create lasting value for society."
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}