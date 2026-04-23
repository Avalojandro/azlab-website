import React from "react";
import Link from "next/link";
import ContactCta from "@/components/ContactCta";

const REGIONS = [
  {
    name: "Santa Ana Centro",
    municipalities: [{ name: "Santa Ana", code: "02201" }],
  },
  {
    name: "Santa Ana Oeste",
    municipalities: [
      { name: "Candelaria de la Frontera", code: "02203" },
      { name: "Chalchuapa", code: "02205" },
      { name: "El Porvenir", code: "02208" },
      { name: "San Antonio Pajonal", code: "02212" },
      { name: "San Sebastián Salitrillo", code: "02215" },
      { name: "Santiago de la Frontera", code: "02217" },
    ],
  },
  {
    name: "Santa Ana Este",
    municipalities: [
      { name: "Coatepeque", code: "02204" },
      { name: "El Congo", code: "02207" },
    ],
  },
  {
    name: "Santa Ana Norte",
    municipalities: [
      { name: "Masahuat", code: "02210" },
      { name: "Metapán", code: "02211" },
      { name: "Santa Rosa Guachipilín", code: "02216" },
      { name: "Texistepeque", code: "02218" },
    ],
  },
];

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
            Revisa nuestro listado de municipios disponibles en Santa Ana.
          </p>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="py-20 flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-azlab-blue-900 mb-4">
              Zonas de Cobertura en Santa Ana
            </h2>
            <p className="text-azlab-blue-600 max-w-2xl mx-auto">
              Revisa si tu municipio se encuentra dentro de nuestra área de
              servicio a domicilio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {REGIONS.map((region) => (
              <div
                key={region.name}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-azlab-blue-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110" />

                <div className="w-14 h-14 bg-azlab-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="material-symbols-outlined text-azlab-blue-500 text-2xl">
                    location_city
                  </span>
                </div>
                <h3 className="text-xl font-bold text-azlab-blue-900 mb-6">
                  {region.name}
                </h3>

                <ul className="flex flex-col gap-4">
                  {region.municipalities.map((muni) => (
                    <li key={muni.name} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-azlab-green-500 text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <div>
                        <p className="text-gray-700 font-medium leading-tight mt-1">
                          {muni.name}
                        </p>
                        {/* <p className="text-azlab-blue-400 text-sm mt-0.5">
                          C.P.: {muni.code}
                        </p> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                  ¿No encuentras tu zona?
                </h3>
                <p className="text-azlab-blue-600">
                  Es posible que si podamos cubrir tu área o hacer una
                  excepción. Contáctanos directamente para confirmarlo.
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
