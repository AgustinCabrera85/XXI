import iphone13ProMax from "../assets/products/iphone-13-promax-transparent.png";
import iphone14ProMax from "../assets/products/iphone-14-promax-transparent.png";
import iphone15ProMax from "../assets/products/iphone-15-promax-transparent.png";
import iphone16ProMax from "../assets/products/iphone-16-promax-transparent.png";
import iphone17Pro from "../assets/products/iphone-17-pro-5-transparent.png";

export const iphones = [
  {
    id: 5,
    name: "iPhone 17",
    description:
      "La línea más nueva, pensada para quienes buscan máxima fluidez, almacenamiento amplio y prestaciones de última generación.",
    tone: "white",
    image: iphone17Pro,
    variants: [
      { name: "iPhone 17 / 17e", storage: "256 GB, 512 GB" },
      { name: "iPhone 17 Air", storage: "256 GB, 512 GB, 1 TB" },
      { name: "iPhone 17 Pro", storage: "256 GB, 512 GB, 1 TB" },
      { name: "iPhone 17 Pro Max", storage: "256 GB, 512 GB, 1 TB, 2 TB" },
    ],
    colors: [
      { name: "Blanco", hex: "#f4f4f1" },
      { name: "Negro", hex: "#1e2327" },
      { name: "Azul profundo", hex: "#243646" },
    ],
  },
  {
    id: 4,
    name: "iPhone 16",
    description:
      "Una familia moderna y refinada, con excelente rendimiento, pantalla de gran calidad y opciones Pro para una experiencia de alta gama.",
    tone: "cream",
    image: iphone16ProMax,
    variants: [
      { name: "iPhone 16 / 16 Plus", storage: "128 GB, 256 GB, 512 GB" },
      { name: "iPhone 16 Pro / 16 Pro Max", storage: "128 GB, 256 GB, 512 GB, 1 TB" },
    ],
    colors: [
      { name: "Titanio del desierto", hex: "#d8bfa8" },
      { name: "Titanio natural", hex: "#c9c2b8" },
      { name: "Titanio blanco", hex: "#f1efea" },
      { name: "Titanio negro", hex: "#3b3936" },
    ],
  },
  {
    id: 3,
    name: "iPhone 15",
    description:
      "Una línea potente y muy equilibrada, con modelos Plus y Pro para quienes buscan diseño premium, gran cámara y excelente desempeño.",
    tone: "graphite",
    image: iphone15ProMax,
    variants: [
      { name: "iPhone 15 / 15 Plus", storage: "128 GB, 256 GB, 512 GB" },
      { name: "iPhone 15 Pro / 15 Pro Max", storage: "128 GB, 256 GB, 512 GB, 1 TB" },
    ],
    colors: [
      { name: "Titanio natural", hex: "#c9c2b8" },
      { name: "Titanio azul", hex: "#3f4e5f" },
      { name: "Titanio blanco", hex: "#f1efea" },
      { name: "Titanio negro", hex: "#3b3936" },
    ],
  },
  {
    id: 2,
    name: "iPhone 14",
    description:
      "Una opción premium, elegante y sólida, con muy buen rendimiento, cámaras confiables y variantes para distintos estilos de uso.",
    tone: "sand",
    image: iphone14ProMax,
    variants: [
      { name: "iPhone 14 / 14 Plus", storage: "128 GB, 256 GB, 512 GB" },
      { name: "iPhone 14 Pro / 14 Pro Max", storage: "128 GB, 256 GB, 512 GB, 1 TB" },
    ],
    colors: [
      { name: "Morado oscuro", hex: "#594f63" },
      { name: "Oro", hex: "#f4e8ce" },
      { name: "Plata", hex: "#f2f3ef" },
      { name: "Negro espacial", hex: "#403e3d" },
    ],
  },
  {
    id: 1,
    name: "iPhone 13",
    description:
      "Una línea confiable y potente, con gran autonomía, muy buena pantalla y opciones Pro para quienes buscan una experiencia más completa.",
    tone: "blue",
    image: iphone13ProMax,
    variants: [
      { name: "iPhone 13 / 13 mini", storage: "128 GB, 256 GB, 512 GB" },
      { name: "iPhone 13 Pro / 13 Pro Max", storage: "128 GB, 256 GB, 512 GB, 1 TB" },
    ],
    colors: [
      { name: "Azul Sierra", hex: "#a7bdd1" },
      { name: "Grafito", hex: "#54524f" },
      { name: "Oro", hex: "#f4e8ce" },
      { name: "Plata", hex: "#f2f3ef" },
      { name: "Verde alpino", hex: "#57675d" },
    ],
  },
];
