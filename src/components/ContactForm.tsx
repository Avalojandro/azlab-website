"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo no es válido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje no puede estar vacío";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const subject = `Contacto AZ Lab - ${formData.name}`;
      const body = `Nombre: ${formData.name}\nCorreo de contacto: ${formData.email}\n\nMensaje:\n${formData.message}`;
      const mailtoUrl = `mailto:avalojandro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default mail client
      window.location.href = mailtoUrl;

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error al abrir el cliente de correo:", err);
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
          ¡Mensaje Enviado!
        </h2>
        <p className="text-gray-600 max-w-sm mb-8 leading-relaxed">
          Gracias por escribirnos. Tu mensaje ha sido enviado correctamente y te responderemos a <span className="font-semibold text-azlab-blue-500">avalojandro@gmail.com</span> lo antes posible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 bg-azlab-blue-500 text-white font-semibold rounded-full hover:bg-azlab-green-600 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-azlab-green-500"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-azlab-blue-900 mb-6">
        Envíanos un mensaje
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-700 text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-red-500 text-lg">error</span>
            Hubo un error al enviar el mensaje. Por favor intenta de nuevo.
          </div>
        )}

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-azlab-blue-900"
          >
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border shadow-sm h-10 px-3 bg-white transition-colors focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-azlab-green-500 focus:ring-azlab-green-500"
            }`}
            placeholder="Tu nombre completo"
            disabled={status === "loading"}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-azlab-blue-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border shadow-sm h-10 px-3 bg-white transition-colors focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-azlab-green-500 focus:ring-azlab-green-500"
            }`}
            placeholder="tu@email.com"
            disabled={status === "loading"}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-azlab-blue-900"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border shadow-sm p-3 bg-white transition-colors focus:outline-none focus:ring-2 ${
              errors.message
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-azlab-green-500 focus:ring-azlab-green-500"
            }`}
            placeholder="¿En qué podemos ayudarte?"
            disabled={status === "loading"}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-azlab-blue-500 hover:bg-azlab-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azlab-green-500 transition-colors disabled:opacity-75 disabled:cursor-not-allowed hover:shadow-lg"
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </>
          ) : (
            "Enviar Mensaje"
          )}
        </button>
      </form>
    </div>
  );
}
