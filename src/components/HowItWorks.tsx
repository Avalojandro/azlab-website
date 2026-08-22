import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Elige tus exámenes",
      description:
        "Selecciona los exámenes que necesitas de nuestro catálogo y agrégalos al carrito.",
      icon: (
        <span className="material-symbols-outlined text-azlab-green-500">
          shopping_cart
        </span>
      ),
    },
    {
      id: 2,
      title: "Indica tu dirección",
      description:
        "Ingresa tu ubicación en Santa Ana para que nuestro equipo llegue a tu hogar.",
      icon: (
        <span className="material-symbols-outlined text-azlab-green-500">
          location_on
        </span>
      ),
    },
    {
      id: 3,
      title: "Agenda y paga",
      description:
        "Elige fecha y hora. Paga en línea o en efectivo al momento de la visita.",
      icon: (
        <span className="material-symbols-outlined text-azlab-green-500">
          calendar_today
        </span>
      ),
    },
  ];

  const features = [
    {
      title: "Profesionales certificados",
      description: "Personal capacitado con licencia del CSSP.",
      icon: (
        <span className="material-symbols-outlined text-azlab-green-500">
          verified_user
        </span>
      ),
    },
    {
      title: "Resultados confiables",
      description: "Control de calidad en cada análisis",
      icon: (
        <span className="material-symbols-outlined text-azlab-green-500">
          medical_information
        </span>
      ),
    },
    {
      title: "Atención a domicilio",
      description: "Comodidad y privacidad en tu hogar",
      icon: (
        <span className="material-symbols-outlined text-azlab-green-500">
          home
        </span>
      ),
    },
    {
      title: "Soporte por WhatsApp",
      description: "Resolvemos tus dudas al instante",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          stroke="currentColor"
          strokeWidth="0.4"
          fill="currentColor"
          className="bi bi-whatsapp text-azlab-green-500"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-azlab-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Cómo funciona */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-azlab-blue-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-azlab-blue-600">
              En tres sencillos pasos, agenda tu examen a domicilio
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-azlab-blue-200" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col text-azlab-blue-900 items-center text-center"
                >
                  <div className="relative mb-6">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-azlab-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold ring-4 ring-white">
                      {step.id}
                    </div>
                    {/* Icon Container */}
                    <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-azlab-blue-100 flex items-center justify-center transform transition-transform hover:scale-105">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-azlab-blue-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-azlab-blue-600 text-sm max-w-[250px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Por qué elegirnos */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-azlab-blue-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-azlab-blue-600">
              Más de 10 años de experiencia nos respaldan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-azlab-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-azlab-green-50 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-azlab-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-azlab-blue-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
