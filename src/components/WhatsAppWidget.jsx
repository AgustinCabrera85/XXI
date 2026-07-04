import { MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

function WhatsAppWidget() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      className="whatsapp-widget"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={22} />
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppWidget;
