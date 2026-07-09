import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

function ProductCard({ iphone }) {
  const message = `Hola, quiero consultar por ${iphone.name}. ¿Me podrían informar disponibilidad y detalles?`;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <article className={`product-card product-card-${iphone.tone}`}>
      <div className="product-visual" aria-hidden="true">
        <div className="product-phone">
          <div className="product-camera camera-one" />
          <div className="product-camera camera-two" />
          <div className="product-camera camera-three" />
        </div>
      </div>

      <div className="product-info">
        <h3>{iphone.name}</h3>
        <p>{iphone.description}</p>

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
