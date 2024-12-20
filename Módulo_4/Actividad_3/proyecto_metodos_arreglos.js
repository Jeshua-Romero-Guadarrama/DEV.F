/* ============================================================================
 *  Proyecto: Métodos de Arreglos – Tienda Online
 *  ───────────────────────────────────────────────────────────────────────────
 *  Objetivo práctico
 *    ▸ Filtrar productos por precio (< 100 USD)       → filter()
 *    ▸ Ordenarlos alfabéticamente por nombre          → sort()
 *    ▸ Generar un arreglo con solo los nombres        → map()
 *    ▸ (Extra) Calcular el total y validar categorías → reduce() | every()
 *
 *  Autor: Jeshua Romero Guadarrama
 *  Requisitos: Node ≥ 14 o cualquier navegador moderno (ES2020+)
 * ============================================================================ */

/**
 * Catálogo base de la tienda (mín. 5 productos).
 * Cada objeto posee: nombre, precio (USD) y categoría.
 * @type {{ nombre: string, precio: number, categoria: string }[]}
 */
const productos = [
  { nombre: 'Camiseta',    precio:  15, categoria: 'Ropa' },
  { nombre: 'Laptop',      precio: 800, categoria: 'Electrónica' },
  { nombre: 'Libro',       precio:  12, categoria: 'Educación' },
  { nombre: 'Zapatos',     precio:  50, categoria: 'Ropa' },
  { nombre: 'Celular',     precio: 600, categoria: 'Electrónica' },
  { nombre: 'Auriculares', precio:  45, categoria: 'Electrónica' }, // extra
];

/* ---------------------------------------------------------------------------
 * 1) Filtrar productos con precio inferior a 100 USD
 * ------------------------------------------------------------------------- */
const productosEconomicos = productos.filter(({ precio }) => precio < 100);

console.log('🛍️  Productos con precio < $100');
console.table(productosEconomicos);

/* ---------------------------------------------------------------------------
 * 2) Ordenar alfabéticamente los productos filtrados
 *    Se clona el arreglo para no mutar productosEconomicos
 * ------------------------------------------------------------------------- */
const productosOrdenados = [...productosEconomicos].sort((a, b) =>
  a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' })
);

console.log('🔤  Productos ordenados alfabéticamente');
console.table(productosOrdenados);

/* ---------------------------------------------------------------------------
 * 3) Obtener sólo los nombres de los productos resultantes
 * ------------------------------------------------------------------------- */
const nombresProductos = productosOrdenados.map(({ nombre }) => nombre);

console.log('📝  Nombres de productos (ordenados)');
console.log(nombresProductos);

/* ---------------------------------------------------------------------------
 * 4) Extras con otros métodos de arreglo
 * ------------------------------------------------------------------------- */

/** 4-A. Calcular el costo total de los productos económicos (reduce) */
const totalEconomicos = productosEconomicos.reduce(
  (acum, { precio }) => acum + precio,
  0
);
console.log(
  `💰  Total de productos económicos: $${totalEconomicos.toFixed(2)}`
);

/** 4-B. Verificar si *todos* comparten la misma categoría (every) */
const mismaCategoria = productosEconomicos
  .map(({ categoria }) => categoria)
  .every((cat, _, arr) => cat === arr[0]);

console.log(
  `📦  ¿Todos los productos económicos son de la misma categoría? ` +
  (mismaCategoria ? 'Sí' : 'No')
);

