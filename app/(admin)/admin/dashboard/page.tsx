"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut, Plus, Edit, Trash2, BookOpen, CheckCircle, XCircle } from "lucide-react";

// Define the structure of our database rows
interface CaseStudy {
  id: string;
  title: string;
  author: string;
  is_published: boolean;
  created_at: string;
}

export default function AdminDashboard() {
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  // Fetch all case studies (both published and drafts) when the dashboard loads
  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("case_studies")
      .select("id, title, author, is_published, created_at")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setCases(data);
    }
    setIsLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const deleteCase = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this case study? This cannot be undone.")) return;
    
    const { error } = await supabase.from("case_studies").delete().eq("id", id);
    if (!error) {
      setCases(cases.filter((c) => c.id !== id));
    } else {
      alert("Error deleting case study.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Admin Top Navigation */}
      <header className="bg-white border-b border-gray-200 shadow-sm py-4 px-6 sm:px-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="bg-brand-green p-2 rounded-lg text-brand-gold">
            <BookOpen size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">EDH Admin</h1>
            <span className="text-xs font-semibold text-gray-500">Content Management System</span>
          </div>
        </div>
        
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors"
        >
          <LogOut size={18} />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Dashboard Header & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Case Repository</h2>
            <p className="text-sm text-gray-500 mt-1">Manage your nano enterprise case studies and publications.</p>
          </div>
          
         <button 
  onClick={() => router.push("/admin/dashboard/create")}
  className="bg-brand-green hover:bg-brand-green-dark text-white px-5 py-2.5 rounded-lg font-bold shadow-sm flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
>
  <Plus size={18} />
  Create New Case
</button>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Author</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date Created</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400 font-medium">
                      Loading repository data...
                    </td>
                  </tr>
                ) : cases.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <BookOpen size={32} className="mb-3 opacity-50" />
                        <p className="font-medium text-gray-600">No case studies found.</p>
                        <p className="text-xs mt-1">Click "Create New Case" to add your first entry.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  cases.map((caseStudy) => (
                    <tr key={caseStudy.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">{caseStudy.title}</td>
                      <td className="px-6 py-4">{caseStudy.author || "—"}</td>
                      <td className="px-6 py-4">
                        {caseStudy.is_published ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                            <CheckCircle size={14} /> Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                            <XCircle size={14} /> Draft
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {new Date(caseStudy.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-3">
                          <button 
                            onClick={() => alert(`Edit ${caseStudy.id}`)}
                            className="text-gray-400 hover:text-brand-green transition-colors"
                            title="Edit Case"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => deleteCase(caseStudy.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            title="Delete Case"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}