# XXI Miami Corp - iPhone Minimal Site

Sitio institucional minimalista para XXI Miami Corp, orientado a la venta de iPhones sin publicar precios ni stock.

## Características

- React + Vite.
- Componentes separados por sección.
- Paleta clara: beige, blanco, marrón, gris y negro.
- Logo integrado en header, footer y favicon.
- Imagen horizontal integrada como encabezado / hero.
- Texto institucional de XXI Miami Corp.
- Sección de información útil con formas de pago, retiro y parte de pago.
- Sección de modelos sin precios ni stock, con colores por modelo y consulta directa por WhatsApp.
- Sección de contacto con WhatsApp, Instagram, email y lugar de retiro.
- Widget flotante de WhatsApp.
- Diseño responsive.

## Estructura

```txt
src/
  assets/
    hero-header.jpg
    xxi-logo.png
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Header.jsx
    Hero.jsx
    PurchaseInfo.jsx
    ProductCard.jsx
    ProductShowcase.jsx
    WhatsAppWidget.jsx
  data/
    iphones.js
    siteConfig.js
  App.jsx
  main.jsx
  styles.css
public/
  favicon.png
```

## Instalación

```bash
npm install
npm run dev
```

Luego abrir la URL que muestra Vite, normalmente:

```txt
http://localhost:5173
```

## Configurar WhatsApp

Editar el archivo:

```txt
src/data/siteConfig.js
```

Y reemplazar:

```js
whatsappPhone: "54911XXXXXXXX"
```

Por el número real en formato internacional, por ejemplo:

```js
whatsappPhone: "5491123456789"
```

También podés cambiar el mensaje inicial:

```js
whatsappMessage: "Hola, quiero consultar por modelos de iPhone."
```

## Configurar Instagram

El Instagram se configura en `src/data/siteConfig.js`:

```js
instagramHandle: "Xxi.miamicorp_",
instagramUrl: "https://www.instagram.com/xxi.miamicorp_/",
```

El link se muestra en la sección de contacto y en el footer.

## Cambiar texto institucional

El texto principal se edita en `src/data/siteConfig.js`:

```js
mainStatement:
  "XXI Miami Corp no es solo un negocio, es el espacio donde transformamos la búsqueda de tu próximo iPhone en algo especial.",
```

## Configurar pagos, retiro y parte de pago

Editar el archivo:

```txt
src/data/siteConfig.js
```

Ahí podés modificar:

```js
paymentMethods: ["Efectivo en pesos", "Dólar en mano", "Transferencia", "Tarjeta de crédito"],
paymentNote: "No pedimos pago por adelantado.",
location: "Juana Manso 1161, Puerto Madero",
pickupHours: "Lunes a sábados de 10 a 19 hs",
tradeInText: "Tomamos equipos en parte de pago del iPhone 12 en adelante.",
```

## Configurar modelos y colores

Editar el archivo:

```txt
src/data/iphones.js
```

Ahí podés agregar, quitar o modificar modelos, descripciones y colores sin tocar el componente visual. Cada modelo tiene un array `colors` con `name` y `hex` para mostrar los circulitos de color.

## Cambiar logo o imagen de encabezado

Reemplazar estos archivos manteniendo el mismo nombre:

```txt
src/assets/xxi-logo.png
src/assets/hero-header.jpg
```

## Nota legal / marca

Este sitio usa referencias a iPhone solo para describir productos. Conviene evitar que el diseño parezca un sitio oficial de Apple, salvo que el cliente cuente con autorización correspondiente.
