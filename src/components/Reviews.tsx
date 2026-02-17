import React from "react";

interface Review {
  id: string;
  author: string;
  role: string;
  comment: string;
  rating: number;
  initial: string;
}

const reviews: Review[] = [
  {
    id: "1",
    author: "María García",
    role: "Paciente frecuente",
    comment:
      "Excelente servicio. El profesional llegó puntual a mi casa y los resultados los recibí al día siguiente por correo.",
    rating: 5,
    initial: "M",
  },
  {
    id: "2",
    author: "Carlos Martínez",
    role: "Empresario",
    comment:
      "Muy práctico para quienes trabajamos todo el día. Sin tener que hacer filas y con resultados confiables.",
    rating: 5,
    initial: "C",
  },
  {
    id: "3",
    author: "Ana López",
    role: "Madre de familia",
    comment:
      "Me encanta que puedo agendar los exámenes de toda mi familia desde casa. El personal es muy amable.",
    rating: 5,
    initial: "A",
  },
];

const QuoteIcon = () => (
  <span className="text-azlab-green-500 text-3xl! material-symbols-outlined">
    reviews
  </span>
);

const Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-azlab-blue-900 mb-2">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-gray-500">
            Miles de familias en Santa Ana confían en nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <QuoteIcon />
              {/* <div className="flex text-orange-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ★
                  </span>
                ))}
              </div> */}
              <p className="text-gray-600 mb-8 min-h-[80px]">
                &quot;{review.comment}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-azlab-green-50 flex items-center justify-center text-azlab-green-700 font-bold mr-3">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-azlab-blue-900 text-sm">
                    {review.author}
                  </h4>
                  <p className="text-gray-400 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
