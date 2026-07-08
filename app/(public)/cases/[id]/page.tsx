import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define the expected parameter structure for Next.js dynamic routes
interface CaseStudyProps {
  params: {
    id: string;
  };
}

export default async function SingleCaseStudy({ params }: CaseStudyProps) {
  const supabase = await createClient();

  // Fetch the specific case study from Supabase
  const { data: caseStudy, error } = await supabase
    .from("case_studies")
    .select("*")
    .eq("id", params.id)
    .eq("is_published", true)
    .single();

  // If the database throws an error or the case doesn't exist, trigger a 404
  if (error || !caseStudy) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <Link 
          href="/cases" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-dark mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Repository
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {caseStudy.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-brand-gold" />
              {new Date(caseStudy.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            {caseStudy.author && (
              <div className="flex items-center gap-2">
                <User size={16} className="text-brand-gold" />
                {caseStudy.author}
              </div>
            )}
          </div>
        </header>

        {/* Featured Image (If available) */}
        {caseStudy.image_url && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-md relative w-full h-[400px]">
            <Image 
              src={caseStudy.image_url} 
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Dynamic Rich Text Content */}
        {/* We use a specific prose class configuration to ensure the HTML injected from the admin dashboard looks beautiful */}
        <article 
          className="prose prose-lg prose-green max-w-none text-gray-700 
            prose-headings:text-gray-900 prose-headings:font-bold 
            prose-a:text-brand-green hover:prose-a:text-brand-green-dark
            prose-img:rounded-xl prose-img:shadow-sm"
          dangerouslySetInnerHTML={{ __html: caseStudy.content }} 
        />
        
      </div>
    </main>
  );
}