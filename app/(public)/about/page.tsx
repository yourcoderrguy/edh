"use client";

import { motion } from "framer-motion";
import { Award, Eye, Target, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <main className="pt-32 pb-24 bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section: Who We Are */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold text-brand-gold tracking-widest uppercase block mb-3">About Us</span>
          <h1 className="text-4xl font-extrabold text-brand-green sm:text-5xl mb-6">Who We Are</h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-8 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Nano Business Development Hub is an innovative platform dedicated to empowering individuals—particularly students and young aspiring entrepreneurs—with the knowledge, skills, and practical insights required to establish and grow nano businesses in Nigeria. The Hub serves as a dynamic centre for entrepreneurship development, combining training, mentorship, and real-life business documentation to foster sustainable economic participation.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 bg-gray-50 border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={120} className="text-brand-green" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed font-medium">
                To become a leading platform for nano business development in Nigeria and beyond, driving inclusive economic growth through the promotion of small-scale, high-impact entrepreneurial ventures.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 bg-gray-50 border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={120} className="text-brand-gold" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed font-medium">
                To equip individuals with the capacity to create viable nano businesses through structured training, practical exposure, and access to real-life entrepreneurial knowledge, thereby contributing to job creation and wealth generation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Founder's Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-brand-green text-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[150%] rounded-full border-[1px] border-white/10 scale-150 rotate-12" />
            <div className="absolute top-[60%] -left-[20%] w-[50%] h-[100%] rounded-full border-[1px] border-brand-gold/20 scale-150 -rotate-45" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-12">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-brand-gold" size={24} />
                <span className="text-sm font-bold tracking-widest text-brand-gold uppercase block">The Driving Force</span>
              </div>
              
              <h2 className="text-4xl font-extrabold mb-2">Founder's Story</h2>
              <h3 className="text-2xl font-medium text-brand-gold-light mb-10">Abigael Ogunwoye</h3>
              
              <div className="space-y-6 text-white/90 text-base md:text-lg leading-relaxed font-medium columns-1 md:columns-2 gap-10">
                <p>
                  The vision behind Nano Business Development Hub was not born in theory—it was born from a deep reflection on a persistent reality: the widening gap between education and economic empowerment in Nigeria.
                </p>
                <p>
                  As an academic and researcher, Abigael Ogunwoye spent years engaging with students—bright, capable, and full of potential—yet uncertain about how to translate their knowledge into meaningful economic opportunities. Many possessed entrepreneurial dreams, but lacked the practical pathways, guidance, and confidence to bring those ideas to life.
                </p>
                <p>
                  Driven by a passion to create solutions rather than merely study problems, Abigael recognized that while large-scale ventures often require significant capital and complex structures, nano businesses offer a powerful alternative: simple, low-cost, and highly adaptable enterprises that individuals can start immediately with available resources.
                </p>
                <p>
                  To bridge the gap between theory and practice, Abigael developed the concept of a structured platform that would not only teach entrepreneurship but make it practical, relatable, and actionable. Central to this vision is her work, <span className="text-brand-gold font-bold italic">Nano Business in Nigeria</span>, a practical guide that integrates real-life experiences and actionable strategies.
                </p>
                <p>
                  Abigael’s approach is rooted in a simple but powerful belief: <strong className="text-white block mt-2 p-4 bg-white/10 rounded-xl border-l-4 border-brand-gold">Entrepreneurship should not be a distant ambition—it should be an immediate and achievable pathway.</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}