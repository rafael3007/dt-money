// utils/formatValues.ts

const LANG = "pt-BR";
const CURRENCY = "BRL";

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: CURRENCY,
});


export const dateFormatter = new Intl.DateTimeFormat(LANG)