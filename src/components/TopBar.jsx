import { whatsappMessages, whatsappUrl } from "../data/siteConfig";
import { Icon } from "./Icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="shell topbar-inner">
        <span className="topbar-location"><Icon name="pin" size={13} /> Puerto Madero, CABA</span>
        <span className="topbar-message">Atención personalizada. Equipos seleccionados.</span>
        <a href={whatsappUrl(whatsappMessages.concierge)} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={14} /> Escribinos por WhatsApp
        </a>
      </div>
    </div>
  );
}
