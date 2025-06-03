/**
 * Calcula el precio con IVA (21%) aplicado.
 * 
 * @param price - Precio base sin IVA.
 * @returns {number} Precio final con IVA, redondeado a dos decimales.
 * 
 * Ejemplo:
 *   calculatePriceWithIVA(100); // 121
 */

export const calculatePriceWithIVA = (price: number): number => {
  return parseFloat((price * 1.21).toFixed(2));
};
