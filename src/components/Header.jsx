import { useEffect, useState } from "react";
import { whatsappMessages, whatsappUrl } from "../data/siteConfig";
import { Icon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const conciergeUrl = whatsappUrl(whatsappMessages.concierge);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <a className="wordmark" href="#home" aria-label="XXI inicio">XXI</a>
        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
          <a href="#collection" onClick={close}>Collection</a>
          <a href="#trade-in" onClick={close}>Trade-In</a>
          <a href="#experience" onClick={close}>Experience</a>
          <a href="#visit" onClick={close}>Visit</a>
          <a className="nav-mobile-cta" href={conciergeUrl} target="_blank" rel="noreferrer">Concierge</a>
        </nav>
        <a className="concierge-button" href={conciergeUrl} target="_blank" rel="noreferrer">
          Concierge <Icon name="whatsapp" size={16} />
        </a>
        <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
          <Icon name={open ? "close" : "menu"} size={25} />
        </button>
      </div>
    </header>
  );
}
