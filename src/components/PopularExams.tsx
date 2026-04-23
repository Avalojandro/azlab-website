import Link from "next/link";

interface Exam {
  id: string;
  name: string;
  category: string;
  price: string;
}

const exams: Exam[] = [
  {
    id: "1",
    name: "Glucosa en Ayunas",
    category: "Química Sanguínea",
    price: "$8.00",
  },
  {
    id: "2",
    name: "Hemograma Completo",
    category: "Hematología",
    price: "$12.00",
  },
  {
    id: "3",
    name: "Perfil Lipídico",
    category: "Química Sanguínea",
    price: "$25.00",
  },
  {
    id: "4",
    name: "Examen General de Orina",
    category: "Ureanálisis",
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
            <h2 className="text-3xl font-bold text-azlab-blue-900 mb-2">
              Exámenes y perfiles más solicitados
            </h2>
          </div>
          <Link
            href="/examenes"
            className="group text-azlab-blue-500 hover:text-azlab-blue-600 font-semibold flex items-center gap-1 transition-colors"
          >
            Ver todos
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
              className="bg-white border border-azlab-blue-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-azlab-blue-900 text-lg flex-1">
                    {exam.name}
                  </h3>
                </div>
                <p className="text-sm text-azlab-blue-400 font-medium mb-1">
                  {exam.category}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-azlab-blue-100">
                <div>
                  <p className="text-xs text-azlab-blue-500">Precio</p>
                  <p className="text-2xl font-bold text-azlab-blue-900">
                    {exam.price}
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  {/* Add button (commented to match ExamenesClient) */}
                  {/* <button className="px-2 hover:bg-azlab-blue-50 rounded-lg transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-azlab-green-600 pt-2">
                      add
                    </span>
                  </button> */}
                  <Link
                    href={`/examenes/${exam.id}`}
                    className="text-azlab-green-600 hover:text-azlab-green-700 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="text-sm">Detalles</span>
                    <span className="material-symbols-outlined text-azlab-green-600">
                      arrow_outward
                    </span>
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
