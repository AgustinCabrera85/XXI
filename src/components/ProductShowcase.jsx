import { iphones } from "../data/iphones";
import ProductCard from "./ProductCard";

function ProductShowcase() {
  return (
    <section id="models" className="models section-padding">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Modelos</span>
          <h2>Líneas de iPhone para tener como referencia.</h2>
          <p>
            Cada tarjeta agrupa variantes de una misma línea, sus opciones de almacenamiento y
            colores de referencia. Para consultar stock o detalles puntuales, te llevamos directo a WhatsApp.
          </p>
        </div>

        <div className="product-grid">
          {iphones.map((iphone) => (
            <ProductCard iphone={iphone} key={iphone.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
