"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  currency: string;
  code: string;
  active: boolean;
}

interface Props {
  products: Product[];
  currentPage: number;
  totalPages: number;
}

const ALL_CATEGORIES = [
  "Todos",
  "Química Sanguínea",
  "Hematología",
  "Ureanálisis",
  "Hormonas",
  "Perfiles/Paquetes",
  "Química Urinaria",
  "Coagulación",
  "Pruebas Especializadas",
  "Inmunología",
  "Urología",
  "Coprología",
  "Microbiología",
  "Fármacos y Drogas",
  "Pruebas Extranjero",
];

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

// ─── Product Detail Modal ────────────────────────────────────────────────────
function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
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
        {/* Top accent bar
        <div className="h-1.5 w-full bg-gradient-to-r from-azlab-blue-500 to-azlab-green-500" /> */}
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
        </div>
        {/* Footer actions */}
        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <button className="flex-1 py-2.5 rounded-lg bg-azlab-blue-500 text-white font-semibold hover:bg-azlab-blue-600 transition-colors cursor-pointer flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base leading-none">
              call
            </span>
            Agendar cita
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

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ExamenesClient({
  products,
  currentPage,
  totalPages,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const productCategories = new Set(products.map((p) => p.category));
  const categories = ALL_CATEGORIES.filter(
    (c) => c === "Todos" || productCategories.has(c) || true,
  );

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-azlab-blue-500 sm:text-5xl sm:tracking-tight lg:text-5xl">
          Catálogo de exámenes y perfiles
        </h1>
        <p className="text-gray-600 mb-6 mt-3">
          Encuentra el examen que necesitas. Todos disponibles a domicilio en
          Santa Ana.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar exámenes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-azlab-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 cursor-pointer ${
              activeCategory === category
                ? "bg-azlab-blue-500 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="material-symbols-outlined mr-2">
              {handleCategoryIcon(category)}
            </span>
            {category}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-500 mb-6">
        {filteredProducts.length} exámenes encontrados
      </p>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-azlab-blue-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-azlab-blue-900 text-lg flex-1">
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
                {/* Add button */}
                {/* <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-2 hover:bg-azlab-blue-50 rounded-lg transition-colors cursor-pointer"
                  title="Ver detalles"
                >
                  <span className="material-symbols-outlined text-azlab-green-600 pt-2">
                    add
                  </span>
                </button> */}
                {/* Ver button */}
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

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No se encontraron exámenes que coincidan con tu búsqueda.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Anterior
          </button>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Siguiente
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
