import HowItWorks from "@/components/HowItWorks";
import ContactCta from "@/components/ContactCta";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "A Domicilio | AZ Lab",
  description:
    "Agenda tus exámenes de laboratorio a domicilio en Santa Ana. Servicio seguro, rápido y confiable sin salir de tu hogar.",
};

export default function ADomicilioPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-azlab-blue-50 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-azlab-blue-100 to-white opacity-80" />
          {/* Abstract blobs */}
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-azlab-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
          <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-azlab-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-azlab-blue-900">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-azlab-green-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
              <span className="material-symbols-outlined text-white text-3xl">
                home_health
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-azlab-blue-500 tracking-tight mb-6">
            Laboratorio Clínico{" "}
            <span className="text-azlab-green-500">en tu Casa</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-8 text-azlab-blue-600 max-w-2xl mx-auto">
            Evita el tráfico y las salas de espera. Nuestro equipo de
            profesionales certificados llega hasta tu hogar u oficina para
            realizar tus exámenes con los mismos estándares de calidad y
            seguridad.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cobertura"
              className="bg-azlab-green-500 hover:bg-azlab-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Verificar cobertura
              <span className="material-symbols-outlined text-white">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-azlab-blue-900 mb-4">
              Ventajas de nuestro servicio
            </h2>
            <p className="text-azlab-blue-600 max-w-2xl mx-auto">
              Diseñado para brindarte la mayor comodidad y seguridad sin
              comprometer la calidad de tus resultados médicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-azlab-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-azlab-blue-500 text-2xl">
                  local_shipping
                </span>
              </div>
              <h3 className="text-xl font-bold text-azlab-blue-900 mb-3">
                Amplia Cobertura
              </h3>
              <p className="text-azlab-blue-600 leading-relaxed">
                Llegamos a toda el área metropolitana de Santa Ana y zonas
                aledañas. Acercamos la salud a donde tú estés.
              </p>
            </div>
            {/* Box 2 */}
            <div className="border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-azlab-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-azlab-blue-500 text-2xl">
                  schedule
                </span>
              </div>
              <h3 className="text-xl font-bold text-azlab-blue-900 mb-3">
                Horarios Flexibles
              </h3>
              <p className="text-azlab-blue-600 leading-relaxed">
                Adaptamos nuestro servicio a tu agenda. Realizamos tomas de
                muestras desde temprano para exámenes que requieren ayuno
                prolongado.
              </p>
            </div>
            {/* Box 3 */}
            <div className="border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-azlab-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-azlab-blue-500 text-2xl">
                  payments
                </span>
              </div>
              <h3 className="text-xl font-bold text-azlab-blue-900 mb-3">
                Facilidad de Pago
              </h3>
              <p className="text-azlab-blue-600 leading-relaxed">
                Aceptamos pagos en efectivo, transferencia bancaria, o tarjeta
                directamente en tu domicilio al momento de la toma de muestra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCta />
    </main>
  );
}
