"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/azlab-carousel-1.jpg",
    alt: "Servicio a domicilio",
    title: "Servicio a domicilio",
    subtitle: "Un profesional va a tu hogar para tomar la muestra.",
  },
  {
    src: "/images/azlab-carousel-2.jpg",
    alt: "Laboratorio moderno",
    title: "Laboratorio certificado",
    subtitle: "Tecnología de vanguardia para resultados precisos y confiables.",
  },
  {
    src: "/images/azlab-carousel-4.jpg",
    alt: "Resultados digitales",
    title: "Resultados en 24-48 horas",
    subtitle: "Recibe tus resultados digitales sin salir de casa.",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-azlab-blue-500">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-azlab-blue-400 mt-2 text-base">
            Calidad y comodidad en cada paso del proceso
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
          style={{ height: "480px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={i === 0}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-azlab-blue-900/70 via-transparent to-transparent" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="text-white text-2xl sm:text-3xl font-bold drop-shadow-lg">
                  {slide.title}
                </h3>
                <p className="text-azlab-green-100 text-base mt-1 drop-shadow">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Siguiente"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-azlab-green-400 w-6 h-2.5"
                    : "bg-white/50 hover:bg-white/80 w-2.5 h-2.5"
                }`}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
