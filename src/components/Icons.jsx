export function Icon({ name, size = 20, strokeWidth = 1.4 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    shapeRendering: 'geometricPrecision',
    vectorEffect: 'non-scaling-stroke',
    'aria-hidden': true,
  };

  const paths = {
    arrow: (
      <>
        <path d="M5 12h13" />
        <path d="m12.4 5.6 6.4 6.4-6.4 6.4" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M12 20.6a8.1 8.1 0 0 0 6.9-12.3A8.1 8.1 0 0 0 5.7 17.7L4.4 20l2.4-1.2a8 8 0 0 0 5.2 1.8Z" />
        <path d="M9.4 9.1c.13-.3.3-.4.58-.4h.48c.2 0 .34.06.46.3l.68 1.55c.1.22.08.38-.05.56l-.5.65c-.14.18-.14.34-.02.52.38.6.9 1.16 1.52 1.54.2.12.37.12.54-.02l.7-.58c.18-.14.38-.16.59-.07l1.53.66c.26.11.31.26.31.45-.01.63-.27 1.11-.66 1.42-.46.36-1.03.5-1.63.4-.95-.14-2.02-.63-3.2-1.55-1.07-.84-1.94-1.86-2.55-3.03-.49-.94-.53-1.72-.28-2.26Z" />
      </>
    ),
    bag: (
      <>
        <path d="M6.8 9.5h10.4l.9 9.8H5.9l.9-9.8Z" />
        <path d="M9 9.5v-1.6a3 3 0 0 1 6 0v1.6" />
      </>
    ),
    card: (
      <>
        <rect x="3.6" y="6.4" width="16.8" height="11.2" rx="1.35" />
        <path d="M3.6 10.2h16.8" />
        <path d="M7.1 14.1h4.2" />
      </>
    ),
    refresh: (
      <>
        <path d="M18.5 8.8A6.9 6.9 0 0 0 7.3 7" />
        <path d="M6.2 4.9v3.5h3.5" />
        <path d="M5.5 15.2A6.9 6.9 0 0 0 16.7 17" />
        <path d="M17.8 19.1v-3.5h-3.5" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-6.8-5.8-6.8-11a6.8 6.8 0 1 1 13.6 0c0 5.2-6.8 11-6.8 11Z" />
        <circle cx="12" cy="10" r="2.35" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5.5v13" />
        <path d="M5.5 12h13" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}
