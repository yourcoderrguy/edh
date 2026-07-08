import { createClient } from "@/lib/supabase/server";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default async function CasesPage() {
  // 1. Securely connect to Supabase on the server
  const supabase = await createClient();

  // 2. Fetch only PUBLISHED case studies
  const { data: cases, error } = await supabase
    .from("case_studies")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  return (
    <main className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-green tracking-widest uppercase block mb-2">Live Examples</span>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Nano Enterprise Case Repository</h1>
          <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Explore real-life nano business cases across Nigeria. Learn from documented success strategies, challenges, and scalable opportunities.
          </p>
        </div>

        {/* Database State Handling */}
        {!cases || cases.length === 0 ? (
          // Empty State (What shows before Abigael uploads the BOVAS story)
          <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center shadow-sm max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Repository Curating</h3>
            <p className="text-gray-500 mb-6 font-medium">
              We are currently compiling our first set of real-world nano enterprise case studies, including the BOVAS story. Check back soon.
            </p>
          </div>
        ) : (
          // Loaded State: Grid of Case Studies
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((study) => (
              <article key={study.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                {/* Fallback image block if no image is uploaded */}
                {study.image_url ? (
                  <img src={study.image_url} alt={study.title} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-brand-green/10 to-brand-gold/10 flex items-center justify-center">
                    <BookOpen size={48} className="text-brand-green/30 group-hover:scale-110 transition-transform" />
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-semibold">
                    <Calendar size={14} />
                    {new Date(study.created_at).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  {/* Extract a short snippet from the HTML content to show as a preview */}
                  <p className="text-sm text-gray-600 font-medium mb-6 line-clamp-3 flex-grow" 
                     dangerouslySetInnerHTML={{ __html: study.content.substring(0, 150) + "..." }} 
                  />
                  
                  <Link href={`/cases/${study.id}`} className="text-brand-green font-bold text-sm flex items-center gap-2 group-hover:text-brand-green-dark transition-colors mt-auto">
                    Read Full Case <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}