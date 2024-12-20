/* ============================================================================
 *  Proyecto: Algoritmo Sliding Window – Palabra más larga
 *  ───────────────────────────────────────────────────────────────────────────
 *  Objetivo
 *    ▸ Identificar, en una cadena de texto, la palabra de mayor longitud
 *      usando la técnica de ventana deslizante (Sliding Window).
 *
 *  Idea del algoritmo
 *    1. Dividir el texto en un arreglo de palabras con .split(/\s+/).
 *    2. Emplear dos punteros (left y right) que se mueven juntos a lo largo del arreglo. 
 *       En cada paso «right» señala la palabra actual y se compara su
 *       longitud con la palabra más larga encontrada hasta el momento.
 *    3. La complejidad temporal es O(n) y la espacial O(1).
 *
 *  Autor: Jeshua Romero Guadarrama
 *  Requisitos: Node ≥ 14 o navegador moderno (ES2020+)
 * ============================================================================ */

/**
 * Encuentra la palabra más larga en una cadena de texto.
 * @param  {string} text - Párrafo o frase completa.
 * @return {string}      - Palabra de mayor longitud (primera en caso de empate).
 */
function findLongestWord(text) {
  if (typeof text !== 'string' || text.trim() === '') return '';

  // 1) Dividir el texto en palabras (múltiples espacios se consideran uno)
  const words = text.split(/\s+/);

  // 2) Ventana deslizante: left y right avanzan en paralelo
  let left = 0;
  let right = 0;
  let longestWord = '';

  while (right < words.length) {
    const current = words[right];

    if (current.length > longestWord.length) {
      longestWord = current;
    }

    // Avanzamos la ventana una posición
    right += 1;
    left = right; // left no se usa para cómputo extra, sirve para ilustrar la ventana
  }

  return longestWord;
}

/* ---------------------------------------------------------------------------
 * Ejemplo de uso en terminal
 * ------------------------------------------------------------------------- */

const textoDemo =
  'JavaScript es un lenguaje de programación increíble para aprender.';

console.log('Texto de entrada:');
console.log(textoDemo);
console.log('\nPalabra más larga encontrada:');
console.log(findLongestWord(textoDemo)); // → "programación"