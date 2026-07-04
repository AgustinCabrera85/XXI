import { MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const values = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Compra con confianza",
    text: "Te acompañamos con información clara para que elijas tu iPhone con tranquilidad.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Modelos seleccionados",
    text: "Trabajamos con opciones destacadas para que encuentres un equipo que se adapte a tu estilo y necesidad.",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Atención personalizada",
    text: "Respondemos tus consultas de forma directa y te orientamos en cada paso antes de decidir.",
  },
];

function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container split-layout">
        <div className="section-title-block">
          <span className="eyebrow">Sobre nosotros</span>
          <h2>Hacemos que elegir tu próximo iPhone sea más simple, seguro y especial.</h2>
        </div>

        <div className="about-content">
          <p>{siteConfig.mainStatement}</p>

          <p>
            Sabemos que comprar un iPhone es una decisión importante. Por eso, en XXI Miami Corp
            buscamos ofrecer una experiencia cercana, clara y personalizada, donde puedas consultar,
            comparar modelos y recibir orientación antes de avanzar.
          </p>

          <p>
            Nuestro compromiso es ayudarte a encontrar el equipo ideal para vos, con una atención
            directa y un trato pensado para que cada consulta se sienta cómoda, confiable y especial.
          </p>

          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
