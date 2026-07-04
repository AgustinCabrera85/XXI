import { ArrowUpRight } from "lucide-react";

function ProductCard({ iphone }) {
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
        <a href="#contact" className="product-link">
          Consultar modelo
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
