import { MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Compra con confianza",
    text: "Te brindamos información clara para que puedas elegir con tranquilidad.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Modelos seleccionados",
    text: "Trabajamos con opciones destacadas para ayudarte a encontrar el equipo ideal.",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Atención personalizada",
    text: "Respondemos tus dudas de forma directa y te acompañamos antes de avanzar.",
  },
];

function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container split-layout">
        <div className="section-title-block">
          <span className="eyebrow">Sobre nosotros</span>
          <h2>Elegir tu iPhone puede ser simple, seguro y especial.</h2>
        </div>

        <div className="about-content">
          <p>
            XXI Miami Corp no es solo un negocio: es un espacio pensado para
            acompañarte en la búsqueda del equipo ideal, con atención cercana,
            asesoramiento claro y un trato personalizado.
          </p>

          <p>
            Sabemos que comprar un iPhone es una decisión importante. Por eso,
            te ayudamos a comparar modelos, resolver dudas y encontrar la opción
            que mejor se adapte a lo que necesitás.
          </p>

          <p>
            Nuestro compromiso es brindarte una experiencia confiable, cómoda y
            amable desde el primer contacto.
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