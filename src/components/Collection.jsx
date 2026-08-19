import { Icon } from './Icons';
import { whatsappMessages } from '../data/siteConfig';

const assetBase = 'https://raw.githubusercontent.com/AgustinCabrera85/XXI/main/src/assets/products';

const featured = [
  {
    label: 'Latest',
    title: 'iPhone 17 Pro',
    copy: 'Performance sin compromisos.',
    image: `${assetBase}/iphone-17-pro-5-transparent.png`,
    className: 'warm',
    imageClass: 'product-17',
    imageStyle: {
      '--product-height': '112%',
      '--product-x': '26%',
      '--product-y': '20%',
      '--product-scale': '0.98',
      '--product-hover-x': '22%',
      '--product-hover-y': '17%',
      '--product-hover-scale': '1.01',
    },
  },
  {
    label: 'Essential',
    title: 'iPhone 17',
    copy: 'Esencial. Refinado. Todo lo que necesitás.',
    image: `${assetBase}/iphone-16-promax-transparent.png`,
    className: 'soft',
    imageClass: 'product-16',
    imageStyle: {
      '--product-height': '108%',
      '--product-x': '20%',
      '--product-y': '18%',
      '--product-scale': '0.97',
      '--product-hover-x': '16%',
      '--product-hover-y': '15%',
      '--product-hover-scale': '1.0',
    },
  },
  {
    label: 'Selected',
    title: 'iPhone 15 / 14',
    copy: 'Tecnología que sigue rindiendo.',
    image: `${assetBase}/iphone-15-promax-transparent.png`,
    className: 'dark',
    imageClass: 'product-15',
    imageStyle: {
      '--product-height': '104%',
      '--product-x': '18%',
      '--product-y': '18%',
      '--product-scale': '0.96',
      '--product-hover-x': '14%',
      '--product-hover-y': '15%',
      '--product-hover-scale': '0.99',
    },
  },
];

export default function Collection() {
  return (
    <section className="collection-section" id="collection" data-whatsapp-message={whatsappMessages.collection}>
      <div className="shell">
        <div className="collection-heading">
          <div>
            <span className="section-label">The Collection</span>
            <h2>Una selección simple.<br />Una decisión más fácil.</h2>
          </div>
          <p>Seleccionamos los modelos más buscados para ayudarte a encontrar el iPhone ideal de una manera más simple, clara y personalizada.</p>
        </div>

        <div className="collection-grid">
          {featured.map((item, index) => (
            <article className={`collection-card ${item.className}`} key={item.title} data-whatsapp-message={whatsappMessages.product(item.title)}>
              <div className="collection-copy">
                <div>
                  <span className="collection-index">0{index + 1}</span>
                  <span className="collection-label">{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <a href="#catalog">Explorar <Icon name="arrow" size={16} strokeWidth={1.35} /></a>
              </div>
              <div className="collection-image-wrap">
                <img
                  className={item.imageClass}
                  style={item.imageStyle}
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="collection-footer">
          <span>iPhone 12 → 17 Pro Max</span>
          <a href="#catalog">Ver toda la colección <Icon name="arrow" size={16} strokeWidth={1.35} /></a>
        </div>
      </div>
    </section>
  );
}
