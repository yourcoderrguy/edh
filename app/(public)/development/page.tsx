"use client";

import { Lightbulb, Rocket, TrendingUp, Shield, Building, LineChart, Smartphone, Wallet, Users, Search } from "lucide-react";

export default function DevelopmentPage() {
  const services = [
    { title: "Nano Enterprise Incubation", icon: <Building size={28} />, desc: "Providing structured support to emerging entrepreneurs through training, mentorship, business advisory, and networking." },
    { title: "Business Advisory", icon: <LineChart size={28} />, desc: "Practical guidance on business strategy, enterprise management, financial planning, and growth opportunities." },
    { title: "Digital Enterprise Transformation", icon: <Smartphone size={28} />, desc: "Helping nano enterprises adopt digital tools, AI, online marketing platforms, and business automation solutions." },
    { title: "Financial Capability Development", icon: <Wallet size={28} />, desc: "Strengthening ability to manage finances through bookkeeping, budgeting, financial planning, and investment readiness." },
    { title: "Mentorship & Networking", icon: <Users size={28} />, desc: "Connecting entrepreneurs with experienced professionals, academics, and successful business owners." },
    { title: "Research & Impact Evaluation", icon: <Search size={28} />, desc: "Supporting organizations through entrepreneurship programme evaluation, enterprise research, and impact measurement." }
  ];

  return (
    <main className="pt-32 pb-24 bg-gray-50/50">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="text-sm font-bold text-brand-green tracking-widest uppercase block mb-3">
          Enterprise Development Services
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Supporting Nano Enterprises <br className="hidden md:block"/> From Idea to Sustainability
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Sustainable enterprises require more than training. They require continuous support, mentorship, strategic guidance, innovation, and access to appropriate resources. We help transform ideas into viable, resilient businesses.
        </p>
      </div>

      {/* The 4-Stage Support Model */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Enterprise Development Model</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Idea Validation", icon: <Lightbulb size={24}/>, desc: "Business idea assessment, market research, and customer validation." },
            { title: "Creation & Launch", icon: <Rocket size={24}/>, desc: "Business planning, startup advisory, and market entry strategies." },
            { title: "Growth & Improvement", icon: <TrendingUp size={24}/>, desc: "Business strategy, digital transformation, and operational improvement." },
            { title: "Sustainability", icon: <Shield size={24}/>, desc: "Risk management, sustainable business models, and long-term growth planning." }
          ].map((stage, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-green/10 relative">
              <div className="w-12 h-12 bg-brand-green text-white rounded-xl flex items-center justify-center mb-4">
                {stage.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{stage.title}</h3>
              <p className="text-sm text-gray-600">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Services Grid */}
      <div className="bg-white py-20 border-y border-gray-200" id="enterprise-incubation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">EDH Enterprise Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-brand-green/5 transition-colors border border-transparent hover:border-brand-green/20">
                <div className="text-brand-gold shrink-0 mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}