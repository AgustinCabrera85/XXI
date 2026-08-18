import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/xxi-logo.png";
import { siteConfig } from "../data/siteConfig";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-content">
        <a className="brand-link" href="#home" aria-label="Ir al inicio">
          <img className="brand-logo" src={logo} alt="Logo de XXI Miami Corp" />
          <span>{siteConfig.brandName}</span>
        </a>

        <nav
          className={`nav${isMenuOpen ? " nav-open" : ""}`}
          aria-label="Navegación principal"
          id="main-navigation"
        >
          <a href="#about" onClick={closeMenu}>Nosotros</a>
          <a href="#purchase-info" onClick={closeMenu}>Info útil</a>
          <a href="#models" onClick={closeMenu}>Modelos</a>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
