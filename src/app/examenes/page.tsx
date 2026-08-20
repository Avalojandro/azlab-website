import { getProducts } from "../../../services/api";
import ExamenesClient from "./ExamenesClient";

export default async function ExamenesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const pageParam = resolvedParams.page;
  const categoryParam = resolvedParams.category;
  const cursorParam = resolvedParams.cursor;
  const searchParam = resolvedParams.search || resolvedParams.q;

  const currentPage =
    typeof pageParam === "string" ? parseInt(pageParam, 10) : 1;
  const validPage = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage;

  let activeCategory = "Todos";
  if (typeof categoryParam === "string") {
    try {
      activeCategory = decodeURIComponent(categoryParam.replace(/\+/g, " "));
    } catch {
      activeCategory = categoryParam;
    }
  }
  const activeCursor = typeof cursorParam === "string" ? cursorParam : undefined;
  const activeSearch = typeof searchParam === "string" ? searchParam.trim() : undefined;

  const limit = 16;
  const response = await getProducts(validPage, limit, activeCategory, activeCursor, activeSearch);
  const products = response?.data || response?.products || [];

  const hasMore = response?.pagination?.hasMore || false;
  const nextCursor = response?.pagination?.nextCursor || null;

  // Calculamos el total de páginas. Si la API no retorna el campo 'total',
  // asumimos que hay página siguiente si obtuvimos el número exacto de elementos del 'limit'
  const computedTotal =
    typeof response?.total === "number"
      ? response.total
      : hasMore
        ? (validPage + 1) * limit
        : validPage * limit;
  const totalPages = Math.max(1, Math.ceil(computedTotal / limit));

  return (
    <ExamenesClient
      products={products}
      currentPage={validPage}
      totalPages={totalPages}
      activeCategory={activeCategory}
      activeSearch={activeSearch || ""}
      hasMore={hasMore}
      nextCursor={nextCursor}
    />
  );
}
