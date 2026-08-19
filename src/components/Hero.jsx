import heroDevice from "../assets/hero-device.jpg";
import { whatsappMessages, whatsappUrl } from "../data/siteConfig";
import { Icon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="home" data-whatsapp-message={whatsappMessages.hero}>
      <div className="hero-stage shell">
        <div className="hero-text">
          <span className="kicker">Experiencia XXI · Puerto Madero</span>
          <h1>iPhone.<br/>Elegido para vos.</h1>
          <p>Equipos seleccionados, asesoramiento personal y una experiencia de compra a la altura.</p>
          <div className="hero-actions">
            <a className="primary-cta" href="#collection">
              <span>Explorar colección</span><Icon name="arrow" size={18}/>
            </a>
            <a className="text-cta" href={whatsappUrl(whatsappMessages.hero)} target="_blank" rel="noreferrer">
              Hablar con un asesor
            </a>
          </div>
          <div className="hero-proof" aria-label="Beneficios principales">
            <span>Selección curada</span>
            <span>Retiro coordinado</span>
            <span>Trade-In</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-image-frame">
            <img src={heroDevice} alt="" />
          </div>
          <span className="hero-visual-note">Selected technology · XXI</span>
        </div>
      </div>
    </section>
  );
}
