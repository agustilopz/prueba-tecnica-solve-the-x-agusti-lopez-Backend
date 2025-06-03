/**
 * Tests unitarios para la función calculatePriceWithIVA.
 * 
 * Esta suite comprueba que la función:
 * - Calcula correctamente el precio con un 21% de IVA.
 * - Redondea el resultado a dos decimales.
 * - Devuelve 0 si el precio es 0.
 * - Maneja correctamente valores decimales pequeños.
 * 
 * Utiliza Jest como framework de testing.
 */

import { calculatePriceWithIVA } from './priceUtils';

describe('calculatePriceWithIVA', () => {
  it('should correctly calculate price with 21% IVA', () => {
    const result = calculatePriceWithIVA(100);
    expect(result).toBe(121);
  });

  it('should round to two decimals', () => {
    const result = calculatePriceWithIVA(99.99);
    expect(result).toBeCloseTo(120.99, 2);
  });

  it('should return 0 if price is 0', () => {
    const result = calculatePriceWithIVA(0);
    expect(result).toBe(0);
  });

  it('should handle small decimals correctly', () => {
    const result = calculatePriceWithIVA(0.01);
    expect(result).toBeCloseTo(0.01 * 1.21, 2);
  });
});
