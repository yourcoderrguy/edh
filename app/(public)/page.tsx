"use client";

import { motion } from "framer-motion";
import { Rocket, BarChart3, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  // Animation variants for scannability and clean layout entry
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 overflow-x-hidden">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col items-center text-center">
        {/* Animated Background Blob representing sustainable prosperity */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-brand-green/5 rounded-full blur-3xl -z-10" />

        {/* Logo/Rocket Micro-Interaction */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="mb-6 p-4 bg-brand-gold/10 rounded-full text-brand-gold flex items-center justify-center"
        >
          <Rocket size={40} className="animate-float" />
        </motion.div>

        {/* Slogan with high-contrast text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-extrabold text-brand-green tracking-tight leading-none mb-6"
        >
          EMPOWER. INNOVATE. <br className="hidden sm:block" />
          <span className="text-brand-gold">BUILD TOMORROW.</span>
        </motion.h1>

        {/* Core Vision Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-2xl text-base sm:text-xl text-gray-600 mb-10 font-medium"
        >
          Transforming innovative ideas into successful enterprises through structured mentorship, 
          actionable research, and sustainable economic development.
        </motion.p>

        {/* Responsive CTA Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="/cases" className="w-full sm:w-auto">
            <button className="w-full bg-brand-green text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-brand-green-dark transition-all flex items-center justify-center gap-2 group">
              Explore Case Repository
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/about" className="w-full sm:w-auto">
            <button className="w-full bg-white text-gray-700 font-semibold px-8 py-4 rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              Our Story
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 📊 CORE FOCUS AREAS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-green mb-4">Our Core Focus Areas</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1: Training & Capacity Development */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-md border border-gray-50 hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6 font-bold">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Capacity Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Providing practical, hands-on training designed to help individuals start nano businesses with minimal capital.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Nano Business Development Initiative */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-md border border-gray-50 hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nano Business Development Initiative</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A flagship programme aimed at equipping students with entrepreneurial skills through structured learning and real-world exposure.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Nano Enterprise Case Repository */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-md border border-gray-50 hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nano Enterprise Case Repository</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building a rich database of real-life nano business cases across Nigeria to support learning, research, and policy development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 🟩 WHY NANO BUSINESSES IMPACT SECTION */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        {/* Subtle decorative arc imitating the logo structure */}
        <div className="absolute inset-0 border-[1px] border-white/10 rounded-full scale-150 translate-y-1/3 -z-0" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block mb-4">Economic Impact</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Nano Businesses?</h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Nano businesses represent a powerful pathway to tackling unemployment and fostering inclusive economic growth in Nigeria. 
              With low startup requirements and high scalability potential, they provide an accessible entry point into entrepreneurship for students and young graduates.
            </p>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

    </main>
  );
}