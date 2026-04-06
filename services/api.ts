// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Obtiene la lista de productos paginada
 * @param page Número de página
 * @param limit Cantidad de productos por página
 */
export async function getProducts(page = 1, limit = 20, category?: string) {
  try {
    let url = `${API_BASE_URL}/products?page=${page}&limit=${limit}`;
    if (category && category !== "Todos") {
      url += `&category=${encodeURIComponent(category)}`;
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
    return { products: [], total: 0 }; // Retorno seguro para evitar que la app truene
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
