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
            Esta sección no publica precios ni stock. Su objetivo es mostrar modelos destacados y
            derivar cada consulta al contacto directo.
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
