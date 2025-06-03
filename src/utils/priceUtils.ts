export const calculatePriceWithIVA = (price: number): number => {
  return parseFloat((price * 1.21).toFixed(2));
};
