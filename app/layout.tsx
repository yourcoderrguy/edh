import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer"; // Import the new Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EDH | Entrepreneurship Development Hub",
  description: "Empower, Innovate, Build Tomorrow. Nurturing entrepreneurs and driving sustainable economic development.",
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