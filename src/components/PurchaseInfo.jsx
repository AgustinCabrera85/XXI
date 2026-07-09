import { siteConfig } from "../data/siteConfig";

function PurchaseInfo() {
  return (
    <section id="purchase-info" className="purchase-info section-padding">
      <div className="container">
        <div className="section-header purchase-header">
          <span className="eyebrow">Información útil</span>
          <h2>Comprá con claridad desde el primer contacto.</h2>
          <p>
            Queremos que tengas toda la información importante antes de avanzar: formas de pago,
            retiro y opciones para entregar tu equipo como parte de pago.
          </p>
        </div>

        <div className="purchase-grid">
          <article className="purchase-card purchase-card-large">
            <span className="purchase-kicker">Formas de pago</span>
            <h3>Opciones simples y flexibles.</h3>
            <div className="payment-tags">
              {siteConfig.paymentMethods.map((method) => (
                <span key={method}>{method}</span>
              ))}
            </div>
            <p className="purchase-note">{siteConfig.paymentNote}</p>
          </article>

          <article className="purchase-card">
            <span className="purchase-kicker">Retiro</span>
            <h3>{siteConfig.location}</h3>
            <p>{siteConfig.pickupHours}</p>
          </article>

          <article className="purchase-card purchase-card-dark">
            <span className="purchase-kicker">Parte de pago</span>
            <h3>Renová tu iPhone.</h3>
            <p>{siteConfig.tradeInText}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PurchaseInfo;
