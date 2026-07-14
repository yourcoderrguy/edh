export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-10">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Entrepreneurship Development Hub (EDH) website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Intellectual Property</h2>
              <p>All content published and made available on our site, including our research publications, training manuals, and digital resources, is the property of EDH and the site's creators. This includes, but is not limited to images, text, logos, documents, and downloadable files.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Contributions</h2>
              <p>Users who register for programmes or submit partnership inquiries must ensure that the information provided is accurate and truthful. EDH reserves the right to suspend or terminate engagements based on fraudulent information.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Modifications</h2>
              <p>EDH reserves the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on this site. Your decision to continue to visit and make use of the site after such changes have been made constitutes your formal acceptance of the new Terms of Service.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}