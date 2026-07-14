import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer"; // Import the new Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Entrepreneurship Development Hub (EDH)',
  description: 'Africa’s Centre for Nano Enterprise Development and Sustainability. Empowering Nano Enterprises. Transforming Communities. Building Sustainable Economies.',
  keywords: [
    'Nano enterprise development', 
    'Nano business Nigeria', 
    'Entrepreneurship training Nigeria', 
    'Digital entrepreneurship Nigeria', 
    'Business incubation Nigeria', 
    'Entrepreneurship development hub', 
    'Sustainable enterprise development'
  ],
  authors: [{ name: 'Dr. Abigael Adewuni Ogunwoye' }, { name: 'Dr. Olubode Olusegun Oladele' }],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased flex flex-col min-h-screen`}>
        {/* Global Navigation */}
        <Navbar />
        
        {/* Main Page Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Global Premium Footer */}
        <Footer />
      </body>
    </html>
  );
}