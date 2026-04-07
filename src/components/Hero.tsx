import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-azlab-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="text-left">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-azlab-blue-500 text-azlab-blue-600 text-sm font-medium mb-6">
            <span className="text-azlab-blue-500">
              Cuidamos de ti y tu familia
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-5xl lg:text-5xl font-bold text-azlab-blue-500 mb-6 leading-tight">
            Exámenes de laboratorio <br />
            <span className="text-azlab-green-500">a domicilio</span> en Santa
            Ana
          </h1>

          {/* Description */}
          <p className="text-azlab-blue-600 text-lg mb-8 max-w-2xl">
            Manejaremos la entrega de resultados con resultados desde el mismo
            día hasta las 48 horas en pruebas más especializadas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/examenes"
              className="bg-azlab-green-500 hover:bg-azlab-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Ver exámenes
              <span className="material-symbols-outlined text-white">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/contacto"
              className="bg-white hover:bg-azlab-blue-500 text-azlab-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg border-2 border-azlab-blue-600 transition-all duration-200 text-center"
            >
              Contáctanos
            </Link>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center text-sm text-azlab-blue-600">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-azlab-green-500">
                workspace_premium
              </span>
              <span>Profesionales certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-azlab-green-500">
                schedule
              </span>
              <span>Resultados en 24-48h</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full">
          <Image
            src="/images/azlab-hero.png"
            alt="AzLab Hero Image"
            fill
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
