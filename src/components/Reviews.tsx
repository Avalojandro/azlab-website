import React from "react";

interface Review {
  id: string;
  author: string;
  age: string;
  comment: string;
  rating: number;
  initial: string;
}

const reviews: Review[] = [
  {
    id: "1",
    author: "María García",
    age: "34 años",
    comment:
      "Excelente servicio. El profesional llegó puntual a mi casa y los resultados los recibí al día siguiente por correo.",
    rating: 5,
    initial: "M",
  },
  {
    id: "2",
    author: "Carlos Martínez",
    age: "45 años",
    comment:
      "Muy práctico para quienes trabajamos todo el día. Sin tener que hacer filas y con resultados confiables.",
    rating: 5,
    initial: "C",
  },
  {
    id: "3",
    author: "Ana López",
    age: "28 años",
    comment:
      "Me encanta que puedo agendar los exámenes de toda mi familia desde casa. El personal es muy amable.",
    rating: 5,
    initial: "A",
  },
  {
    id: "4",
    author: "Alejandro Avalos",
    age: "24 años",
    comment:
      "Profesionales muy amables y puntuales. Me sentí en confianza durante todo el proceso.",
    rating: 5,
    initial: "A",
  },
  {
    id: "5",
    author: "Sofía Ramírez",
    age: "67 años",
    comment:
      "Para personas de mi edad es difícil salir. Agradezco mucho que vengan a domicilio con toda la atención que merecemos.",
    rating: 5,
    initial: "S",
  },
  {
    id: "6",
    author: "Luis Pérez",
    age: "52 años",
    comment:
      "Como médico recomiendo AzLab a mis pacientes. La calidad de los resultados y la puntualidad son excepcionales.",
    rating: 5,
    initial: "L",
  },
];

const QuoteIcon = () => (
  <span className="text-azlab-green-500 text-3xl! material-symbols-outlined">
    reviews
  </span>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="shrink-0 w-80 p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white mx-3">
    <QuoteIcon />
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
        <p className="text-gray-400 text-xs">{review.age}</p>
      </div>
    </div>
  </div>
);

const Reviews: React.FC = () => {
  // Duplicate the list so the loop is seamless
  const loopedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-azlab-blue-900 mb-2">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-gray-500">
            Miles de familias en Santa Ana confían en nosotros
          </p>
        </div>
      </div>

      {/* Marquee wrapper */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="reviews-marquee flex" style={{ width: "max-content" }}>
          {loopedReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        .reviews-marquee {
          animation: marquee-scroll 30s linear infinite;
        }
        .reviews-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;
