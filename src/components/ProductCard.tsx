import type { ProductCard as ProductCardType } from "@/content/products";
import type { CSSProperties } from "react";

export function ProductCard({ product }: { product: ProductCardType }) {
  const letter = product.name.replace(/[^a-z0-9]/gi, "").slice(0, 1) || "L";
  const referenceLabel = product.href.startsWith("/en") ? "* Reference image of medication" : "* Imagen referencial del medicamento";

  return (
    <a className={`product-card ${product.featured ? "featured" : ""}`} href={product.href}>
      <div className="product-visual gradient-noise" style={{ "--product-bg": product.bg } as CSSProperties}>
        {product.image ? <><img src={product.image} alt="" loading="lazy" /><span className="product-image-reference-label">{referenceLabel}</span></> : <span className="product-letter" aria-hidden="true">{letter}</span>}
      </div>
      <div className="product-body">
        <span className="product-cat">{product.category}</span>
        <span className="product-name">{product.name}</span>
        {product.also ? <span className="product-also">{product.also}</span> : null}
        <p className="product-desc">{product.tagline}</p>
        <span className="product-footer">
          <span className="product-price">{product.price}</span>
          <span className="product-arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
}
