"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  DELIVERY_LOCATIONS,
  JURISDICCIONES,
  getDistrictById,
  calculateDeliveryFee,
} from "@/data/locations";

export default function AgendarCitaPage() {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const [step, setStep] = useState<1 | 2>(1);
  const [orderSent, setOrderSent] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    districtId: "sa-centro-santa-ana-centro",
    street: "",
    instructions: "",
  });

  const [formErrors, setFormErrors] = useState<{
    fullName?: string;
    phone?: string;
    districtId?: string;
    street?: string;
  }>({});

  // Subtotal calculation
  const subtotal = items.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0,
  );

  // Dynamic location and delivery fee calculations
  const selectedDistrict = getDistrictById(formData.districtId);
  const deliveryCalc = calculateDeliveryFee(selectedDistrict, subtotal);
  const deliveryFee = deliveryCalc.fee;
  const total = subtotal + deliveryFee;

  const validateForm = () => {
    const errors: {
      fullName?: string;
      phone?: string;
      districtId?: string;
      street?: string;
    } = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Por favor, ingresa tu nombre completo.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Por favor, ingresa tu número de teléfono.";
    } else if (formData.phone.trim().length < 8) {
      errors.phone = "El número de teléfono debe tener al menos 8 dígitos.";
    }

    if (!formData.districtId) {
      errors.districtId = "Por favor, selecciona tu municipio/distrito.";
    }

    if (!formData.street.trim()) {
      errors.street = "Por favor, ingresa tu dirección exacta.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(2);
    }
  };

  const handleStepNodeClick = (targetStep: 1 | 2) => {
    if (targetStep === 2) {
      if (validateForm()) {
        setStep(2);
      }
    } else {
      setStep(1);
    }
  };

  const handleSendWhatsApp = () => {
    const whatsappNumber = "50375791475"; // Contacto AZ LAB

    const examenesList = items
      .map(
        ({ product, quantity }) =>
          `• *${product.name}* (x${quantity}) - $${(
            product.price * quantity
          ).toFixed(2)}`,
      )
      .join("\n");

    const deliveryDetailText = deliveryCalc.isFree
      ? "GRATIS (Aplica promoción desde $35.00 en Santa Ana Centro)"
      : `$${deliveryFee.toFixed(2)}`;

    const message = `*SOLICITUD DE ORDEN - AZLAB*

*Datos del Paciente:*
• *Nombre:* ${formData.fullName}
• *Teléfono:* ${formData.phone}
• *Jurisdicción:* ${selectedDistrict.jurisdiccion}
• *Distrito:* ${selectedDistrict.distrito}
• *Tiempo Aprox. de Traslado:* ~${selectedDistrict.approxTimeMin} min
• *Dirección:* ${formData.street}${
      formData.instructions
        ? `\n• *Indicaciones:* ${formData.instructions}`
        : ""
    }

*Exámenes Solicitados:*
${examenesList}

*Resumen de Pago:*
• Subtotal: $${subtotal.toFixed(2)}
• Servicio a Domicilio: ${deliveryDetailText}
• *TOTAL ESTIMADO:* $${total.toFixed(2)}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setOrderSent(true);
  };

  const handleClearCartAndHome = () => {
    clearCart();
    router.push("/");
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
          Solicitar pedido
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
            type="button"
            onClick={() => handleStepNodeClick(1)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-all duration-300 cursor-pointer ${
              step === 1
                ? "bg-azlab-blue-500 text-white ring-4 ring-azlab-blue-100"
                : "bg-azlab-blue-500 text-white"
            }`}
          >
            1
          </button>

          {/* Step 2 Node */}
          <button
            type="button"
            onClick={() => handleStepNodeClick(2)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-all duration-300 cursor-pointer ${
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
            1. Datos de Ubicación y Contacto
          </span>
          <span className={step === 2 ? "text-azlab-blue-900 font-bold" : ""}>
            2. Resumen y Confirmación
          </span>
        </div>
      </div>

      {step === 1 ? (
        /* STEP 1: FORM ONLY */
        <div className="max-w-2xl mx-auto">
          <form
            noValidate
            onSubmit={handleNextStep}
            className="bg-white border border-azlab-blue-100 rounded-3xl p-6 md:p-10 shadow-sm space-y-6"
          >
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-xl font-bold text-azlab-blue-900">
                Información del Paciente y Ubicación
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Ingresa tus datos personales y de dirección para coordinar la
                toma de muestra a domicilio.
              </p>
            </div>

            {/* Nombre completo */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-azlab-blue-950 mb-1"
              >
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (formErrors.fullName)
                    setFormErrors((prev) => ({ ...prev, fullName: undefined }));
                }}
                className={`block w-full rounded-xl border px-3.5 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  formErrors.fullName
                    ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-white focus:border-azlab-blue-500 focus:ring-azlab-blue-500"
                }`}
                placeholder="Ej. Juan Carlos Pérez"
              />
              {formErrors.fullName && (
                <p className="mt-1.5 text-xs font-medium text-red-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm leading-none">
                    error
                  </span>
                  {formErrors.fullName}
                </p>
              )}
            </div>

            {/* Número de teléfono */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-azlab-blue-950 mb-1"
              >
                Número de teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/\D/g, "");
                  setFormData({ ...formData, phone: onlyNums });
                  if (formErrors.phone)
                    setFormErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                className={`block w-full rounded-xl border px-3.5 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  formErrors.phone
                    ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-white focus:border-azlab-blue-500 focus:ring-azlab-blue-500"
                }`}
                placeholder="Ej. 71234567"
              />
              {formErrors.phone && (
                <p className="mt-1.5 text-xs font-medium text-red-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm leading-none">
                    error
                  </span>
                  {formErrors.phone}
                </p>
              )}
            </div>

            {/* Ubicación: Jurisdicción y Distrito */}
            <div>
              <label
                htmlFor="districtId"
                className="block text-sm font-semibold text-azlab-blue-950 mb-1"
              >
                Jurisdicción / Distrito <span className="text-red-500">*</span>
              </label>
              <select
                name="districtId"
                id="districtId"
                value={formData.districtId}
                onChange={(e) => {
                  setFormData({ ...formData, districtId: e.target.value });
                  if (formErrors.districtId)
                    setFormErrors((prev) => ({
                      ...prev,
                      districtId: undefined,
                    }));
                }}
                className={`block w-full rounded-xl border px-3.5 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  formErrors.districtId
                    ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-white focus:border-azlab-blue-500 focus:ring-azlab-blue-500"
                }`}
              >
                {JURISDICCIONES.map((jur) => {
                  const locs = DELIVERY_LOCATIONS.filter(
                    (l) => l.jurisdiccion === jur,
                  );
                  return (
                    <optgroup key={jur} label={jur}>
                      {locs.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.distrito} (Tarifa: ${loc.fee.toFixed(2)})
                        </option>
                      ))}
                    </optgroup>
                  );
                })}
              </select>
              {formErrors.districtId && (
                <p className="mt-1.5 text-xs font-medium text-red-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm leading-none">
                    error
                  </span>
                  {formErrors.districtId}
                </p>
              )}

              {/* District summary info box */}
              <div className="mt-3 bg-azlab-blue-50/70 rounded-2xl p-3.5 border border-azlab-blue-100 text-xs text-azlab-blue-950 space-y-1.5">
                <div className="flex justify-between items-center font-medium">
                  <span className="flex items-center gap-1.5 text-azlab-blue-900">
                    <span className="material-symbols-outlined text-azlab-blue-500 text-base">
                      schedule
                    </span>
                    Tiempo aprox. de traslado:
                  </span>
                  <span className="font-bold text-azlab-blue-950">
                    ~{selectedDistrict.approxTimeMin} min
                  </span>
                </div>

                <div className="flex justify-between items-center font-medium">
                  <span className="flex items-center gap-1.5 text-azlab-blue-900">
                    <span className="material-symbols-outlined text-azlab-blue-500 text-base">
                      local_shipping
                    </span>
                    Tarifa de servicio AZLAB:
                  </span>
                  <span className="font-bold text-azlab-blue-950">
                    {deliveryCalc.isFree ? (
                      <span className="text-azlab-green-600 font-extrabold flex items-center gap-1">
                        <span className="line-through text-gray-400 text-xs font-normal">
                          ${selectedDistrict.fee.toFixed(2)}
                        </span>{" "}
                        GRATIS
                      </span>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>

                {/* Free delivery promo notification for Santa Ana Centro */}
                {selectedDistrict.freeThreshold && (
                  <div className="pt-2 border-t border-azlab-blue-100">
                    {deliveryCalc.isFree ? (
                      <p className="text-azlab-green-700 font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-azlab-green-500">
                          verified
                        </span>
                        Aplica servicio a domicilio GRATIS en Santa Ana Centro
                        por compras mayores a $35.00.
                      </p>
                    ) : (
                      <p className="text-azlab-blue-800 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-azlab-blue-500">
                          info
                        </span>
                        En Santa Ana Centro el servicio es GRATIS a partir de
                        $35.00 en exámenes. (Te faltan $
                        {deliveryCalc.remainingForFree?.toFixed(2)})
                      </p>
                    )}
                  </div>
                )}

                {!selectedDistrict.freeThreshold && (
                  <p className="pt-1 text-gray-500 italic text-[11px]">
                    No aplica servicio gratis para esta ubicación.
                  </p>
                )}
              </div>
            </div>

            {/* Dirección exacta */}
            <div>
              <label
                htmlFor="street"
                className="block text-sm font-semibold text-azlab-blue-950 mb-1"
              >
                Dirección exacta <span className="text-red-500">*</span>
              </label>
              <textarea
                name="street"
                id="street"
                rows={2}
                value={formData.street}
                onChange={(e) => {
                  setFormData({ ...formData, street: e.target.value });
                  if (formErrors.street)
                    setFormErrors((prev) => ({ ...prev, street: undefined }));
                }}
                className={`block w-full rounded-xl border px-3.5 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  formErrors.street
                    ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-white focus:border-azlab-blue-500 focus:ring-azlab-blue-500"
                }`}
                placeholder="Calle, avenida, pasaje, colonia, # de casa"
              />
              {formErrors.street && (
                <p className="mt-1.5 text-xs font-medium text-red-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm leading-none">
                    error
                  </span>
                  {formErrors.street}
                </p>
              )}
            </div>

            {/* Indicaciones adicionales */}
            <div>
              <label
                htmlFor="instructions"
                className="block text-sm font-semibold text-azlab-blue-950 mb-1"
              >
                Indicaciones adicionales (opcional)
              </label>
              <textarea
                name="instructions"
                id="instructions"
                rows={3}
                value={formData.instructions}
                onChange={(e) =>
                  setFormData({ ...formData, instructions: e.target.value })
                }
                className="block w-full rounded-xl border border-gray-300 px-3.5 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-azlab-blue-500 focus:border-azlab-blue-500"
                placeholder="Ej. Portón negro frente a la tienda de conveniencia, tocar el timbre blanco..."
              />
            </div>

            <div className="pt-4 flex gap-3">
              <Link
                href="/carrito"
                className="flex-1 text-center py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm"
              >
                Volver al Carrito
              </Link>
              <button
                type="submit"
                className="flex-1 py-3 bg-azlab-blue-500 hover:bg-azlab-blue-600 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg text-sm cursor-pointer"
              >
                Continuar al Resumen
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* STEP 2: SUMMARY & CONFIRMATION */
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
              <h3 className="text-lg font-bold text-azlab-blue-900 mb-3">
                Datos del Paciente y Ubicación
              </h3>
              <div className="bg-azlab-blue-50/50 rounded-2xl p-4 border border-azlab-blue-100/50 space-y-2 text-sm text-azlab-blue-950">
                <div className="flex items-center gap-2 font-bold text-azlab-blue-900">
                  <span className="material-symbols-outlined text-azlab-blue-500 text-lg">
                    person
                  </span>
                  <span>{formData.fullName}</span>
                </div>
                <div className="flex items-center gap-2 text-azlab-blue-800">
                  <span className="material-symbols-outlined text-azlab-blue-500 text-lg">
                    call
                  </span>
                  <span>{formData.phone}</span>
                </div>
                <div className="flex items-start gap-2 pt-1 border-t border-azlab-blue-100/60">
                  <span className="material-symbols-outlined text-azlab-blue-500 text-lg mt-0.5">
                    location_on
                  </span>
                  <div>
                    <p className="font-semibold text-azlab-blue-900">
                      {selectedDistrict.distrito}{" "}
                      <span className="font-normal text-xs text-gray-500">
                        ({selectedDistrict.jurisdiccion})
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        schedule
                      </span>
                      Tiempo aprox: ~{selectedDistrict.approxTimeMin} min
                    </p>
                    <p className="text-gray-700">{formData.street}</p>
                    {formData.instructions && (
                      <p className="text-xs text-gray-500 mt-1 italic">
                        Indicaciones: &quot;{formData.instructions}&quot;
                      </p>
                    )}
                  </div>
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
                <span>Servicio a domicilio ({selectedDistrict.distrito})</span>
                <span className="font-semibold text-azlab-blue-900">
                  {deliveryCalc.isFree ? (
                    <span className="text-azlab-green-600 font-bold flex items-center gap-1">
                      <span className="line-through text-gray-400 font-normal text-xs">
                        ${selectedDistrict.fee.toFixed(2)}
                      </span>{" "}
                      GRATIS
                    </span>
                  ) : (
                    `$${deliveryFee.toFixed(2)}`
                  )}
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
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 bg-azlab-green-500 hover:bg-azlab-green-400 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg text-center cursor-pointer flex items-center justify-center gap-2 text-base"
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
                Solicitar pedido
              </button>

              {orderSent && (
                <button
                  type="button"
                  onClick={handleClearCartAndHome}
                  className="w-full py-3.5 bg-azlab-blue-900 hover:bg-azlab-blue-950 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg text-center cursor-pointer flex items-center justify-center gap-2 text-sm"
                >
                  <span className="material-symbols-outlined text-lg">
                    delete_sweep
                  </span>
                  Vaciar carrito e ir al inicio
                </button>
              )}

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center text-sm cursor-pointer"
              >
                Modificar Datos
              </button>
            </div>

            <p className="text-[10px] text-gray-400 text-center mt-4">
              Al hacer clic en &quot;Solicitar pedido&quot;, se abrirá WhatsApp
              con el resumen de tu orden estructurado para enviarlo a nuestro
              equipo.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
