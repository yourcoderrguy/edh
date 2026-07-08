import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* Brand & Slogan Column */}
          <div className="md:col-span-5">
            <div className="bg-white p-3 rounded-xl inline-block mb-6 shadow-sm">
              {/* Using the full text logo here */}
              <Image 
                src="/edh-logo-icon-text.png" 
                alt="Entrepreneurship Development Hub Full Logo" 
                width={200} 
                height={70} 
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Empowering students and aspiring entrepreneurs to start and grow nano businesses. Transforming innovative ideas into successful enterprises across Nigeria.
            </p>
            <div className="flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-widest">
              <span>Empower</span>
              <span className="w-1 h-1 bg-brand-green rounded-full" />
              <span>Innovate</span>
              <span className="w-1 h-1 bg-brand-green rounded-full" />
              <span>Build Tomorrow</span>
            </div>
          </div>

          {/* Sitemap / Quick Links Column */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6 text-lg">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-brand-green" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-brand-green" /> About the Hub
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-brand-green" /> Core Initiatives
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-brand-green" /> Case Repository
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold mb-6 text-lg">Contact & Partnerships</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-brand-green shrink-0 mt-0.5" />
                <span>partner@edhub.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-brand-green shrink-0 mt-0.5" />
                <span>Nigeria</span>
              </li>
            </ul>
            <Link href="/admin/login">
              <button className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors border border-gray-700">
                Admin Portal Access
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left font-medium">
            &copy; {currentYear} Nano Business Development Hub. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-medium">
            <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}