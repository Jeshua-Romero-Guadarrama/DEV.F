/* ============================================================================
 *  Proyecto: Algoritmo de los Dos Punteros – Organización de Mesa
 *  ───────────────────────────────────────────────────────────────────────────
 *  Objetivo
 *    ▸ Hallar el primer par de invitados consecutivos cuyos nombres empiecen
 *      con la misma letra, usando la técnica de los dos punteros.
 *
 *  Algoritmo (O (n)):
 *    1. Puntero «inicio»    → posición i
 *    2. Puntero «siguiente» → posición i + 1
 *    3. Mientras «siguiente» esté dentro del arreglo:
 *         · Comparar iniciales (ignorando mayúsculas/minúsculas).
 *         · Si coinciden → devolver el par.
 *         · Si no → avanzar ambos punteros una casilla.
 *
 *  Autor: Jeshua Romero Guadarrama
 *  Requisitos: Node ≥ 14 o cualquier navegador moderno (ES2020+)
 * ============================================================================ */

/**
 * Encuentra el primer par de nombres consecutivos que empiecen con la misma letra.
 *
 * @param  {string[]} arr - Arreglo de nombres ordenados alfabéticamente.
 * @return {string[] | null}
 *         ▸ Par de nombres si las iniciales coinciden.
 *         ▸ null si no existe tal pareja.
 *
 * Ejemplo:
 *   const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
 *   encontrarPareja(invitados);  // → ["Carlos", "Cecilia"]
 */
function encontrarPareja(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return null;

  let inicio = 0;
  let siguiente = 1;

  while (siguiente < arr.length) {
    // Obtenemos la inicial de cada nombre (en minúsculas para comparar)
    const inicialInicio    = arr[inicio][0].toLowerCase();
    const inicialSiguiente = arr[siguiente][0].toLowerCase();

    // Si las iniciales coinciden, devolvemos la pareja
    if (inicialInicio === inicialSiguiente) {
      return [arr[inicio], arr[siguiente]];
    }

    // Avanzamos ambos punteros
    inicio++;
    siguiente++;
  }

  // No se encontró ninguna pareja
  return null;
}

/* ---------------------------------------------------------------------------
 * Ejemplo de uso
 * ------------------------------------------------------------------------- */
const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
const pareja = encontrarPareja(invitados);

console.log('Lista de invitados:', invitados);
console.log('Pareja encontrada:', pareja);
// Salida esperada: ["Carlos", "Cecilia"]