import { Icon } from './Icons';
import { whatsappMessages, whatsappUrl } from '../data/siteConfig';

const services = [
  {
    n: '01',
    icon: 'bag',
    title: 'Private Pickup',
    text: 'Retiro coordinado en Puerto Madero, con atención personalizada.',
    link: whatsappUrl(whatsappMessages.pickup),
    linkText: 'Coordinar visita',
    external: true,
    message: whatsappMessages.pickup,
  },
  {
    n: '02',
    icon: 'card',
    title: 'Flexible Payment',
    text: 'Efectivo, dólares, transferencia y tarjeta. Pagás al recibir tu equipo.',
    link: whatsappUrl(whatsappMessages.payment),
    linkText: 'Consultar opciones',
    external: true,
    message: whatsappMessages.payment,
  },
  {
    n: '03',
    icon: 'refresh',
    title: 'XXI Trade-In',
    text: 'Tomamos tu iPhone desde el 12 en adelante como parte de pago.',
    link: whatsappUrl(whatsappMessages.tradeIn),
    linkText: 'Cotizar mi iPhone',
    external: true,
    message: whatsappMessages.tradeIn,
  },
];

export default function Services() {
  return (
    <section className="services" id="trade-in" data-whatsapp-message={whatsappMessages.tradeIn}>
      <div className="shell service-grid">
        {services.map((item) => (
          <article className="service-item" key={item.title} data-whatsapp-message={item.message}>
            <div className="service-topline">
              <span>{item.n}</span>
              <Icon name={item.icon} size={25} strokeWidth={1.35} />
            </div>
            <div className="service-body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <a href={item.link} {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
              {item.linkText}<Icon name="arrow" size={15} strokeWidth={1.45} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
