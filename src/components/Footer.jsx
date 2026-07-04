import InstagramIcon from "./InstagramIcon";
import logo from "../assets/xxi-logo.png";
import { siteConfig } from "../data/siteConfig";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a className="footer-brand" href="#home" aria-label="Ir al inicio">
          <img className="footer-logo" src={logo} alt="Logo de XXI Miami Corp" />
          <strong>{siteConfig.brandName}</strong>
        </a>

        <div className="footer-links">
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon size={17} />
            @{siteConfig.instagramHandle}
          </a>
          <span>© 2026. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
