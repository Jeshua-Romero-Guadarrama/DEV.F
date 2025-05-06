// Punto de entrada: orquesta UI y Planificador

import Planificador from "./planificador.js";
import { popularSelects, refrescarTabla, mostrarToast } from "./ui.js";

const planner = new Planificador();

document.addEventListener("DOMContentLoaded", () => {
  // Evitar fechas pasadas
  document.querySelector("#fecha").min = new Date()
    .toISOString()
    .split("T")[0];

  popularSelects();
  refrescarTabla(planner);
  registrarEventos();
});

/* ---------- Eventos ---------- */

const registrarEventos = () => {
  const form = document.querySelector("#viajeForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      destino: form.destino.value,
      fecha: form.fecha.value,
      transporte: form.transporte.value,
      personas: Number(form.personas.value),
    };

    try {
      planner.registrarViaje(data);
      refrescarTabla(planner);
      mostrarToast("¡Viaje agregado!");
      form.reset();
      form.personas.value = 1;
      form.fecha.focus();
    } catch (err) {
      mostrarToast(err.message, "danger");
    }
  });

  /* Delegación para botones eliminar */
  document
    .querySelector("#tablaViajes tbody")
    .addEventListener("click", ({ target }) => {
      const btn = target.closest("button[data-indice]");
      if (!btn) return;

      if (confirm("¿Eliminar este viaje?")) {
        planner.eliminarViaje(Number(btn.dataset.indice));
        refrescarTabla(planner);
        mostrarToast("Viaje eliminado", "warning");
      }
    });
};
