import { memo } from "react";
import type { Product } from "../../types/product";
import { formatCurrency, formatInstallment } from "../../lib/currency";

type ProductCardProps = {
  product: Product;
  onBuyClick: (product: Product) => void;
};

function ProductCardComponent({ product, onBuyClick }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col border border-neutral-200 bg-white p-4">
      <img
        src={product.photo}
        alt={product.productName}
        loading="lazy"
        className="mx-auto h-32 w-auto object-contain"
      />

      <p className="mt-3 line-clamp-2 text-sm text-neutral-600">
        {product.descriptionShort}
      </p>

      <div className="mt-3">
        <p className="text-lg font-bold text-neutral-900">
          {formatCurrency(product.price)}
        </p>
        <p className="text-xs text-neutral-500">
          ou 3x de {formatInstallment(product.price)} sem juros
        </p>
        <p className="text-xs text-emerald-600">Frete grátis</p>
      </div>

      <button
        type="button"
        onClick={() => onBuyClick(product)}
        className="mt-4 w-full rounded-md bg-blue-700 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        COMPRAR
      </button>
    </article>
  );
}

/**
 * memo evita re-render dos cards quando o carrossel reposiciona o
 * scroll (estado que vive no componente pai e não afeta os dados
 * do produto em si).
 */
export const ProductCard = memo(ProductCardComponent);
