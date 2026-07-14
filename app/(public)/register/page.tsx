"use client";

import { useState } from "react";
import { GraduationCap, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programme: "",
    status: "Aspiring Entrepreneur (No business yet)"
  });

  const programmes = [
    "Certificate Programme in Nano Enterprise Development",
    "Digital Nano Enterprise Accelerator",
    "Youth Nano Enterprise Development Programme",
    "Women Nano Enterprise Empowerment Programme",
    "Nano Enterprise Sustainability Programme",
    "AI for Nano Enterprise Programme"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="pt-32 pb-24 bg-gray-50/50 min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <CheckCircle2 size={64} className="text-brand-green mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
            <p className="text-gray-600 mb-8">Thank you for registering. The EDH team will review your application and contact you shortly.</p>
            <button onClick={() => setIsSuccess(false)} className="text-brand-green font-bold hover:underline">
              Submit another application
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-gray-50/50 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-brand-green p-8 text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={32} className="text-brand-gold" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Academy Registration</h1>
            <p className="text-brand-green-100">Take the next step in building your sustainable enterprise.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input type="text" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-brand-green outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input type="text" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-brand-green outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-brand-green outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-brand-green outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Programme</label>
              <select required value={formData.programme} onChange={(e) => setFormData({...formData, programme: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-brand-green outline-none">
                <option value="">-- Choose a programme --</option>
                {programmes.map((prog, idx) => (
                  <option key={idx} value={prog}>{prog}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Current Enterprise Status</label>
              <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-brand-green outline-none">
                <option>Aspiring Entrepreneur (No business yet)</option>
                <option>Early Stage (0-2 years)</option>
                <option>Established Business (2+ years)</option>
              </select>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-brand-gold text-gray-900 font-bold text-lg py-4 rounded-xl hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 mt-4 shadow-sm disabled:opacity-70">
              {isSubmitting ? <><Loader2 size={20} className="animate-spin" /> Processing...</> : <><ArrowRight size={20} /> Submit Application</>}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}