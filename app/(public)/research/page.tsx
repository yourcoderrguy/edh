import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { BookOpen, GraduationCap, Award, Compass, HeartHandshake, ArrowRight } from "lucide-react";

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const dynamic = "force-dynamic";

export default async function ResearchPage() {
  // Fetch the latest 3 publications to show on the research feed
  const { data: publications } = await supabase
    .from("case_studies")
    .select("*")
    .limit(3)
    .order("created_at", { ascending: false });

  return (
    <main className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-sm font-bold text-brand-green tracking-widest uppercase block mb-3">
          Research & Innovation
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Generating Knowledge. Driving Innovation.
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          EDH is committed to advancing knowledge, innovation, and practical solutions in the field of Nano Enterprise Development and Sustainability across Africa.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Research Focus Grid */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Our Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Compass className="text-brand-green mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nano Enterprise Development</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Exploring informal enterprise transformation, creation pathways, growth prospects, and sustainability frameworks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <GraduationCap className="text-brand-green mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Human Capital & Education</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Investigating how specialized competencies, experiential learning, and education frameworks influence small business success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Award className="text-brand-green mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Green Innovation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Empowering businesses to adapt sustainable models, green practices, and circular economy strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Flagship Book Spotlight */}
        <section className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3">
            <span className="text-xs font-bold text-brand-gold tracking-wider uppercase block mb-3">Flagship Knowledge Contribution</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nano Business in Nigeria: Principles, Practices, and Prospects</h2>
            <p className="text-gray-600 mb-2 italic">A Practical Entrepreneurship Manual with Success Stories from Successful Entrepreneurs</p>
            <p className="text-gray-500 text-sm mb-6">Co-Author: Dr. Abigael Adewuni Ogunwoye | Co-Author: Dr. Olubode Olusegun Oladele</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              This pioneering book serves as a cornerstone for entrepreneurship development in Nigeria, combining academic principles with tested strategies and real-world success profiles.
            </p>
            <a 
              href="https://amazon.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Get it on Amazon <ArrowRight size={16} />
            </a>
          </div>
          <div className="lg:w-1/3 bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
            <BookOpen size={64} className="text-brand-gold mx-auto mb-4" />
            <span className="font-extrabold text-gray-900 block text-lg">Now Available</span>
            <p className="text-xs text-gray-500 mt-1">A vital resource for students, researchers, educators, and entrepreneurs.</p>
          </div>
        </section>

        {/* Dynamic Publications Feed */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Recent Publications & Articles</h2>
          {!publications || publications.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-500">No active research papers have been published yet. Please check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {publications.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                    <div 
                      className="text-gray-500 text-sm line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{ __html: item.content.substring(0, 100) + "..." }}
                    />
                  </div>
                  <Link href={`/cases/${item.id}`} className="text-brand-green text-sm font-bold flex items-center gap-2 hover:underline mt-4">
                    Read Paper <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Research Partnerships CTA */}
        <section className="bg-brand-green rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <HeartHandshake size={48} className="text-brand-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Collaborate on Research</h2>
            <p className="text-brand-green-100 mb-8 text-sm md:text-base leading-relaxed">
              We welcome universities, policy institutes, government agencies, and research partners to collaborate on joint studies and data-driven projects.
            </p>
            <Link href="/partnerships" className="bg-white text-brand-green hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors inline-block text-sm md:text-base">
              Explore Research Partnerships
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}