"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "¿Cuál es el horario de atención a domicilio?",
    answer:
      "Nuestro servicio a domicilio está disponible de lunes a sábado de 6:00 AM a 10:00 AM. Recomendamos agendar con al menos 24 horas de anticipación.",
  },
  {
    question: "¿Cuánto tiempo tardan los resultados?",
    answer:
      "La mayoría de los resultados de rutina están listos el mismo día. Exámenes especializados pueden tomar de 24 a 48 horas.",
  },
  {
    question: "¿Qué zonas cubren en Santa Ana?",
    answer:
      "Cubrimos toda la zona urbana de Santa Ana y alrededores. Para ubicaciones específicas fuera del área urbana, por favor contáctenos para confirmar cobertura.",
  },
  {
    question: "¿Puedo pagar en efectivo?",
    answer:
      "Sí, aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias al momento del servicio.",
  },
  {
    question: "¿Necesito preparación especial para los exámenes?",
    answer:
      "Depende del examen. Generalmente se requiere ayuno de 8-12 horas para exámenes de sangre. Le daremos instrucciones específicas al momento de agendar su cita.",
  },
  {
    question: "¿Cómo accedo a mis resultados?",
    answer:
      "Los resultados se envían automáticamente a su correo electrónico y WhatsApp una vez procesados y validados por nuestro equipo.",
  },
];

const ChevronDown = ({ className }: { className?: string }) => (
  <span
    className={`material-symbols-outlined text-azlab-blue-900! ${className}`}
  >
    keyboard_arrow_down
  </span>
);

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-azlab-blue-900 mb-2">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-500">Resolvemos tus dudas más comunes</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white flex justify-between items-center focus:outline-none cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-azlab-blue-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
