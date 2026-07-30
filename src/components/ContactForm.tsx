"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje no puede estar vacío";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    // Filter non-digit characters if phone field
    const processedValue = name === "phone" ? value.replace(/\D/g, "") : value;

    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const whatsappNumber = "50375791475"; // Contacto AZ LAB

      const messageParts = [
        "*CONSULTA DESDE LA WEB - AZ LAB*",
        "",
        `*Nombre:* ${formData.name}`,
      ];

      if (formData.phone.trim()) {
        messageParts.push(`*Teléfono:* ${formData.phone}`);
      }

      if (formData.email.trim()) {
        messageParts.push(`*Correo:* ${formData.email}`);
      }

      messageParts.push("", "*Mensaje:*", formData.message);

      const message = messageParts.join("\n");
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Error al abrir WhatsApp:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col items-center text-center justify-center min-h-[400px] animate-fade-in">
        <div className="w-20 h-20 bg-azlab-green-50 rounded-full flex items-center justify-center mb-6 animate-scale-up">
          <span className="material-symbols-outlined text-azlab-green-500 text-5xl font-bold">
            check_circle
          </span>
        </div>
        <h2 className="text-3xl font-bold text-azlab-blue-900 mb-3">
          ¡Listo para enviar!
        </h2>
        <p className="text-gray-600 max-w-sm mb-8 leading-relaxed">
          Se ha abierto una nueva ventana de WhatsApp con tu mensaje listo para
          ser enviado a nuestro equipo.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 bg-azlab-blue-500 text-white font-semibold rounded-full hover:bg-azlab-green-600 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-azlab-green-500 cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-azlab-blue-900 mb-6">
        Envíanos un mensaje por WhatsApp
      </h2>
      <form noValidate onSubmit={handleSubmit} className="space-y-6">
        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-700 text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-red-500 text-lg">
              error
            </span>
            Hubo un error al abrir WhatsApp. Por favor intenta de nuevo.
          </div>
        )}

        {/* Nombre */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-azlab-blue-900"
          >
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border shadow-sm h-10 px-3 bg-white transition-colors focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-azlab-green-500 focus:ring-azlab-green-500"
            }`}
            placeholder="Tu nombre completo"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-azlab-blue-900"
          >
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm h-10 px-3 bg-white transition-colors focus:outline-none focus:ring-2 focus:border-azlab-green-500 focus:ring-azlab-green-500"
            placeholder="Ej. 71234567"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-azlab-blue-900"
          >
            Correo electrónico (opcional)
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm h-10 px-3 bg-white transition-colors focus:outline-none focus:ring-2 focus:border-azlab-green-500 focus:ring-azlab-green-500"
            placeholder="tu@email.com"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-azlab-blue-900"
          >
            Mensaje o consulta <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border shadow-sm p-3 bg-white transition-colors focus:outline-none focus:ring-2 ${
              errors.message
                ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-azlab-green-500 focus:ring-azlab-green-500"
            }`}
            placeholder="Escribe aquí tus dudas o consultas..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-md text-base font-semibold text-white bg-azlab-green-500 hover:bg-azlab-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azlab-green-500 transition-colors cursor-pointer hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-whatsapp shrink-0"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
          Enviar por WhatsApp
        </button>
      </form>
    </div>
  );
}
