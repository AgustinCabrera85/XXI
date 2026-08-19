import { siteConfig, whatsappMessages, whatsappUrl } from "../data/siteConfig";
import { Icon } from "./Icons";

export default function Visit() {
  return (
    <section className="visit" id="visit" data-whatsapp-message={whatsappMessages.visit}>
      <div className="shell visit-grid">
        <div className="visit-copy">
          <span className="section-label">Visit XXI</span>
          <h2>Puerto Madero.<br/>A tu tiempo.</h2>
          <p>Coordinamos la entrega para que puedas revisar tu equipo y resolver cualquier duda antes de avanzar.</p>
          <a className="primary-cta visit-cta" href={whatsappUrl(whatsappMessages.visit)} target="_blank" rel="noreferrer">
            <span>Coordinar visita</span><Icon name="arrow" size={17}/>
          </a>
        </div>

        <div className="visit-info">
          <div><span>Ubicación</span><strong>{siteConfig.location}</strong></div>
          <div><span>Atención</span><strong>{siteConfig.pickupHours}</strong></div>
          <div><span>Instagram</span><a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">{siteConfig.instagramHandle}<Icon name="arrow" size={14}/></a></div>
          <div><span>Contacto</span><a href={whatsappUrl(whatsappMessages.visit)} target="_blank" rel="noreferrer">WhatsApp Concierge <Icon name="arrow" size={14}/></a></div>
        </div>
      </div>
    </section>
  );
}
