// Catálogos y constantes de negocio

export const DESTINOS = [
    { ciudad: "París", costoBase: 500 },
    { ciudad: "Londres", costoBase: 400 },
    { ciudad: "Nueva York", costoBase: 600 },
    { ciudad: "Tokio", costoBase: 650 },
    { ciudad: "Ciudad de México", costoBase: 200 },
  ];
  
  export const TRANSPORTES = [
    { medio: "Avión", extra: 200 },
    { medio: "Tren", extra: 100 },
    { medio: "Autobús", extra: 60 },
    { medio: "Crucero", extra: 350 },
  ];
  
  export const DESCUENTOS = [
    // Límite superior inclusive, %
    { hasta: 1, porcentaje: 0 },
    { hasta: 3, porcentaje: 5 },
    { hasta: 6, porcentaje: 10 },
    { hasta: Infinity, porcentaje: 15 },
  ];
  