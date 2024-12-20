/* ============================================================================
 *  Gestión de Lista de Compras
 *  ───────────────────────────────────────────────────────────────────────────
 *  Arreglo para almacenar los productos y exponer tres operaciones básicas:
 *     1. agregarProducto  ➜ Añade un producto (sin duplicados)
 *     2. eliminarProducto ➜ Elimina un producto existente
 *     3. mostrarLista     ➜ Imprime la lista completa en consola
 *  Uso de ECMAScript 2020+ (arrow functions, const / let, métodos de Array).
 * ============================================================================ */

/**
 * Arreglo que almacena los productos de la lista de compras.
 * Se declara como const para impedir la reasignación, pero su contenido puede modificarse (push, splice, etc.).
 * @type {string[]}
 */
const listaDeCompras = [];

/* ---------------------------------------------------------------------------
 * Función: agregarProducto
 * ---------------------------------------------------------------------------
 * @param  {string} producto - Nombre del producto a añadir.
 * @return {void}
 * Añade el producto al final del arreglo sólo si:
 *   1) Se recibe una cadena no vacía.
 *   2) Aún no existe (se evita duplicar entradas, ignorando mayúsculas/minúsculas).
 * También muestra en consola el resultado de la operación.
 */
const agregarProducto = (producto) => {
  // Validación básica de la entrada
  if (typeof producto !== 'string' || producto.trim() === '') {
    console.warn('⚠️  Debes proporcionar un nombre de producto no vacío.');
    return;
  }

  // Normalizamos la cadena para comparación (trim + minúsculas)
  const clave = producto.trim().toLowerCase();

  // Comprobamos si ya existe un producto con la misma clave
  const duplicado = listaDeCompras.some(
    (item) => item.trim().toLowerCase() === clave
  );

  if (duplicado) {
    console.info(`ℹ️  "${producto}" ya está en la lista; no se añadió de nuevo.`);
    return;
  }

  // Si no es duplicado, lo agregamos
  listaDeCompras.push(producto.trim());
  console.info(`✅  "${producto}" se añadió correctamente a la lista.`);
};

/* ---------------------------------------------------------------------------
 * Función: eliminarProducto
 * ---------------------------------------------------------------------------
 * @param  {string} producto - Nombre del producto a eliminar.
 * @return {void}
 * Elimina la primera coincidencia del arreglo (ignorando mayúsculas/minúsculas).
 * Si el producto no existe, muestra un aviso en consola.
 */
const eliminarProducto = (producto) => {
  if (typeof producto !== 'string' || producto.trim() === '') {
    console.warn('⚠️  Debes proporcionar un nombre de producto no vacío.');
    return;
  }

  const clave = producto.trim().toLowerCase();

  // Obtenemos el índice del primer elemento que coincida
  const indice = listaDeCompras.findIndex(
    (item) => item.trim().toLowerCase() === clave
  );

  if (indice === -1) {
    console.info(`ℹ️  "${producto}" no se encontró en la lista.`);
    return;
  }

  // Eliminamos el elemento encontrado
  const [eliminado] = listaDeCompras.splice(indice, 1);
  console.info(`🗑️  "${eliminado}" se eliminó correctamente de la lista.`);
};

/* ---------------------------------------------------------------------------
 * Función: mostrarLista
 * ---------------------------------------------------------------------------
 * @return {void}
 * Imprime la lista de compras en la consola, mostrando cada elemento con un índice legible. 
 * Si la lista está vacía, lo indica al usuario.
 */
const mostrarLista = () => {
  console.log('🛒  Lista de Compras:');
  console.log('──────────────────────');

  if (listaDeCompras.length === 0) {
    console.log('   (vacía)\n');
    return;
  }

  // Recorremos la lista y mostramos cada producto
  listaDeCompras.forEach((item, idx) => {
    console.log(`${idx + 1}. ${item}`);
  });
  console.log(); // Línea en blanco al final
};

/* ============================================================================
 * Ejemplo de uso
 * ============================================================================ */

// node
// .load proyecto_estructuras_datos.js
// agregarProducto('Leche');
// agregarProducto('Pan');
// agregarProducto('Huevos');
// agregarProducto('pan');      // ← duplicado (no se añade)
// mostrarLista();
// eliminarProducto('LECHE');   // ← mayúsculas / minúsculas no importan
// mostrarLista();