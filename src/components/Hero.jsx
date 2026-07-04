import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-header.jpg";
import { siteConfig } from "../data/siteConfig";

function Hero() {
  return (
    <section
      id="home"
      className="hero hero-with-image"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="container hero-content hero-content-with-image">
          <div className="hero-copy hero-copy-card">
            <span className="eyebrow">{siteConfig.tagline}</span>

            <h1>Tu próximo iPhone, con una experiencia especial.</h1>

            <p>{siteConfig.mainStatement}</p>

            <div className="hero-actions">
              <a href="#models" className="button button-primary">
                Ver modelos
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="button button-secondary">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
