/* ============================================================================
 *  Proyecto: Recursión – Búsqueda de un regalo en lista navideña
 *  ───────────────────────────────────────────────────────────────────────────
 *  Objetivo
 *    ▸ Demostrar el uso de recursión para localizar un elemento en un arreglo
 *      y devolver su posición o indicar que no existe.
 *
 *  Autor: Jeshua Romero Guadarrama
 *  Requisitos: Node ≥ 14 o navegador moderno (ES2020+)
 * ============================================================================ */

// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

/**
 * Búsqueda recursiva de un regalo en el arreglo `gifts`.
 * @param  {string[]} gifts     - Arreglo de nombres de regalos.
 * @param  {string}   giftName  - Regalo a buscar.
 * @param  {number}   index=0   - Índice actual (parámetro interno para la recursión).
 * @return {string}             - Mensaje con la posición encontrada o que no existe.
 */
function findGift(gifts, giftName, index = 0) {
  // Caso base Nº1: se recorrió toda la lista sin éxito
  if (index === gifts.length) {
    return `${giftName} no está en la lista.`;
  }

  // Caso base Nº2: el regalo se encuentra en la posición `index`
  if (gifts[index] === giftName) {
    return `${giftName} está en la posición ${index}.`;
  }

  // Caso recursivo: avanzar al siguiente índice
  return findGift(gifts, giftName, index + 1);
}

/* ---------------------------------------------------------------------------
 * Ejemplos de uso
 * ------------------------------------------------------------------------- */
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind)); // "Lego está en la posición 3."

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind)); // "Camión no está en la lista."