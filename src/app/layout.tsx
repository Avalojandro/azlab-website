import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const rockinRecord = localFont({
  src: "./fonts/gomarice_rockin_record.ttf",
  variable: "--font-rockin-record",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AzLab - Laboratorio Clínico",
  description: "Servicios de laboratorio clínico confiables y precisos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} ${rockinRecord.variable} bg-azlab-blue-50/20 min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
