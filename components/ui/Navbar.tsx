"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // The massive new navigation structure defined by the client
  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "About EDH", href: "/about", 
      dropdown: ["Who We Are", "Vision and Mission", "Why Nano Enterprise?", "Our Approach"] 
    },
    { 
      name: "Academy", href: "/academy", 
      dropdown: ["Certificate Programmes", "Bootcamps", "Youth Programmes", "Women Enterprise Programmes", "Institutional Training"] 
    },
    { 
      name: "Enterprise Dev", href: "/development", 
      dropdown: ["Enterprise Incubation", "Business Advisory", "Digital Support", "Financial Capability", "Sustainability Support"] 
    },
    { 
      name: "Research", href: "/research", 
      dropdown: ["Research Themes", "Publications", "Policy Insights", "Knowledge Products"] 
    },
    { 
      name: "Impact", href: "/impact", 
      dropdown: ["Success Stories", "Entrepreneurship Day", "Digital Bootcamp", "Testimonials"] 
    },
    { 
      name: "Partnerships", href: "/partnerships", 
      dropdown: ["Academic Partners", "Development Partners", "Corporate Partners", "Collaboration Opportunities"] 
    },
    { 
      name: "Knowledge", href: "/knowledge", 
      dropdown: ["Articles", "Books", "Research Reports", "Training Resources"] 
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section - Text removed as requested */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/edh-logo-icon-text.png" alt="EDH Logo" width={180} height={60} className="object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex xl:items-center xl:space-x-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group px-2 py-6">
                <Link 
                  href={link.href}
                  className="text-gray-700 hover:text-brand-green font-semibold text-sm flex items-center gap-1 transition-colors"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="text-gray-400 group-hover:text-brand-green transition-colors" />}
                </Link>
                
                {/* Desktop Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-100 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="py-2">
                      {link.dropdown.map((item, i) => (
                        <Link 
                          key={i} 
                          href={`${link.href}#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-green font-medium"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-green p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index} className="py-2 border-b border-gray-50 last:border-0">
                <Link 
                  href={link.href} 
                  className="block font-bold text-gray-900 text-base py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-1 space-y-2 border-l-2 border-brand-green/20">
                    {link.dropdown.map((item, i) => (
                      <Link 
                        key={i} 
                        href={`${link.href}#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-sm text-gray-600 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}