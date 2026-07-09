import { iphones } from "../data/iphones";
import ProductCard from "./ProductCard";

function ProductShowcase() {
  return (
    <section id="models" className="models section-padding">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Modelos</span>
          <h2>Algunos iPhones para tener como referencia.</h2>
          <p>
            Mostramos una descripción breve de cada modelo y sus colores. Para consultar stock,
            disponibilidad o detalles puntuales, cada tarjeta te lleva directo a WhatsApp.
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
