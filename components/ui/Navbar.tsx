"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Links specific to the EDH platform
  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    // { name: "Initiatives", href: "/initiatives" },
    // { name: "Case Repository", href: "/cases" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ y: -3 }}
              className="relative flex items-center justify-center"
            >
              <Image 
                src="/edh-logo-icon.png" 
                alt="Entrepreneurship Development Hub Logo" 
                width={45} 
                height={45} 
                className="group-hover:animate-pulse-slow object-contain"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-brand-green leading-tight">EDH</span>
              <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">Nano Business</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-green font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-green text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-brand-green-dark transition-colors"
            >
              Partner With Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-green hover:text-brand-green-dark focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full bg-brand-gold text-brand-green-dark px-6 py-3 rounded-full font-bold shadow-sm hover:bg-brand-gold-light transition-colors">
                  Partner With Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}