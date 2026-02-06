import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-azlab-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full  border-2 border-azlab-blue-500 text-azlab-blue-600 text-sm font-medium mb-6">
          <span className="text-azlab-blue-500">
            Servicio a domicilio en Santa Ana
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-azlab-blue-500 mb-6">
          Exámenes de laboratorio <br />
          <span className="text-azlab-green-500">a domicilio</span> en Santa Ana
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
          Profesionales certificados van a tu hogar. Resultados digitales en
          24-48 horas. Sin filas, sin esperas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            className="bg-white hover:bg-azlab-blue-500 text-azlab-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg border-2 border-azlab-blue-600 transition-all duration-200"
          >
            Agendar cita
          </Link>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600">
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
    </section>
  );
}
