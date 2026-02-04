import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Space Grotesk for that "Tech/Future" vibe
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GlobalBackground } from "@/components/layout/global-background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "UCSB Caliber",
  description: "AI-assisted course planning and assessment for UCSB Computer Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground flex flex-col min-h-screen relative`}
      >
        <GlobalBackground />
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
