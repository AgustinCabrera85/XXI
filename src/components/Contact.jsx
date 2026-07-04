import { Mail, MapPin, MessageCircle } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { siteConfig } from "../data/siteConfig";

function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-card">
        <div className="contact-copy">
          <span className="eyebrow">Contacto</span>
          <h2>Consultá por el iPhone que estás buscando.</h2>
          <p>
            Escribinos para recibir asesoramiento personalizado, consultar modelos disponibles o
            resolver cualquier duda antes de comprar.
          </p>

          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-light">
            Escribir por WhatsApp
            <MessageCircle size={18} />
          </a>
        </div>

        <div className="contact-details">
          <article>
            <MessageCircle size={22} />
            <div>
              <span>WhatsApp</span>
              <strong>+54 9 11 7606-5791</strong>
            </div>
          </article>


          <article>
            <InstagramIcon size={22} />
            <div>
              <span>Instagram</span>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                <strong>@{siteConfig.instagramHandle}</strong>
              </a>
            </div>
          </article>

          <article>
            <Mail size={22} />
            <div>
              <span>Email</span>
              <strong>{siteConfig.email}</strong>
            </div>
          </article>

          <article>
            <MapPin size={22} />
            <div>
              <span>Ubicación</span>
              <strong>{siteConfig.location}</strong>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
