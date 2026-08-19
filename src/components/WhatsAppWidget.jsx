import { useEffect, useState } from "react";
import { whatsappMessages, whatsappUrl } from "../data/siteConfig";
import { Icon } from "./Icons";

export default function WhatsAppWidget() {
  const [message, setMessage] = useState(whatsappMessages.general);

  useEffect(() => {
    let frameId = null;

    const resolveContext = () => {
      frameId = null;

      const x = Math.round(window.innerWidth * 0.5);
      const y = Math.round(window.innerHeight * 0.56);
      const element = document.elementFromPoint(x, y);
      const contextualElement = element?.closest?.("[data-whatsapp-message]");
      const nextMessage = contextualElement?.dataset?.whatsappMessage || whatsappMessages.general;

      setMessage((current) => (current === nextMessage ? current : nextMessage));
    };

    const scheduleResolve = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(resolveContext);
    };

    resolveContext();
    window.addEventListener("scroll", scheduleResolve, { passive: true });
    window.addEventListener("resize", scheduleResolve, { passive: true });
    window.addEventListener("hashchange", scheduleResolve);
    document.addEventListener("click", scheduleResolve, true);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleResolve);
      window.removeEventListener("resize", scheduleResolve);
      window.removeEventListener("hashchange", scheduleResolve);
      document.removeEventListener("click", scheduleResolve, true);
    };
  }, []);

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp sobre esta sección"
      title="Consultar por WhatsApp"
    >
      <Icon name="whatsapp" size={22}/>
    </a>
  );
}
