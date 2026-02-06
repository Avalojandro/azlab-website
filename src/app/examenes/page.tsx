export default function ExamenesPage() {
  const categories = [
    {
      title: "Hematología",
      exams: ["Hemograma Completo", "Plaquetas", "Reticulocitos", "VSG"],
    },
    {
      title: "Química Sanguínea",
      exams: [
        "Glucosa",
        "Colesterol",
        "Triglicéridos",
        "Ácido Úrico",
        "Creatinina",
      ],
    },
    {
      title: "Inmunología",
      exams: ["Prueba de Embarazo", "VIH", "Hepatitis B", "Hepatitis C"],
    },
    {
      title: "Urianálisis",
      exams: ["Examen General de Orina", "Urocultivo"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Nuestros <span className="text-blue-600">Exámenes</span>
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Ofrecemos una amplia gama de análisis clínicos con la más alta
          precisión y confiabilidad.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="px-6 py-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.exams.map((exam) => (
                  <li key={exam} className="flex items-start text-gray-600">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {exam}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <button className="text-blue-600 font-medium hover:text-blue-800 text-sm flex items-center">
                Más información
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
