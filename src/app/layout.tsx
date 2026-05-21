import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { getProducts } from "../../services/api";
// 1. Importamos la función de la API

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 2. Ejecutamos la petición para probar la conexión
  // Pedimos la página 1 con 5 productos para no saturar la consola
  const data = await getProducts();

  // 3. Imprimimos en la terminal
  console.log(">>>> [DEBUG AZLAB] Respuesta de la API:");
  console.log(data);
  console.log("<<<< [FIN DEBUG]");

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
        <CartProvider>
          <Navbar />
          {/* Los datos están disponibles aquí si quisieras pasarlos por context,
              aunque usualmente se piden en las páginas específicas */}
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
