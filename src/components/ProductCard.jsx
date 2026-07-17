import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

function ProductCard({ iphone }) {
  const message = `Hola, quiero consultar stock, colores y detalles de ${iphone.name}.`;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <article className={`product-card product-card-${iphone.tone}`}>
      <div className="product-visual">
        <img className="product-image" src={iphone.image} alt={iphone.name} loading="lazy" />
      </div>

      <div className="product-info">
        <h3>{iphone.name}</h3>
        <p>{iphone.description}</p>

        {iphone.variants?.length > 0 && (
          <div className="product-variants" aria-label={`Variantes y almacenamiento de ${iphone.name}`}>
            <span className="details-label">Variantes y almacenamiento</span>

            <div className="variant-list">
              {iphone.variants.map((variant) => (
                <div className="variant-row" key={variant.name}>
                  <span className="variant-name">{variant.name}</span>
                  <span className="variant-storage">{variant.storage}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="product-colors" aria-label={`Colores de ${iphone.name}`}>
          <span className="colors-label">Colores</span>
          <div className="color-dots">
            {iphone.colors.map((color) => (
              <span
                className="color-dot"
                key={color.name}
                title={color.name}
                aria-label={color.name}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="product-link">
          Consultar stock por WhatsApp
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
