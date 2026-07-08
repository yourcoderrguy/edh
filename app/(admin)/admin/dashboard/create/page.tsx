"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, Save, Send } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Import the React 19 compatible version
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function CreateCaseStudy() {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Editor toolbar configuration
  const modules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const handleSave = async (isPublished: boolean) => {
    if (!title || !content) {
      alert("Title and Content are required.");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("case_studies").insert([
      {
        title,
        author,
        image_url: imageUrl,
        content,
        is_published: isPublished,
      },
    ]);

    setIsSubmitting(false);

    if (error) {
      alert("Error saving case study: " + error.message);
    } else {
      router.push("/admin/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 py-4 px-6 sm:px-8 z-10 sticky top-0">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/admin/dashboard" className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-green transition-colors">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <div className="flex gap-3">
            <button 
              onClick={() => handleSave(false)}
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 flex items-center gap-2 disabled:opacity-50"
            >
              <Save size={16} /> Save Draft
            </button>
            <button 
              onClick={() => handleSave(true)}
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-bold text-white bg-brand-green rounded-lg shadow-sm hover:bg-brand-green-dark flex items-center gap-2 disabled:opacity-50"
            >
              <Send size={16} /> Publish Now
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8">
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Case Study Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., The BOVAS Success Story"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-brand-green focus:border-brand-green p-3 bg-gray-50 border"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Author (Optional)</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g., Abigael Ogunwoye"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-brand-green focus:border-brand-green p-3 bg-gray-50 border"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Featured Image URL (Optional)</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-brand-green focus:border-brand-green p-3 bg-gray-50 border"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Case Study Content *</label>
              <div className="bg-white">
                <ReactQuill 
                  theme="snow" 
                  value={content} 
                  onChange={setContent} 
                  modules={modules}
                  className="h-96 mb-12"
                />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}