const DEFAULT_API_URL = "https://us-central1-azlab-9dae3.cloudfunctions.net/api";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL;

/**
 * Obtiene la lista de productos paginada
 * @param page Número de página
 * @param limit Cantidad de productos por página
 * @param category Categoría opcional
 * @param cursor Cursor opcional
 * @param search Término de búsqueda opcional
 */
export async function getProducts(
  page = 1,
  limit = 20,
  category?: string,
  cursor?: string,
  search?: string
) {
  try {
    let url = `${API_BASE_URL}/products?limit=${limit}`;

    if (search && search.trim() !== "") {
      url += `&search=${encodeURIComponent(search.trim())}`;
    }

    if (category && category !== "Todos") {
      url += `&category=${encodeURIComponent(category)}`;
      if (cursor) {
        url += `&cursor=${encodeURIComponent(cursor)}`;
      }
    } else {
      if (cursor) {
        url += `&cursor=${encodeURIComponent(cursor)}`;
      } else {
        url += `&page=${page}`;
      }
    }

    const response = await fetch(url, {
      // 'no-store' asegura que siempre traiga datos frescos del servidor de Firebase
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return { ok: false, data: [], products: [], pagination: { limit, page, hasMore: false, nextCursor: null } };
  }
}

/**
 * Obtiene un producto específico por su ID (ej: "AZ01")
 */
export async function getProductById(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);

    if (!response.ok) return null;

    return await response.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}


