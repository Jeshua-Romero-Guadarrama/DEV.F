// Lógica de negocio (registro, cálculos, persistencia)

import { DESTINOS, TRANSPORTES, DESCUENTOS } from "./data.js";
import Viaje from "./viaje.js";

export default class Planificador {
  #viajes = [];

  constructor() {
    // Cargar del localStorage si existe
    const datos = JSON.parse(localStorage.getItem("viajes")) ?? [];
    datos.forEach((v) =>
      this.#viajes.push(
        new Viaje(
          v.destino,
          v.fecha,
          v.transporte,
          v.personas,
          this.calcularCosto,
          this.calcularFactorDescuento,
        ),
      ),
    );
  }

  get viajes() {
    return [...this.#viajes]; // copia defensiva
  }

  /* ---------- Reglas de negocio ---------- */

  calcularCosto = (destino, transporte) => {
    const d = DESTINOS.find((x) => x.ciudad === destino);
    const t = TRANSPORTES.find((x) => x.medio === transporte);
    if (!d || !t) throw new Error("Destino o transporte no válido");

    return d.costoBase + t.extra;
  };

  calcularFactorDescuento = (personas) => {
    const regla = DESCUENTOS.find((x) => personas <= x.hasta);
    return regla.porcentaje / 100;
  };

  /* ---------- Operaciones ---------- */

  registrarViaje({ destino, fecha, transporte, personas }) {
    const viaje = new Viaje(
      destino,
      fecha,
      transporte,
      personas,
      this.calcularCosto,
      this.calcularFactorDescuento,
    );
    this.#viajes.push(viaje);
    this.persistir();
    return viaje;
  }

  eliminarViaje(indice) {
    this.#viajes.splice(indice, 1);
    this.persistir();
  }

  granTotal() {
    return this.#viajes.reduce((acc, v) => acc + v.total, 0);
  }

  persistir() {
    localStorage.setItem("viajes", JSON.stringify(this.#viajes));
  }
}
