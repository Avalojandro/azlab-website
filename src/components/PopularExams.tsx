"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface Props {
  products: Product[];
}

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
    case "Química Urinaria":
      return "water_drop";
    case "Coagulación":
      return "bloodtype";
    case "Pruebas Especializadas":
      return "biotech";
    case "Inmunología":
      return "coronavirus";
    case "Urología":
      return "nephrology";
    case "Coprología":
      return "experiment";
    case "Microbiología":
      return "microbiology";
    case "Fármacos y Drogas":
      return "medication";
    case "Pruebas Extranjero":
      return "travel";
    case "Todos":
      return "health_cross";
    default:
      return "local_hospital";
  }
};

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addToCart(product, qty);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-azlab-green-700 bg-azlab-green-50 px-2.5 py-1 rounded-full mb-3">
              <span className="material-symbols-outlined text-base leading-none">
                {handleCategoryIcon(product.category)}
              </span>
              {product.category}
            </span>
            <h2 className="text-xl font-bold text-azlab-blue-900 leading-snug">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 pt-1.5 px-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined text-gray-500">
              close
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-gray-100" />

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          {/* Price */}
          <div className="flex items-end gap-2">
            <span className="text-4xl font-extrabold text-azlab-blue-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-400 mb-1">
              {product.currency ?? "USD"}
            </span>
          </div>

          {/* Description */}
          {product.description && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                Información
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Quantity picker */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Cantidad
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                disabled={qty <= 1}
                className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Disminuir cantidad"
              >
                <span className="material-symbols-outlined text-base leading-none">
                  remove
                </span>
              </button>
              <span className="w-8 text-center text-lg font-bold text-azlab-blue-900">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => Math.min(5, q + 1))}
                disabled={qty >= 5}
                className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Aumentar cantidad"
              >
                <span className="material-symbols-outlined text-base leading-none">
                  add
                </span>
              </button>
              <span className="text-xs text-gray-400 ml-1">máx. 5</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <button
            onClick={handleAdd}
            className="flex-1 py-2.5 rounded-lg bg-azlab-green-500 text-white font-semibold hover:bg-azlab-green-600 transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base leading-none">
              add_shopping_cart
            </span>
            Agregar al carrito
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);   }
        }
        .animate-modal-in {
          animation: modal-in 0.2s ease-out both;
        }
      `}</style>
    </div>
  );
}

export default function PopularExams({ products }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-azlab-blue-900 mb-2">
              Exámenes y perfiles más solicitados
            </h2>
          </div>
          <Link
            href="/examenes"
            className="group text-azlab-blue-500 hover:text-azlab-blue-600 font-semibold flex items-center gap-1 transition-colors"
          >
            Ver todos
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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

        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-azlab-blue-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-azlab-blue-900 text-lg flex-1 line-clamp-2 break-words">
                    {product.name}
                  </h3>
                </div>
                <p className="text-sm text-azlab-blue-400 font-medium mb-1">
                  {product.category}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-azlab-blue-100">
                <div>
                  <p className="text-xs text-azlab-blue-500">Precio</p>
                  <p className="text-2xl font-bold text-azlab-blue-900">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-azlab-green-600 hover:text-azlab-green-700 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="text-sm">Detalles</span>
                    <span className="material-symbols-outlined text-azlab-green-600">
                      arrow_outward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
