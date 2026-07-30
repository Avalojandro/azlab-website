"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

interface Props {
  products: Product[];
  currentPage: number;
  totalPages: number;
  activeCategory: string;
  hasMore: boolean;
  nextCursor: string | null;
}

const normalizeCategoryName = (value: string | null | undefined): string => {
  if (!value) return "";
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
};

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

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ExamenesClient({
  products,
  currentPage,
  totalPages,
  activeCategory: activeCategoryProp,
  hasMore,
  nextCursor,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [apiSearchResults, setApiSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setApiSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const delayDebounceFn = setTimeout(async () => {
      try {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
        let url = `${apiBaseUrl}/products?limit=20&search=${encodeURIComponent(searchQuery)}`;
        
        if (activeCategoryProp !== "Todos") {
          url += `&category=${encodeURIComponent(activeCategoryProp)}`;
        }

        const res = await fetch(url);
        if (res.ok) {
          const json = await res.json();
          if (json.ok && json.data) {
            setApiSearchResults(json.data);
          }
        }
      } catch (error) {
        console.error("Error searching products from API:", error);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, activeCategoryProp]);

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams();
    if (category !== "Todos") {
      params.set("category", category);
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    params.delete("cursor");
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleNextPage = () => {
    if (activeCategoryProp !== "Todos") {
      if (nextCursor) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("cursor", nextCursor);
        params.delete("page");
        router.push(`${pathname}?${params.toString()}`);
      }
    } else {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (activeCategoryProp !== "Todos") {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("cursor");
      params.delete("page");
      router.push(`${pathname}?${params.toString()}`);
    } else {
      handlePageChange(currentPage - 1);
    }
  };

  const productCategories = new Set(products.map((p) => p.category));
  const categories = ALL_CATEGORIES.filter(
    (c) => c === "Todos" || productCategories.has(c) || true,
  );

  const displayProducts = searchQuery.trim() !== "" ? apiSearchResults : products;

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
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-azlab-green-500 focus:border-transparent"
          />
          {isSearching && (
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-azlab-green-600 animate-spin">
              autorenew
            </span>
          )}
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 cursor-pointer ${
              normalizeCategoryName(activeCategoryProp) ===
              normalizeCategoryName(category)
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
      {/* <p className="text-sm text-gray-500 mb-6">
        {displayProducts.length} exámenes encontrados
      </p> */}

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayProducts.map((product) => (
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
      {displayProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No se encontraron exámenes que coincidan con tu búsqueda.
          </p>
        </div>
      )}

      {/* Pagination */}
      {searchQuery.trim() === "" &&
        (activeCategoryProp === "Todos"
          ? totalPages > 1
          : hasMore || searchParams.has("cursor")) && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={handlePrevPage}
              disabled={
                activeCategoryProp === "Todos"
                  ? currentPage <= 1
                  : !searchParams.has("cursor")
              }
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Anterior
            </button>

            <button
              onClick={handleNextPage}
              disabled={
                activeCategoryProp === "Todos"
                  ? currentPage >= totalPages
                  : !hasMore
              }
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
