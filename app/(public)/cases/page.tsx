import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";

// Initialize Supabase Client for server-side fetching
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Force dynamic rendering so it always fetches the latest published cases
export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
  // Fetch case studies from the database, ordered by newest first
  const { data: cases, error } = await supabase
    .from("case_studies")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <span className="text-xs md:text-sm font-bold text-brand-green tracking-widest uppercase block mb-2 md:mb-3">
          Knowledge Centre
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
          Case Studies & Articles
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Explore practical insights, research findings, and success stories from sustainable nano enterprises across Africa.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {error || !cases || cases.length === 0 ? (
          <div className="text-center py-16 md:py-20 bg-white rounded-2xl md:rounded-3xl border border-gray-100">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-gray-300 mx-auto mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">No Articles Yet</h3>
            <p className="text-sm md:text-base text-gray-500">Check back soon for new research and case studies.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cases.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="p-6 md:p-8 flex-grow">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                    <Calendar size={16} />
                    {new Date(article.created_at).toLocaleDateString()}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 line-clamp-2">
                    {article.title}
                  </h2>
                  <div 
                    className="text-sm md:text-base text-gray-600 line-clamp-3 mb-4 md:mb-6"
                    dangerouslySetInnerHTML={{ __html: article.content.substring(0, 150) + "..." }}
                  />
                </div>
                <div className="px-6 md:px-8 py-4 bg-gray-50 border-t border-gray-100 mt-auto">
                  <Link href={`/cases/${article.id}`} className="text-brand-green font-bold text-sm md:text-base flex items-center gap-2 hover:text-brand-green-dark transition-colors">
                    Read Full Article <ArrowRight size={16} />
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