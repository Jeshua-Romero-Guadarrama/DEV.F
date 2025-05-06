// Clase que modela un viaje individual

export default class Viaje {
    /**
     * @param {string} destino
     * @param {string} fecha (YYYY-MM-DD)
     * @param {string} transporte
     * @param {number} personas
     * @param {function} callbackCosto (destino, transporte) => number
     * @param {function} callbackDescuento (personas) => number (decimal 0‑1)
     */
    constructor(
      destino,
      fecha,
      transporte,
      personas,
      callbackCosto,
      callbackDescuento,
    ) {
      this.destino = destino;
      this.fecha = fecha;
      this.transporte = transporte;
      this.personas = personas;
  
      this.costoUnitario = callbackCosto(destino, transporte);
      this.subtotal = this.costoUnitario * personas;
  
      const factorDescuento = callbackDescuento(personas);
      this.descuento = this.subtotal * factorDescuento;
      this.total = this.subtotal - this.descuento;
    }
  }
  