"use client";

import { useState } from "react";
import { Handshake, GraduationCap, Building2, Globe2, Briefcase, Landmark, ArrowRight, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";

export default function PartnershipsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    type: "Programme Partnership",
    message: ""
  });

  const partners = [
    { title: "Universities & Academic Institutions", icon: <GraduationCap size={32} />, desc: "Advancing entrepreneurship education, research, curriculum development, and student enterprise programmes." },
    { title: "Government Institutions", icon: <Landmark size={32} />, desc: "Supporting youth and women economic empowerment, digital enterprise programmes, and policy support." },
    { title: "International NGOs", icon: <Globe2 size={32} />, desc: "Advancing inclusive economic development aligned with SDGs, focusing on poverty reduction and climate-smart entrepreneurship." },
    { title: "Corporate Organizations", icon: <Building2 size={32} />, desc: "Connecting industry with enterprise development through CSR, mentorship, and innovation partnerships." },
    { title: "Financial Institutions", icon: <Briefcase size={32} />, desc: "Strengthening financial sustainability through financial literacy, investment readiness, and business growth support." },
    { title: "Research & Knowledge Partners", icon: <Handshake size={32} />, desc: "Advancing evidence-based nano enterprise development, digital entrepreneurship, and innovation ecosystems." }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/partnerships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setIsSuccess(true);
      else alert("Something went wrong. Please try again.");
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-32 pb-24 bg-gray-50/50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="text-sm font-bold text-brand-green tracking-widest uppercase block mb-3">Partnerships & Collaborations</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Building the Nano Enterprise Ecosystem</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Through strategic partnerships, EDH brings together academic institutions, governments, development organizations, private sector organizations, financial institutions, entrepreneurs, and community stakeholders to create an enabling ecosystem where nano enterprises can thrive.
        </p>
      </div>

      {/* The 4 Principles */}
      <div className="bg-white py-16 border-y border-gray-200 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Partnership Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Shared Vision", desc: "Collaborating with organizations committed to entrepreneurship and inclusive growth." },
              { title: "Knowledge Exchange", desc: "Combining academic research, practical experience, and industry expertise." },
              { title: "Capacity Development", desc: "Building the capabilities of entrepreneurs, institutions, and communities." },
              { title: "Sustainable Impact", desc: "Creating programmes that generate measurable economic and social outcomes." }
            ].map((principle, idx) => (
              <div key={idx} className="p-6">
                <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">{idx + 1}</div>
                <h3 className="font-bold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-600">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Partner With Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Who We Partner With</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-brand-gold mb-6">{partner.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Outreach Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-green rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          
          <div className="lg:w-2/5 p-10 lg:p-12 bg-brand-green-dark text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Become an EDH Partner</h3>
            <p className="text-gray-200 mb-10 leading-relaxed">
              Whether you are a university, government institution, development organization, corporate organization, or entrepreneur support organization, EDH welcomes collaboration.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg"><Mail size={20} className="text-brand-gold" /></div>
                <div>
                  <p className="text-sm text-gray-300">Email Us</p>
                  <p className="font-semibold">partnerships@entrepreneurshipdevhub.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg"><MapPin size={20} className="text-brand-gold" /></div>
                <div>
                  <p className="text-sm text-gray-300">Location</p>
                  <p className="font-semibold">Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-10 lg:p-12 bg-white">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Send a Partnership Inquiry</h4>
            
            {isSuccess ? (
              <div className="text-center py-10">
                <CheckCircle2 size={64} className="text-brand-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for your interest. Our team will review your partnership request and respond shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="text-brand-green font-bold hover:underline">Submit another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name</label>
                    <input type="text" required value={formData.orgName} onChange={(e) => setFormData({...formData, orgName: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:ring-brand-green focus:border-brand-green outline-none" placeholder="e.g., Global Development NGO" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person</label>
                    <input type="text" required value={formData.contactPerson} onChange={(e) => setFormData({...formData, contactPerson: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:ring-brand-green focus:border-brand-green outline-none" placeholder="Your full name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:ring-brand-green focus:border-brand-green outline-none" placeholder="you@organization.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Type</label>
                    <select required value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:ring-brand-green focus:border-brand-green outline-none">
                      <option>Programme Partnership</option>
                      <option>Research Partnership</option>
                      <option>Funding & Sponsorship</option>
                      <option>Other Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:ring-brand-green focus:border-brand-green outline-none" placeholder="Tell us how we can collaborate..."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-gold text-gray-900 font-bold text-lg py-4 rounded-xl hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70">
                  {isSubmitting ? <><Loader2 size={20} className="animate-spin" /> Sending...</> : <><ArrowRight size={20} /> Submit Inquiry</>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
"use client";

import { useState } from "react";
import { Handshake, GraduationCap, Building2, Globe2, Briefcase, Landmark, ArrowRight, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";

export default function PartnershipsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    type: "Programme Partnership",
    message: ""
  });

  const partners = [
    { title: "Universities & Academic Institutions", icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />, desc: "Advancing entrepreneurship education, research, curriculum development, and student enterprise programmes." },
    { title: "Government Institutions", icon: <Landmark className="w-8 h-8 md:w-10 md:h-10" />, desc: "Supporting youth and women economic empowerment, digital enterprise programmes, and policy support." },
    { title: "International NGOs", icon: <Globe2 className="w-8 h-8 md:w-10 md:h-10" />, desc: "Advancing inclusive economic development aligned with SDGs, focusing on poverty reduction and climate-smart entrepreneurship." },
    { title: "Corporate Organizations", icon: <Building2 className="w-8 h-8 md:w-10 md:h-10" />, desc: "Connecting industry with enterprise development through CSR, mentorship, and innovation partnerships." },
    { title: "Financial Institutions", icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10" />, desc: "Strengthening financial sustainability through financial literacy, investment readiness, and business growth support." },
    { title: "Research & Knowledge Partners", icon: <Handshake className="w-8 h-8 md:w-10 md:h-10" />, desc: "Advancing evidence-based nano enterprise development, digital entrepreneurship, and innovation ecosystems." }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/partnerships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setIsSuccess(true);
      else alert("Something went wrong. Please try again.");
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50/50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-20">
        <span className="text-xs md:text-sm font-bold text-brand-green tracking-widest uppercase block mb-2 md:mb-3">Partnerships & Collaborations</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight">Building the Nano Enterprise Ecosystem</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
          Through strategic partnerships, EDH brings together academic institutions, governments, development organizations, private sector organizations, financial institutions, entrepreneurs, and community stakeholders to create an enabling ecosystem where nano enterprises can thrive.
        </p>
      </div>

      {/* The 4 Principles */}
      <div className="bg-white py-12 md:py-16 border-y border-gray-200 mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Our Partnership Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { title: "Shared Vision", desc: "Collaborating with organizations committed to entrepreneurship and inclusive growth." },
              { title: "Knowledge Exchange", desc: "Combining academic research, practical experience, and industry expertise." },
              { title: "Capacity Development", desc: "Building the capabilities of entrepreneurs, institutions, and communities." },
              { title: "Sustainable Impact", desc: "Creating programmes that generate measurable economic and social outcomes." }
            ].map((principle, idx) => (
              <div key={idx} className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-lg md:text-xl">{idx + 1}</div>
                <h3 className="font-bold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Partner With Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">Who We Partner With</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-brand-gold mb-4 md:mb-6">{partner.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{partner.title}</h3>
              <p className="text-gray-600 leading-relaxed text-xs md:text-sm">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Outreach Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-green rounded-2xl md:rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          
          <div className="lg:w-2/5 p-8 md:p-10 lg:p-12 bg-brand-green-dark text-white flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Become an EDH Partner</h3>
            <p className="text-sm md:text-base text-gray-200 mb-8 md:mb-10 leading-relaxed">
              Whether you are a university, government institution, development organization, corporate organization, or entrepreneur support organization, EDH welcomes collaboration.
            </p>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start md:items-center gap-3 md:gap-4">
                <div className="bg-white/10 p-2 md:p-3 rounded-lg shrink-0"><Mail className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" /></div>
                <div className="overflow-hidden">
                  <p className="text-xs md:text-sm text-gray-300">Email Us</p>
                  <p className="font-semibold text-sm md:text-base truncate md:break-words">ent.devhub@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start md:items-center gap-3 md:gap-4">
                <div className="bg-white/10 p-2 md:p-3 rounded-lg shrink-0"><MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" /></div>
                <div>
                  <p className="text-xs md:text-sm text-gray-300">Location</p>
                  <p className="font-semibold text-sm md:text-base">Osogbo, Osun State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-6 md:p-10 lg:p-12 bg-white">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Send a Partnership Inquiry</h4>
            
            {isSuccess ? (
              <div className="text-center py-8 md:py-10">
                <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-brand-green mx-auto mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Inquiry Sent!</h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">Thank you for your interest. Our team will review your partnership request and respond shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="text-brand-green font-bold text-sm md:text-base hover:underline">Submit another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name</label>
                    <input type="text" required value={formData.orgName} onChange={(e) => setFormData({...formData, orgName: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm md:text-base focus:ring-brand-green focus:border-brand-green outline-none transition-all" placeholder="e.g., Global Development NGO" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person</label>
                    <input type="text" required value={formData.contactPerson} onChange={(e) => setFormData({...formData, contactPerson: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm md:text-base focus:ring-brand-green focus:border-brand-green outline-none transition-all" placeholder="Your full name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm md:text-base focus:ring-brand-green focus:border-brand-green outline-none transition-all" placeholder="you@organization.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Type</label>
                    <select required value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm md:text-base focus:ring-brand-green focus:border-brand-green outline-none transition-all appearance-none">
                      <option>Programme Partnership</option>
                      <option>Research Partnership</option>
                      <option>Funding & Sponsorship</option>
                      <option>Other Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm md:text-base focus:ring-brand-green focus:border-brand-green outline-none transition-all" placeholder="Tell us how we can collaborate..."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-gold text-gray-900 font-bold text-base md:text-lg py-3 md:py-4 rounded-xl hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70">
                  {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><ArrowRight className="w-5 h-5" /> Submit Inquiry</>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}