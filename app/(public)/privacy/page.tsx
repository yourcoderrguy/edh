export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>At the Entrepreneurship Development Hub (EDH), we collect information that you provide directly to us when registering for programmes, subscribing to newsletters, or filling out contact forms. This may include your name, email address, phone number, and institutional affiliation.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to deliver our capacity-building programmes, communicate updates regarding our research and initiatives, respond to partnership inquiries, and improve our platform's user experience.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at partnerships@entrepreneurshipdevhub.com.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}