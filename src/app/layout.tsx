import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wheel of Fortune",
  description: "A simple wheel of fortune app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white flex flex-col h-screen justify-between`}
        // style={{ backgroundImage: "url('/bg.png')  " }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
