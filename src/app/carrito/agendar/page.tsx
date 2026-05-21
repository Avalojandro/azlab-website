"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AgendarCitaPage() {
  const { items } = useCart();
  const [step, setStep] = useState<1 | 2>(1);

  // Address form state
  const [address, setAddress] = useState({
    street: "",
    city: "Santa Ana",
    apartment: "",
    instructions: "",
  });

  const [formErrors, setFormErrors] = useState<{ street?: string }>({});
  const [isMapSearching, setIsMapSearching] = useState(false);

  // Calculate order subtotal
  const subtotal = items.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0,
  );

  const deliveryFee = 5.0; // Home collection fee
  const total = subtotal + deliveryFee;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.street.trim()) {
      setFormErrors({ street: "Por favor, ingresa tu dirección de residencia." });
      return;
    }
    setFormErrors({});
    setStep(2);
  };

  const simulateMapSearch = () => {
    if (!address.street.trim()) return;
    setIsMapSearching(true);
    setTimeout(() => {
      setIsMapSearching(false);
      // Autofill additional mockup instructions
      setAddress((prev) => ({
        ...prev,
        instructions: prev.instructions || "Ubicado según pin de Google Maps.",
      }));
    }, 1000);
  };

  // If cart is empty, show empty state
  if (items.length === 0) {
    return (
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-azlab-blue-50 rounded-2xl flex items-center justify-center">
            <span className="material-symbols-outlined text-azlab-blue-300 text-4xl">
              shopping_cart
            </span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-azlab-blue-900 mb-3">
          Tu carrito está vacío
        </h1>
        <p className="text-gray-500 mb-8">
          Agrega exámenes desde el catálogo para poder agendar tu cita.
        </p>
        <Link
          href="/examenes"
          className="inline-flex items-center gap-2 bg-azlab-green-500 hover:bg-azlab-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Ver catálogo de exámenes
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header and Step Indicator */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-azlab-blue-900 mb-6">
          Agendar Cita a Domicilio
        </h1>

        {/* Stepper progress */}
        <div className="max-w-md mx-auto flex items-center justify-between relative px-2">
          {/* Background Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0 rounded-full" />
          {/* Active Line Progress */}
          <div
            className="absolute top-1/2 left-0 h-1 bg-azlab-blue-500 -translate-y-1/2 z-0 rounded-full transition-all duration-500"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />

          {/* Step 1 Node */}
          <button
            onClick={() => setStep(1)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-all duration-300 ${
              step === 1
                ? "bg-azlab-blue-500 text-white ring-4 ring-azlab-blue-100"
                : "bg-azlab-blue-500 text-white"
            }`}
          >
            1
          </button>

          {/* Step 2 Node */}
          <button
            disabled={!address.street.trim()}
            onClick={() => setStep(2)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-all duration-300 ${
              step === 2
                ? "bg-azlab-blue-500 text-white ring-4 ring-azlab-blue-100"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            2
          </button>
        </div>

        {/* Stepper Labels */}
        <div className="max-w-md mx-auto flex justify-between mt-2 text-xs font-semibold text-gray-500 px-1">
          <span className={step === 1 ? "text-azlab-blue-900 font-bold" : ""}>
            1. Dirección de Colección
          </span>
          <span className={step === 2 ? "text-azlab-blue-900 font-bold" : ""}>
            2. Resumen y Confirmación
          </span>
        </div>
      </div>

      {step === 1 ? (
        /* STEP 1: ADDRESS */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <form
            onSubmit={handleNextStep}
            className="lg:col-span-5 bg-white border border-azlab-blue-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-5"
          >
            <h2 className="text-xl font-bold text-azlab-blue-900 mb-2">
              Detalles de la Dirección
            </h2>

            <div>
              <label
                htmlFor="street"
                className="block text-sm font-semibold text-azlab-blue-950 mb-1"
              >
                Dirección exacta
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="street"
                  id="street"
                  required
                  value={address.street}
                  onChange={(e) => {
                    setAddress({ ...address, street: e.target.value });
                    if (formErrors.street) setFormErrors({});
                  }}
                  className={`block w-full rounded-xl border px-3.5 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 ${
                    formErrors.street
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-azlab-blue-500 focus:ring-azlab-blue-500"
                  }`}
                  placeholder="Calle, avenida, pasaje, # de casa"
                />
                {address.street.trim() && (
                  <button
                    type="button"
                    onClick={simulateMapSearch}
                    className="absolute right-2 top-1.5 px-3 py-1 bg-azlab-blue-50 text-azlab-blue-600 hover:bg-azlab-blue-100 rounded-lg text-xs font-semibold transition-colors"
                  >
                    Buscar en mapa
                  </button>
                )}
              </div>
              {formErrors.street && (
                <p className="mt-1.5 text-xs text-red-500">{formErrors.street}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-azlab-blue-950 mb-1"
              >
                Ciudad / Municipio
              </label>
              <select
                name="city"
                id="city"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                className="block w-full rounded-xl border border-gray-300 px-3.5 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-azlab-blue-500 focus:border-azlab-blue-500"
              >
                <option value="Santa Ana">Santa Ana (Zona Urbana)</option>
                <option value="Chalchuapa">Chalchuapa</option>
                <option value="Coatepeque">Coatepeque</option>
                <option value="Metapán">Metapán</option>
                <option value="San Sebastián Salitrillo">San Sebastián Salitrillo</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="apartment"
                className="block text-sm font-semibold text-azlab-blue-950 mb-1"
              >
                Apartamento, suite, block (opcional)
              </label>
              <input
                type="text"
                name="apartment"
                id="apartment"
                value={address.apartment}
                onChange={(e) =>
                  setAddress({ ...address, apartment: e.target.value })
                }
                className="block w-full rounded-xl border border-gray-300 px-3.5 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-azlab-blue-500 focus:border-azlab-blue-500"
                placeholder="Apto #, Edificio, Etapa"
              />
            </div>

            <div>
              <label
                htmlFor="instructions"
                className="block text-sm font-semibold text-azlab-blue-950 mb-1"
              >
                Punto de referencia o indicaciones adicionales
              </label>
              <textarea
                name="instructions"
                id="instructions"
                rows={3}
                value={address.instructions}
                onChange={(e) =>
                  setAddress({ ...address, instructions: e.target.value })
                }
                className="block w-full rounded-xl border border-gray-300 px-3.5 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-azlab-blue-500 focus:border-azlab-blue-500"
                placeholder="Ej. Portón negro frente a la tienda de conveniencia..."
              />
            </div>

            <div className="pt-2 flex gap-3">
              <Link
                href="/carrito"
                className="flex-1 text-center py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm"
              >
                Volver
              </Link>
              <button
                type="submit"
                className="flex-1 py-3 bg-azlab-blue-500 hover:bg-azlab-blue-600 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg text-sm"
              >
                Continuar
              </button>
            </div>
          </form>

          {/* Map Column */}
          <div className="lg:col-span-7 flex flex-col h-full bg-white border border-azlab-blue-100 rounded-3xl shadow-sm overflow-hidden p-6 md:p-8">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-azlab-blue-900">
                Ubicación en Google Maps
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                La API de Google Maps nos permite trazar con precisión la ruta para nuestro personal médico.
              </p>
            </div>

            {/* MOCK MAP CANVAS */}
            <div className="relative flex-1 min-h-[350px] bg-slate-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner group">
              {/* Map background patterns simulated with divs */}
              <div className="absolute inset-0 bg-[#e5e9f0]" />

              {/* Water area */}
              <div className="absolute top-0 right-0 w-1/3 h-1/4 bg-[#a4c2f4]/80 rounded-bl-full" />

              {/* Grid Roads */}
              <div className="absolute top-1/4 left-0 right-0 h-4 bg-white" />
              <div className="absolute top-2/3 left-0 right-0 h-5 bg-white" />
              <div className="absolute left-1/4 top-0 bottom-0 w-4 bg-white" />
              <div className="absolute left-2/3 top-0 bottom-0 w-5 bg-white" />
              <div className="absolute top-1/2 left-0 right-0 h-4 bg-white -rotate-12 transform origin-left" />

              {/* Green Park */}
              <div className="absolute bottom-6 right-16 w-32 h-32 bg-[#c6e1c6] rounded-3xl" />
              <div className="absolute top-8 left-8 w-24 h-16 bg-[#c6e1c6] rounded-full" />

              {/* Blocks/Houses */}
              <div className="absolute top-36 left-48 w-14 h-10 bg-yellow-50 border border-yellow-100 rounded" />
              <div className="absolute top-12 left-44 w-12 h-12 bg-yellow-50 border border-yellow-100 rounded" />
              <div className="absolute bottom-20 left-12 w-20 h-10 bg-yellow-50 border border-yellow-100 rounded" />
              <div className="absolute bottom-32 right-12 w-16 h-12 bg-yellow-50 border border-yellow-100 rounded" />

              {/* Mock Google Pin */}
              <div className="absolute top-[48%] left-[49%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center select-none">
                {/* Red pin graphic */}
                <div className="relative animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 text-red-500 drop-shadow-md"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Pin shadow */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-[1px]" />
                </div>

                {/* Info Window */}
                <div className="mt-2 bg-white rounded-lg shadow-md px-3 py-1.5 border border-gray-100 text-[10px] font-bold text-azlab-blue-900 whitespace-nowrap">
                  {address.street ? address.street : "Seleccionar Ubicación"}
                </div>
              </div>

              {/* Google Map overlay indicators */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs rounded px-2 py-0.5 text-[10px] text-gray-500 font-bold select-none shadow-xs">
                Google
              </div>

              {/* Zoom controls */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-1 z-10 shadow-sm">
                <button
                  type="button"
                  className="w-8 h-8 bg-white hover:bg-gray-50 rounded-t border-b border-gray-200 font-bold text-gray-600 flex items-center justify-center leading-none text-lg select-none cursor-pointer"
                >
                  +
                </button>
                <button
                  type="button"
                  className="w-8 h-8 bg-white hover:bg-gray-50 rounded-b font-bold text-gray-600 flex items-center justify-center leading-none text-lg select-none cursor-pointer"
                >
                  -
                </button>
              </div>

              {/* Loader overlay */}
              {isMapSearching && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-20">
                  <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                    <svg
                      className="animate-spin h-5 w-5 text-azlab-blue-500"
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
                    <span className="text-xs font-semibold text-gray-700">
                      Geolocalizando dirección...
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* STEP 2: SUMMARY & MOCK PAYMENT */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Order Summary & Confirm Details */}
          <div className="lg:col-span-7 bg-white border border-azlab-blue-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-azlab-blue-900 mb-4">
                Resumen de la Orden
              </h2>

              <div className="divide-y divide-gray-100 max-h-[300px] overflow-y-auto pr-2 space-y-2">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex justify-between py-3 items-center text-sm"
                  >
                    <div className="min-w-0 pr-4">
                      <p className="font-semibold text-azlab-blue-900 truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-azlab-blue-400 mt-0.5">
                        Cant: {quantity} · ${product.price.toFixed(2)} c/u
                      </p>
                    </div>
                    <span className="font-bold text-azlab-blue-900 shrink-0">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h3 className="text-lg font-bold text-azlab-blue-900 mb-2">
                Dirección de Colección Seleccionada
              </h3>
              <div className="bg-azlab-blue-50/50 rounded-2xl p-4 border border-azlab-blue-100/50 flex items-start gap-3">
                <span className="material-symbols-outlined text-azlab-blue-500 mt-0.5">
                  location_on
                </span>
                <div className="text-sm text-azlab-blue-950">
                  <p className="font-bold">{address.street}</p>
                  {address.apartment && <p>Apto/Bloc: {address.apartment}</p>}
                  <p className="font-medium text-azlab-blue-800">{address.city}</p>
                  {address.instructions && (
                    <p className="text-xs text-gray-500 mt-1 italic">
                      Ref: &quot;{address.instructions}&quot;
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Box & Pay Button */}
          <div className="lg:col-span-5 bg-white border border-azlab-blue-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold text-azlab-blue-900 mb-6">
              Detalle de Facturación
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal exámenes</span>
                <span className="font-semibold text-azlab-blue-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Recargo por servicio a domicilio</span>
                <span className="font-semibold text-azlab-blue-900">
                  ${deliveryFee.toFixed(2)}
                </span>
              </div>

              <hr className="border-gray-100" />

              <div className="flex justify-between text-lg text-azlab-blue-900 font-bold">
                <span>Total Estimado</span>
                <span className="text-2xl font-extrabold text-azlab-blue-950">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {}} // Pay currently does nothing
                className="w-full py-3.5 bg-azlab-green-500 hover:bg-azlab-green-600 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg text-center cursor-pointer"
              >
                Pagar
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center text-sm cursor-pointer"
              >
                Modificar Dirección
              </button>
            </div>

            <p className="text-[10px] text-gray-400 text-center mt-4">
              Al hacer clic en pagar, aceptas los términos de servicio de AZ Lab.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
