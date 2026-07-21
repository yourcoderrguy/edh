"use client";

import { Lightbulb, Rocket, TrendingUp, Shield, Building, LineChart, Smartphone, Wallet, Users, Search } from "lucide-react";

export default function DevelopmentPage() {
  const services = [
    { title: "Nano Enterprise Incubation", icon: <Building className="w-6 h-6 md:w-7 md:h-7" />, desc: "Providing structured support to emerging entrepreneurs through training, mentorship, business advisory, and networking." },
    { title: "Business Advisory", icon: <LineChart className="w-6 h-6 md:w-7 md:h-7" />, desc: "Practical guidance on business strategy, enterprise management, financial planning, and growth opportunities." },
    { title: "Digital Enterprise Transformation", icon: <Smartphone className="w-6 h-6 md:w-7 md:h-7" />, desc: "Helping nano enterprises adopt digital tools, AI, online marketing platforms, and business automation solutions." },
    { title: "Financial Capability Development", icon: <Wallet className="w-6 h-6 md:w-7 md:h-7" />, desc: "Strengthening ability to manage finances through bookkeeping, budgeting, financial planning, and investment readiness." },
    { title: "Mentorship & Networking", icon: <Users className="w-6 h-6 md:w-7 md:h-7" />, desc: "Connecting entrepreneurs with experienced professionals, academics, and successful business owners." },
    { title: "Research & Impact Evaluation", icon: <Search className="w-6 h-6 md:w-7 md:h-7" />, desc: "Supporting organizations through entrepreneurship programme evaluation, enterprise research, and impact measurement." }
  ];

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50/50">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-20">
        <span className="text-xs md:text-sm font-bold text-brand-green tracking-widest uppercase block mb-2 md:mb-3">
          Enterprise Development Services
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight">
          Supporting Nano Enterprises <br className="hidden md:block"/> From Idea to Sustainability
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
          Sustainable enterprises require more than training. They require continuous support, mentorship, strategic guidance, innovation, and access to appropriate resources. We help transform ideas into viable, resilient businesses.
        </p>
      </div>

      {/* The 4-Stage Support Model */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Our Enterprise Development Model</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "Idea Validation", icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6"/>, desc: "Business idea assessment, market research, and customer validation." },
            { title: "Creation & Launch", icon: <Rocket className="w-5 h-5 md:w-6 md:h-6"/>, desc: "Business planning, startup advisory, and market entry strategies." },
            { title: "Growth & Improvement", icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6"/>, desc: "Business strategy, digital transformation, and operational improvement." },
            { title: "Sustainability", icon: <Shield className="w-5 h-5 md:w-6 md:h-6"/>, desc: "Risk management, sustainable business models, and long-term growth planning." }
          ].map((stage, idx) => (
            <div key={idx} className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-brand-green/10 relative hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-green text-white rounded-xl flex items-center justify-center mb-3 md:mb-4">
                {stage.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{stage.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Services Grid */}
      <div className="bg-white py-12 md:py-20 border-y border-gray-200" id="enterprise-incubation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">EDH Enterprise Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex gap-3 md:gap-4 p-5 md:p-6 bg-gray-50 rounded-2xl hover:bg-brand-green/5 transition-colors border border-transparent hover:border-brand-green/20">
                <div className="text-brand-gold shrink-0 mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{service.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}