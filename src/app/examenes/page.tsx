import { getProducts } from "../../../services/api";
import ExamenesClient from "./ExamenesClient";

export default async function ExamenesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const pageParam = resolvedParams.page;
  const currentPage =
    typeof pageParam === "string" ? parseInt(pageParam, 10) : 1;
  const validPage = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage;

  const limit = 16;
  const response = await getProducts(validPage, limit);
  const products = response?.data || response?.products || [];

  // Calculamos el total de páginas. Si la API no retorna el campo 'total',
  // asumimos que hay página siguiente si obtuvimos el número exacto de elementos del 'limit'
  const computedTotal =
    typeof response?.total === "number"
      ? response.total
      : products.length === limit
        ? validPage * limit + limit
        : validPage * limit;
  const totalPages = Math.max(1, Math.ceil(computedTotal / limit));

  return (
    <ExamenesClient
      products={products}
      currentPage={validPage}
      totalPages={totalPages}
    />
  );
}
