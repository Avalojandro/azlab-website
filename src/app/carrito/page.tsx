"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CarritoPage() {
  const { items, removeFromCart, updateQuantity } = useCart();

  const subtotal = items.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0,
  );

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
          Agrega exámenes desde el catálogo para comenzar tu cotización.
        </p>
        <Link
          href="/examenes"
          className="inline-flex items-center gap-2 bg-azlab-green-500 hover:bg-azlab-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-base leading-none">
            biotech
          </span>
          Ver catálogo de exámenes
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-azlab-blue-500 mb-1">
          Tu Carrito
        </h1>
        <p className="text-gray-500">
          {items.length} {items.length === 1 ? "examen" : "exámenes"} ·{" "}
          {items.reduce((s, i) => s + i.quantity, 0)}{" "}
          {items.reduce((s, i) => s + i.quantity, 0) === 1
            ? "unidad"
            : "unidades"}
        </p>
      </div>

      {/* Items */}
      <div className="space-y-3 mb-8">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="bg-white border border-azlab-blue-100 rounded-xl px-5 py-4 flex items-center gap-4"
          >
            {/* Category icon */}
            <div className="shrink-0 w-10 h-10 bg-azlab-blue-50 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-azlab-blue-400 text-xl">
                biotech
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-azlab-blue-900 truncate">
                {product.name}
              </p>
              <p className="text-xs text-azlab-blue-400 mt-0.5">
                {product.category}
              </p>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Disminuir"
              >
                <span className="material-symbols-outlined text-sm leading-none">
                  remove
                </span>
              </button>
              <span className="w-6 text-center font-bold text-azlab-blue-900">
                {quantity}
              </span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                disabled={quantity >= 5}
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Aumentar"
              >
                <span className="material-symbols-outlined text-sm leading-none">
                  add
                </span>
              </button>
            </div>

            {/* Line total */}
            <p className="w-16 text-right font-bold text-azlab-blue-900 shrink-0">
              ${(product.price * quantity).toFixed(2)}
            </p>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(product.id)}
              className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
              aria-label="Eliminar"
            >
              <span className="material-symbols-outlined text-base leading-none">
                delete
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white border border-azlab-blue-100 rounded-xl px-6 py-5 mb-6">
        <div className="flex items-center justify-between text-azlab-blue-900">
          <span className="text-lg font-semibold">Total estimado</span>
          <span className="text-3xl font-extrabold">${subtotal.toFixed(2)}</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Precios en USD · Sujeto a confirmación al agendar
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/examenes"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          <span className="material-symbols-outlined text-base leading-none">
            arrow_back
          </span>
          Seguir agregando
        </Link>
        <Link
          href="/carrito/agendar"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-azlab-blue-500 hover:bg-azlab-blue-600 text-white font-semibold transition-colors"
        >
          <span className="material-symbols-outlined text-base leading-none">
            event
          </span>
          Agendar cita
        </Link>
      </div>
    </main>
  );
}
