/* ============================================================================
 *  Proyecto: Gestor de Notas Personales – Manejo de Archivos con Node.js
 *  ───────────────────────────────────────────────────────────────────────────
 *  Objetivo
 *    ▸ Practicar operaciones de lectura, escritura y eliminación de archivos
 *      usando el módulo nativo "fs" de Node.js, almacenando las notas en un
 *      archivo JSON (`notas.json`).
 *
 *  Funcionalidades
 *    1. agregarNota(titulo, contenido)  ➜ Crea / actualiza `notas.json` añadiendo
 *       una nota nueva.
 *    2. listarNotas()                   ➜ Muestra todas las notas guardadas.
 *    3. eliminarNota(titulo)            ➜ Elimina la nota cuyo título coincida.
 *
 *  Uso rápido (terminal):
 *      node gestorNotas.js add   "Mi título" "Mi contenido"
 *      node gestorNotas.js list
 *      node gestorNotas.js del   "Mi título"
 *
 *  Autor: Jeshua Romero Guadarrama
 *  Requisitos: Node ≥ 14 (CommonJS)
 * ============================================================================ */

const fs = require('fs');
const path = require('path');

// Ruta absoluta al archivo de notas (en la misma carpeta que el script)
const filePath = path.join(__dirname, 'notas.json');

/**
 * Lee y parsea el archivo de notas. Si no existe, devuelve un arreglo vacío.
 * @return {Array<{titulo: string, contenido: string}>}
 */
function leerNotas() {
  if (!fs.existsSync(filePath)) return [];
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error al leer o parsear notas.json:', err.message);
    return [];
  }
}

/**
 * Sobrescribe `notas.json` con el arreglo proporcionado.
 * @param {Array<{titulo: string, contenido: string}>} notas
 */
function guardarNotas(notas) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  } catch (err) {
    console.error('Error al escribir notas.json:', err.message);
  }
}

/**
 * Agrega una nota al archivo JSON.
 * @param {string} titulo
 * @param {string} contenido
 */
function agregarNota(titulo, contenido) {
  if (!titulo || !contenido) {
    console.warn('⚠️  Debes proporcionar título y contenido.');
    return;
  }
  const notas = leerNotas();

  // Verificar duplicados por título
  const duplicada = notas.some((nota) => nota.titulo === titulo);
  if (duplicada) {
    console.warn(`⚠️  Ya existe una nota con el título "${titulo}".`);
    return;
  }

  notas.push({ titulo, contenido });
  guardarNotas(notas);
  console.log('✅  Nota agregada con éxito.');
}

/**
 * Muestra todas las notas en consola.
 */
function listarNotas() {
  const notas = leerNotas();
  if (notas.length === 0) {
    console.log('No hay notas guardadas.');
    return;
  }

  console.log('\n📒  Listado de notas');
  console.log('──────────────────');
  notas.forEach(({ titulo, contenido }, idx) => {
    console.log(`${idx + 1}. ${titulo}\n   ${contenido}\n`);
  });
}

/**
 * Elimina la nota cuyo título coincida.
 * @param {string} titulo
 */
function eliminarNota(titulo) {
  if (!titulo) {
    console.warn('⚠️  Debes proporcionar el título de la nota a eliminar.');
    return;
  }
  const notas = leerNotas();
  const nuevasNotas = notas.filter((nota) => nota.titulo !== titulo);

  if (nuevasNotas.length === notas.length) {
    console.log(`No se encontró una nota con título "${titulo}".`);
    return;
  }

  guardarNotas(nuevasNotas);
  console.log(`🗑️  Nota con título "${titulo}" eliminada.`);
}

/* ---------------------------------------------------------------------------
 * Interfaz CLI mínima
 * ------------------------------------------------------------------------- */
// node gestorNotas.js add   "Título" "Contenido"
// node gestorNotas.js list
// node gestorNotas.js del   "Título"
const [,, cmd, ...args] = process.argv;

switch (cmd) {
  case 'add':
    agregarNota(args[0], args.slice(1).join(' '));
    break;
  case 'list':
    listarNotas();
    break;
  case 'del':
    eliminarNota(args[0]);
    break;
  case undefined:
    // Ejecución de ejemplo si no se pasa comando
    exampleRun();
    break;
  default:
    console.log('Comandos disponibles:');
    console.log('  add  "Título" "Contenido"');
    console.log('  list');
    console.log('  del  "Título"');
}

/**
 * Ejemplo automático si no se pasan argumentos.
 * Crea, lista y elimina una nota de prueba.
 */
function exampleRun() {
  console.log('\nEjemplo de demostración\n');
  agregarNota('Compras', 'Comprar leche y pan.');
  listarNotas();
  eliminarNota('Compras');
  listarNotas();
}

module.exports = { agregarNota, listarNotas, eliminarNota };