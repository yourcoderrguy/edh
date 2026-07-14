import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

// Server-side Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Force dynamic rendering so it always pulls fresh data
export const dynamic = "force-dynamic";

export default async function SingleCaseStudyPage({ params }: { params: { id: string } }) {
  // Fetch the specific article by the ID in the URL
  const { data: article, error } = await supabase
    .from("case_studies")
    .select("*")
    .eq("id", params.id)
    .single();

  // If there's an error or the article is missing, show the 404 page
  if (error || !article) {
    notFound(); 
  }

  return (
    <main className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/cases" className="inline-flex items-center gap-2 text-brand-green font-bold hover:underline mb-8">
          <ArrowLeft size={20} /> Back to Knowledge Centre
        </Link>

        <article className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-10 md:p-16">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
              <Calendar size={18} className="text-brand-gold" />
              {new Date(article.created_at).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-10 leading-tight">
              {article.title}
            </h1>

            {/* This renders the rich HTML content saved from the React Quill editor securely */}
            <div 
              className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-brand-green"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </div>
    </main>
  );
}