// Maneja interacción DOM. No conoce reglas de negocio

import { DESTINOS, TRANSPORTES } from "./data.js";

/* Utilidades ---------------------------------------------------------------- */

const currency = (valor) =>
  valor.toLocaleString("es-MX", { style: "currency", currency: "MXN" });

/* Render inicial de selects -------------------------------------------------- */

export const popularSelects = () => {
  const selDestino = document.querySelector("#destino");
  const selTransporte = document.querySelector("#transporte");

  DESTINOS.forEach(({ ciudad }) => {
    selDestino.insertAdjacentHTML(
      "beforeend",
      `<option value="${ciudad}">${ciudad}</option>`,
    );
  });

  TRANSPORTES.forEach(({ medio }) => {
    selTransporte.insertAdjacentHTML(
      "beforeend",
      `<option value="${medio}">${medio}</option>`,
    );
  });
};

/* Mostrar viajes en la tabla ------------------------------------------------- */

export const refrescarTabla = (planificador) => {
  const cuerpo = document.querySelector("#tablaViajes tbody");
  const totalGenerado = document.querySelector("#granTotal");

  // Limpiar
  cuerpo.innerHTML = "";

  planificador.viajes.forEach((v, i) => {
    cuerpo.insertAdjacentHTML(
      "beforeend",
      `
      <tr>
        <td>${i + 1}</td>
        <td>${v.destino}</td>
        <td>${v.fecha}</td>
        <td>${v.transporte}</td>
        <td>${v.personas}</td>
        <td>${currency(v.costoUnitario)}</td>
        <td>${currency(v.subtotal)}</td>
        <td>${currency(v.descuento)}</td>
        <td class="fw-semibold">${currency(v.total)}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" data-indice="${i}">
            &times;
          </button>
        </td>
      </tr>
    `,
    );
  });

  totalGenerado.textContent = currency(planificador.granTotal());
};

/* Toast de feedback --------------------------------------------- */

export const mostrarToast = (mensaje, type = "success") => {
  const toastContainer =
    document.querySelector("#toastContainer") ??
    (() => {
      const div = document.createElement("div");
      div.id = "toastContainer";
      div.className = "toast-container position-fixed bottom-0 end-0 p-3";
      document.body.appendChild(div);
      return div;
    })();

  const toastId = `toast-${Date.now()}`;
  toastContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div id="${toastId}" class="toast align-items-center text-bg-${type} border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">${mensaje}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  `,
  );
  const toastEl = document.getElementById(toastId);
  const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 3500 });
  toast.show();
};
