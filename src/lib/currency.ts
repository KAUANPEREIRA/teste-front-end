/**
 * A API retorna `price` em centavos (ex.: 2890 -> R$ 28,90).
 * Centralizar essa conversão evita que cada componente reimplemente
 * a regra (e erre a casa decimal) de forma diferente.
 */
export function centsToReais(cents: number): number {
  return cents / 100;
}

export function formatCurrency(cents: number): string {
  return centsToReais(cents).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatInstallment(cents: number, installments = 3): string {
  const installmentValue = centsToReais(cents) / installments;
  return installmentValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
