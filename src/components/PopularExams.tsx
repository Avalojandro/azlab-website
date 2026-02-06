import Link from "next/link";

interface Exam {
  id: string;
  name: string;
  badge: string;
  description: string;
  duration: string;
  price: string;
}

const exams: Exam[] = [
  {
    id: "1",
    name: "Glucosa en Ayunas",
    badge: "A Domicilio",
    description:
      "Mide los niveles de azúcar en sangre para detectar diabetes o prediabetes.",
    duration: "Resultados: 24 horas",
    price: "$8.00",
  },
  {
    id: "2",
    name: "Hemograma Completo",
    badge: "A Domicilio",
    description:
      "Evaluación completa de célula sanguíneas: glóbulos rojos, blancos y plaquetas.",
    duration: "Resultados: 24 horas",
    price: "$12.00",
  },
  {
    id: "3",
    name: "Perfil Lipídico",
    badge: "A Domicilio",
    description:
      "Mide colesterol total, HDL, LDL y triglicéridos para evaluar el riesgo cardiovascular.",
    duration: "Resultados: 24 horas",
    price: "$25.00",
  },
  {
    id: "4",
    name: "Examen General de Orina",
    badge: "A Domicilio",
    description:
      "Análisis completo de orina para detectar infecciones, diabetes y problemas renales.",
    duration: "Resultados: 24 horas",
    price: "$6.00",
  },
];

export default function PopularExams() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Exámenes populares
            </h2>
            <p className="text-gray-600">
              Los más solicitados por nuestros pacientes
            </p>
          </div>
          <Link
            href="/examenes"
            className="text-azlab-blue-500 hover:text-azlab-blue-600 font-semibold flex items-center gap-1 transition-colors"
          >
            Ver todos
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-lg flex-1">
                    {exam.name}
                  </h3>
                  <span className="text-xs text-azlab-green-600 bg-azlab-green-50 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    {exam.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{exam.description}</p>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{exam.duration}</span>
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500">Precio</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {exam.price}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                  <Link
                    href={`/examenes/${exam.id}`}
                    className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-1 transition-colors"
                  >
                    Ver
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
