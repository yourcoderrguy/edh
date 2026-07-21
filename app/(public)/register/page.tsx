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
        // Mapping 'fullName' for the API based on the split fields
        body: JSON.stringify({
          fullName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          program: formData.programme,
          background: formData.status
        }),
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
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50/50 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-xl w-full mx-auto text-center">
          <div className="bg-white p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-xl border border-gray-100">
            <CheckCircle2 className="w-16 h-16 md:w-20 md:h-20 text-brand-green mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Registration Successful!</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">Thank you for registering. The EDH team will review your application and contact you shortly.</p>
            <button onClick={() => setIsSuccess(false)} className="text-brand-green font-bold text-sm md:text-base hover:underline">
              Submit another application
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50/50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full mx-auto">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          
          <div className="bg-brand-green p-6 md:p-8 text-center text-white">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Academy Registration</h1>
            <p className="text-brand-green-100 text-xs md:text-sm">Take the next step in building your sustainable enterprise.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-12 space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input type="text" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 text-sm md:text-base focus:ring-2 focus:ring-brand-green outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input type="text" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 text-sm md:text-base focus:ring-2 focus:ring-brand-green outline-none transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 text-sm md:text-base focus:ring-2 focus:ring-brand-green outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 text-sm md:text-base focus:ring-2 focus:ring-brand-green outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Programme</label>
              <select required value={formData.programme} onChange={(e) => setFormData({...formData, programme: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 text-sm md:text-base focus:ring-2 focus:ring-brand-green outline-none transition-all appearance-none">
                <option value="">-- Choose a programme --</option>
                {programmes.map((prog, idx) => (
                  <option key={idx} value={prog}>{prog}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Current Enterprise Status</label>
              <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 text-sm md:text-base focus:ring-2 focus:ring-brand-green outline-none transition-all appearance-none">
                <option>Aspiring Entrepreneur (No business yet)</option>
                <option>Early Stage (0-2 years)</option>
                <option>Established Business (2+ years)</option>
              </select>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-brand-gold text-gray-900 font-bold text-base md:text-lg py-3 md:py-4 rounded-xl hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 mt-4 md:mt-6 shadow-sm disabled:opacity-70">
              {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</> : <><ArrowRight className="w-5 h-5" /> Submit Application</>}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}