import puertoMadero from "../assets/puerto-madero.jpg";
import { whatsappMessages, whatsappUrl } from "../data/siteConfig";
import { Icon } from "./Icons";

export default function Experience() {
  return (
    <section className="experience" id="experience" data-whatsapp-message={whatsappMessages.experience}>
      <div className="experience-media" aria-hidden="true">
        <img src={puertoMadero} alt="" />
        <div className="experience-media-overlay" />
        <span className="experience-location">Puerto Madero · Buenos Aires</span>
      </div>

      <div className="experience-content shell">
        <div className="experience-copy">
          <span className="kicker kicker-light">The XXI Experience</span>
          <h2>Tecnología.<br/>Personas.<br/>Confianza.</h2>
          <p>Elegir un equipo premium debería sentirse igual de cuidado que usarlo. Te acompañamos desde la primera consulta hasta el momento de la entrega.</p>
          <a href={whatsappUrl(whatsappMessages.experience)} target="_blank" rel="noreferrer">
            Hablar con XXI <Icon name="arrow" size={16}/>
          </a>
        </div>

        <div className="experience-manifesto">
          <div><span>01</span><p>Selección antes que saturación.</p></div>
          <div><span>02</span><p>Asesoramiento antes que presión.</p></div>
          <div><span>03</span><p>Confianza antes, durante y después.</p></div>
        </div>
      </div>
    </section>
  );
}
