/* ============================================================================
 *  Proyecto: Divide & Conquer – Máximo en un Arreglo
 *  ───────────────────────────────────────────────────────────────────────────
 *  Objetivo
 *    ▸ Ilustrar el paradigma "Divide y Vencerás" (Divide & Conquer) para
 *      encontrar el valor máximo dentro de un arreglo numérico.
 *
 *  Idea del algoritmo
 *    1. Caso base: si el arreglo tiene un solo elemento, ese es el máximo.
 *    2. Dividir: partir el arreglo en dos mitades (left, right).
 *    3. Conquistar: hallar recursivamente el máximo de cada mitad.
 *    4. Combinar: devolver el mayor entre ambos máximos.
 *
 *  Complejidad
 *    ▸ Temporal: O(n) – cada elemento se procesa una sola vez.
 *    ▸ Espacial: O(log n) – profundidad de la recursión (partición en mitades).
 *
 *  Autor: Jeshua Romero Guadarrama
 *  Requisitos: Node ≥ 14 o navegador moderno (ES2020+)
 * ============================================================================ */

/**
 * Encuentra el número máximo en un arreglo utilizando Divide & Conquer.
 * @param  {number[]} arr - Arreglo de números.
 * @return {number}       - Valor máximo encontrado.
 */
function findMax(arr) {
  // Caso base: arreglo de un solo elemento
  if (arr.length === 1) {
    return arr[0];
  }

  // Dividir el arreglo en dos mitades
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Conquistar: obtener el máximo de cada mitad
  const leftMax = findMax(left);
  const rightMax = findMax(right);

  // Combinar: el mayor de los dos
  return leftMax > rightMax ? leftMax : rightMax;
}

/* ---------------------------------------------------------------------------
 * Ejemplos de uso en terminal
 * ------------------------------------------------------------------------- */
const numbers = [3, 8, 2, 10, 5, 7];
console.log('Arreglo:', numbers);
console.log('Máximo encontrado:', findMax(numbers)); // 10