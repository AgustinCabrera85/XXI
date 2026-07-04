import { Menu } from "lucide-react";
import logo from "../assets/xxi-logo.png";
import { siteConfig } from "../data/siteConfig";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a className="brand-link" href="#home" aria-label="Ir al inicio">
          <img className="brand-logo" src={logo} alt="Logo de XXI Miami Corp" />
          <span>{siteConfig.brandName}</span>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          <a href="#about">Nosotros</a>
          <a href="#models">Modelos</a>
          <a href="#contact">Contacto</a>
        </nav>

        <button className="menu-button" aria-label="Abrir menú">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

export default Header;
