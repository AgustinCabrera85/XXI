import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

function ProductCard({ iphone }) {
  const [isOpen, setIsOpen] = useState(false);

  const message = `Hola, quiero consultar stock, colores y detalles de ${iphone.name}.`;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(
    message
  )}`;

  const detailsId = `product-details-${iphone.id}`;

  return (
    <article className={`product-card product-card-${iphone.tone}`}>
      <div className="product-visual">
        <img
          className="product-image"
          src={iphone.image}
          alt={iphone.name}
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <h3>{iphone.name}</h3>
        <p>{iphone.description}</p>

        {iphone.variants?.length > 0 && (
          <div className={`product-details ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="details-toggle"
              aria-expanded={isOpen}
              aria-controls={detailsId}
              onClick={() => setIsOpen((current) => !current)}
            >
              <span className="details-toggle-text">
                <span className="details-toggle-label">
                  Variantes y colores
                </span>
                <span className="details-toggle-helper">
                  {isOpen ? "Ocultar detalles" : "Ver opciones disponibles"}
                </span>
              </span>

              <span className="details-toggle-icon" aria-hidden="true">
                <ChevronDown size={17} />
              </span>
            </button>

            <div
              id={detailsId}
              className="product-details-panel"
              aria-hidden={!isOpen}
            >
              <div className="product-details-inner">
                <div className="variant-list">
                  {iphone.variants.map((variant) => (
                    <div className="variant-row" key={variant.name}>
                      <div className="variant-heading">
                        <span className="variant-name">{variant.name}</span>
                        <span className="variant-storage">
                          {variant.storage}
                        </span>
                      </div>

                      {variant.colors?.length > 0 && (
                        <div
                          className="variant-colors"
                          aria-label={`Colores disponibles para ${variant.name}`}
                        >
                          {variant.colors.map((color) => (
                            <span
                              className="variant-color-chip"
                              key={color.name}
                            >
                              <span
                                className="variant-color-dot"
                                style={{ backgroundColor: color.hex }}
                                aria-hidden="true"
                              />
                              {color.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="product-link"
        >
          Consultar stock por WhatsApp
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}

export default ProductCard;