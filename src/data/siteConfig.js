export const siteConfig = {
  brandName: "XXI",
  companyName: "XXI Miami Corp",
  whatsappPhone: "5491176065791",
  whatsappDisplay: "+54 9 11 7606-5791",
  email: "xxicorporative@gmail.com",
  instagramHandle: "@xximiami",
  instagramUrl: "https://www.instagram.com/xximiami/",
  location: "Juana Manso 1666, Puerto Madero",
  pickupHours: "Lunes a sábados · 10 a 19 hs",
  paymentMethods: "Efectivo, dólares, transferencia y tarjeta de crédito",
  tradeInText: "Tomamos equipos desde iPhone 12 en adelante como parte de pago.",
};

export const whatsappMessages = {
  general: "Hola, estoy visitando la web de XXI y quisiera hacer una consulta.",
  concierge: "Hola, estoy visitando la web de XXI y quisiera hablar con un asesor.",
  hero: "Hola, estoy viendo la web de XXI y quisiera que me asesoren para elegir el iPhone que mejor se adapte a lo que necesito.",
  collection: "Hola, estoy viendo la selección de iPhones de XXI y quisiera ayuda para elegir entre los modelos disponibles.",
  compare: "Hola, estoy comparando modelos de iPhone en la web de XXI. ¿Me pueden ayudar a elegir según precio, capacidad y uso?",
  product: (name) => `Hola, estoy viendo ${name} en la web de XXI y quisiera consultar qué modelos, capacidades y colores tienen disponibles.`,
  tradeIn: "Hola, estoy viendo la opción XXI Trade-In y quisiera cotizar mi iPhone como parte de pago. ¿Qué información necesitan para evaluarlo?",
  pickup: "Hola, estoy viendo la opción Private Pickup y quisiera coordinar el retiro de un equipo en Puerto Madero.",
  payment: "Hola, estoy viendo las opciones de pago de XXI y quisiera consultar medios de pago, condiciones y alternativas disponibles.",
  experience: "Hola, estoy viendo la sección The XXI Experience y quisiera conocer más sobre cómo funciona la compra y entrega personalizada.",
  visit: "Hola, estoy viendo la sección Visit XXI y quisiera coordinar una visita/retiro en Puerto Madero.",
};

export function whatsappUrl(message = whatsappMessages.general) {
  return `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(message)}`;
}
