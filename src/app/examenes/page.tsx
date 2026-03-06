"use client";

import { useState } from "react";
import Link from "next/link";

interface Exam {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  duration: string;
  price: string;
}

const allExams: Exam[] = [
  {
    id: "1",
    name: "Glucosa en Ayunas",
    category: "Química Sanguínea",
    badge: "A Domicilio",
    description:
      "Mide los niveles de azúcar en sangre para detectar diabetes o prediabetes.",
    duration: "Resultados: 24 horas",
    price: "$8.00",
  },
  {
    id: "2",
    name: "Hemograma Completo",
    category: "Hematología",
    badge: "A Domicilio",
    description:
      "Evaluación completa de células sanguíneas: glóbulos rojos, blancos y plaquetas.",
    duration: "Resultados: 24 horas",
    price: "$12.00",
  },
  {
    id: "3",
    name: "Perfil Lipídico",
    category: "Perfiles/Paquetes",
    badge: "A Domicilio",
    description:
      "Mide colesterol total, HDL, LDL y triglicéridos para evaluar riesgo cardiovascular.",
    duration: "Resultados: 24 horas",
    price: "$25.00",
  },
  {
    id: "4",
    name: "Examen General de Orina",
    category: "Ureanálisis",
    badge: "A Domicilio",
    description:
      "Análisis completo de orina para detectar infecciones, diabetes y problemas renales.",
    duration: "Resultados: 24 horas",
    price: "$6.00",
  },
  {
    id: "5",
    name: "TSH (Tiroides)",
    category: "Hormonas",
    badge: "A Domicilio",
    description:
      "Evalúa la función de la glándula tiroides para detectar hiper o hipotiroidismo.",
    duration: "Resultados: 48 horas",
    price: "$18.00",
  },
  {
    id: "6",
    name: "Creatinina",
    category: "Química Sanguínea",
    badge: "A Domicilio",
    description:
      "Mide la función renal determinando los niveles de creatinina en sangre.",
    duration: "Resultados: 24 horas",
    price: "$8.00",
  },
  {
    id: "7",
    name: "Ácido Úrico",
    category: "Química Sanguínea",
    badge: "A Domicilio",
    description:
      "Detecta niveles elevados asociados a gota y problemas renales.",
    duration: "Resultados: 24 horas",
    price: "$8.00",
  },
  {
    id: "8",
    name: "Perfil Completo de Salud",
    category: "Perfiles/Paquetes",
    badge: "A Domicilio",
    description:
      "Evaluación integral con 15+ parámetros para un chequeo completo de tu salud.",
    duration: "Resultados: 72 horas",
    price: "$85.00",
  },
  {
    id: "9",
    name: "Perfil Hepático",
    category: "Perfiles/Paquetes",
    badge: "A Domicilio",
    description: "Evalúa la función del hígado con múltiples indicadores.",
    duration: "Resultados: 24 horas",
    price: "$35.00",
  },
  {
    id: "10",
    name: "T3 y T4 Libre",
    category: "Hormonas",
    badge: "A Domicilio",
    description: "Complementa el TSH para evaluación completa de tiroides.",
    duration: "Resultados: 48 horas",
    price: "$35.00",
  },
  {
    id: "11",
    name: "Perfil Básico de Salud",
    category: "Perfiles/Paquetes",
    badge: "A Domicilio",
    description:
      "Paquete esencial: hemograma, glucosa, creatinina y perfil lipídico.",
    duration: "Resultados: 48 horas",
    price: "$45.00",
  },
  {
    id: "12",
    name: "Urocultivo",
    category: "Ureanálisis",
    badge: "A Domicilio",
    description:
      "Detecta bacterias en orina e identifica el antibiótico adecuado.",
    duration: "Resultados: 72-96 horas",
    price: "$20.00",
  },
];

const categories = [
  "Todos",
  "Química Sanguínea",
  "Hematología",
  "Ureanálisis",
  "Hormonas",
  "Perfiles/Paquetes",
];

export default function ExamenesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Filter exams based on search and category
  const filteredExams = allExams.filter((exam) => {
    const matchesSearch =
      exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "Todos" || exam.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryIcon = (category: string) => {
    switch (category) {
      case "Química Sanguínea":
        return "spo2";
      case "Hematología":
        return "hematology";
      case "Ureanálisis":
        return "urology";
      case "Hormonas":
        return "mood_heart";
      case "Perfiles/Paquetes":
        return "local_hospital";
      case "Todos":
        return "health_cross";
      default:
        return "local_hospital";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-azlab-blue-500 sm:text-5xl sm:tracking-tight lg:text-5xl">
          Catálogo de exámenes
        </h1>
        <p className="text-gray-600 mb-6 mt-3">
          Encuentra el examen que necesitas. Todos disponibles a domicilio en
          Santa Ana.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar exámenes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-azlab-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 cursor-pointer ${
              activeCategory === category
                ? "bg-azlab-blue-500 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="material-symbols-outlined mr-2">
              {handleCategoryIcon(category)}
            </span>
            {category}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-500 mb-6">
        {filteredExams.length} exámenes encontrados
      </p>

      {/* Exam Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredExams.map((exam) => (
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
                <span className="text-xs text-azlab-green-600 bg-azlab-green-50 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                  {exam.badge}
                </span>
              </div>
              <p className="text-sm text-azlab-blue-600 mb-3">
                {exam.description}
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2 text-sm text-azlab-blue-500 mb-4">
              <span className="material-symbols-outlined text-base">
                schedule
              </span>
              <span>{exam.duration}</span>
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-azlab-blue-100">
              <div>
                <p className="text-xs text-azlab-blue-500">Precio</p>
                <p className="text-2xl font-bold text-azlab-blue-900">
                  {exam.price}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-azlab-blue-50 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-azlab-green-600">
                    shopping_cart
                  </span>
                </button>
                <Link
                  href={`/examenes/${exam.id}`}
                  className="text-azlab-green-600 hover:text-azlab-green-700 font-semibold flex items-center gap-1 transition-colors"
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

      {/* No Results */}
      {filteredExams.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No se encontraron exámenes que coincidan con tu búsqueda.
          </p>
        </div>
      )}
    </div>
  );
}
