import { useState } from 'react';
import { iphones } from '../data/iphones';
import { whatsappMessages, whatsappUrl } from '../data/siteConfig';
import { Icon } from './Icons';

function CatalogRow({ iphone, index, isOpen, onToggle }) {
  const panelId = `catalog-panel-${iphone.id}`;
  const triggerId = `catalog-trigger-${iphone.id}`;

  return (
    <article className={`catalog-row${isOpen ? ' is-open' : ''}`} data-whatsapp-message={whatsappMessages.product(iphone.name)}>
      <button
        id={triggerId}
        className="catalog-trigger"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="catalog-index">0{index + 1}</span>
        <div className="catalog-title">
          <span>{iphone.label}</span>
          <h3>{iphone.name}</h3>
        </div>
        <p>{iphone.description}</p>
        <span className="catalog-plus"><Icon name="plus" size={18} strokeWidth={1.45} /></span>
      </button>

      <div
        id={panelId}
        className="catalog-detail-panel"
        role="region"
        aria-labelledby={triggerId}
      >
        <div className="catalog-detail-inner">
          <div className="catalog-detail">
            <ul>
              {iphone.variants.map((variant) => (
                <li key={variant}>{variant}</li>
              ))}
            </ul>
            <a
              href={whatsappUrl(whatsappMessages.product(iphone.name))}
              target="_blank"
              rel="noreferrer"
            >
              Consultar disponibilidad <Icon name="arrow" size={15} strokeWidth={1.45} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Catalog() {
  const [openId, setOpenId] = useState(iphones[0]?.id ?? null);

  return (
    <section className="catalog" id="catalog" data-whatsapp-message={whatsappMessages.compare}>
      <div className="shell catalog-shell">
        <div className="catalog-header">
          <span className="section-label">Full Collection</span>
          <h2>El modelo correcto es el que encaja con vos.</h2>
          <p>
            Consultanos disponibilidad, capacidad y colores. El stock cambia constantemente y te ayudamos a comparar alternativas.
          </p>
          <a
            className="catalog-advisor"
            href={whatsappUrl(whatsappMessages.compare)}
            target="_blank"
            rel="noreferrer"
          >
            Pedir recomendación <Icon name="arrow" size={15} strokeWidth={1.45} />
          </a>
        </div>

        <div className="catalog-list">
          {iphones.map((iphone, index) => (
            <CatalogRow
              key={iphone.id}
              iphone={iphone}
              index={index}
              isOpen={openId === iphone.id}
              onToggle={() => setOpenId((current) => (current === iphone.id ? null : iphone.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
