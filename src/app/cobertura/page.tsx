import React from "react";
import Link from "next/link";
import ContactCta from "@/components/ContactCta";
import { JURISDICCIONES, DELIVERY_LOCATIONS } from "@/data/locations";

export const metadata = {
  title: "Cobertura | AZ Lab",
  description:
    "Consulta las zonas, jurisdicciones y distritos con servicio de laboratorio clínico a domicilio en Santa Ana y Occidente.",
};

export default function CoberturaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="relative bg-azlab-blue-50 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-azlab-blue-100 to-white opacity-80" />
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-azlab-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-azlab-blue-900">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-azlab-green-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-3 transition-transform duration-300">
              <span className="material-symbols-outlined text-white text-3xl">
                map
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-azlab-blue-500 tracking-tight mb-6">
            Nuestra <span className="text-azlab-green-500">Cobertura</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl leading-8 text-azlab-blue-600 max-w-2xl mx-auto mb-4">
            Revisa nuestras jurisdicciones, distritos, tarifas y tiempos de
            traslado estimados para el servicio a domicilio.
          </p>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="py-20 flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-azlab-blue-900 mb-4">
              Jurisdicciones y Distritos de Cobertura
            </h2>
            <p className="text-azlab-blue-600 max-w-2xl mx-auto">
              Revisa si tu zona o distrito se encuentra dentro de nuestra área
              de servicio a domicilio.
            </p>
          </div>

          <div className="space-y-6">
            {JURISDICCIONES.map((jur) => {
              const districts = DELIVERY_LOCATIONS.filter(
                (l) => l.jurisdiccion === jur,
              );
              const hasFreePromo = districts.some((d) => d.freeThreshold);

              return (
                <div
                  key={jur}
                  className="bg-white rounded-3xl p-6 md:p-8 border border-azlab-blue-100/80 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-azlab-blue-50/50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110" />

                  {/* Card Header: Icon, Jurisdiction Name, Count, and Promo Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-azlab-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300">
                        <span className="material-symbols-outlined text-azlab-blue-500 text-2xl">
                          location_city
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-azlab-blue-900">
                          {jur}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 font-medium">
                          {districts.length}{" "}
                          {districts.length === 1
                            ? "distrito disponible"
                            : "distritos disponibles"}
                        </p>
                      </div>
                    </div>

                    {hasFreePromo && (
                      <span className="self-start sm:self-auto bg-azlab-green-50 text-azlab-green-700 text-xs font-semibold px-3.5 py-2 rounded-xl border border-azlab-green-200 flex items-center gap-1.5 shadow-2xs">
                        <span className="material-symbols-outlined text-base text-azlab-green-500">
                          local_shipping
                        </span>
                        Servicio a domicilio GRATIS en compras mayores a $35.00
                      </span>
                    )}
                  </div>

                  {/* Horizontal grid of district cards inside the jurisdiction */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                    {districts.map((loc) => (
                      <div
                        key={loc.id}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-azlab-blue-200 hover:bg-azlab-blue-50/40 transition-all duration-200"
                      >
                        <span className="material-symbols-outlined text-azlab-green-500 text-xl shrink-0">
                          check_circle
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-gray-900 font-semibold text-sm truncate">
                            {loc.distrito}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                            <span className="font-semibold text-azlab-blue-800 flex items-center gap-1">
                              <span className="material-symbols-outlined text-xs text-azlab-green-600">
                                payments
                              </span>
                              ${loc.fee.toFixed(2)}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-xs text-azlab-blue-400">
                                schedule
                              </span>
                              ~{loc.approxTimeMin} min
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Not Found CTA */}
          <div className="mt-20 border border-gray-100 bg-white rounded-3xl p-8 sm:p-10 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-6 text-left">
              <div className="w-16 h-16 bg-azlab-green-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-azlab-green-500 text-3xl">
                  contact_support
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-azlab-blue-900 mb-2">
                  ¿No encuentras tu distrito?
                </h3>
                <p className="text-azlab-blue-600">
                  Es posible que si podamos cubrir tu área o hacer una excepción
                  en zonas aledañas. Contáctanos directamente para confirmarlo.
                </p>
              </div>
            </div>
            <Link
              href="/contacto"
              className="shrink-0 bg-azlab-green-500 hover:bg-azlab-blue-500 text-white font-semibold flex items-center gap-2 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-md w-full md:w-auto justify-center"
            >
              <span className="material-symbols-outlined text-white">chat</span>
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
