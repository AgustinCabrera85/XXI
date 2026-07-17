import iphone12ProMax from "../assets/products/IPHONE-12-PRO-MAX-SILVER-FRONT.png";
import iphone13ProMax from "../assets/products/iphone-13-promax-transparent.png";
import iphone14ProMax from "../assets/products/iphone-14-promax-transparent.png";
import iphone15ProMax from "../assets/products/iphone-15-promax-transparent.png";
import iphone16ProMax from "../assets/products/iphone-16-promax-transparent.png";
import iphone17Pro from "../assets/products/iphone-17-pro-5-transparent.png";

const colors = {
  black: { name: "Negro", hex: "#1f2020" },
  white: { name: "Blanco", hex: "#f5f4ef" },
  blue: { name: "Azul", hex: "#2f506c" },
  green: { name: "Verde", hex: "#d7e9d5" },
  purple: { name: "Morado", hex: "#c9b6dc" },
  productRed: { name: "Product RED", hex: "#b91f2c" },

  pacificBlue: { name: "Azul Pacífico", hex: "#40576a" },
  graphite: { name: "Grafito", hex: "#4b4a46" },
  silver: { name: "Plata", hex: "#f2f3ef" },
  gold: { name: "Oro", hex: "#f3dfc3" },

  midnight: { name: "Medianoche", hex: "#1f2328" },
  starlight: { name: "Blanco Estelar", hex: "#f6f1e7" },
  pink: { name: "Rosa", hex: "#f3c8cf" },
  sierraBlue: { name: "Azul Sierra", hex: "#a7bdd1" },
  alpineGreen: { name: "Verde Alpino", hex: "#57675d" },

  yellow: { name: "Amarillo", hex: "#f4e8bd" },
  deepPurple: { name: "Deep Purple", hex: "#594f63" },
  spaceBlack: { name: "Negro Espacial", hex: "#403e3d" },
  goldEnglish: { name: "Gold", hex: "#f4e8ce" },

  titaniumNatural: { name: "Titanio Natural", hex: "#c9c2b8" },
  titaniumBlue: { name: "Titanio Azul", hex: "#3f4e5f" },
  titaniumWhite: { name: "Titanio Blanco", hex: "#f1efea" },
  titaniumBlack: { name: "Titanio Negro", hex: "#3b3936" },
  titaniumDesert: { name: "Titanio Desierto", hex: "#d8bfa8" },

  ultramarine: { name: "Ultramar", hex: "#6f7fbf" },
  teal: { name: "Verde Azulado", hex: "#98c8c0" },

  lavender: { name: "Lavanda", hex: "#c9b7e8" },
  mistBlue: { name: "Azul Neblina", hex: "#c8d8e5" },
  sageGreen: { name: "Verde Salvia", hex: "#b7c8b1" },

  skyBlue: { name: "Azul Cielo", hex: "#bfd8ea" },
  lightGold: { name: "Dorado Claro", hex: "#ead9b8" },
  cloudWhite: { name: "Blanco Nube", hex: "#f4f3ef" },

  cosmicOrange: { name: "Naranja Cósmico", hex: "#d96832" },
  deepBlue: { name: "Azul Profundo", hex: "#243646" },
};

export const iphones = [
  {
    id: 5,
    name: "iPhone 17",
    description:
      "La línea más nueva, pensada para quienes buscan máxima fluidez, almacenamiento amplio y prestaciones de última generación.",
    tone: "white",
    image: iphone17Pro,
    variants: [
      {
        name: "iPhone 17",
        storage: "256 GB, 512 GB",
        colors: [
          colors.lavender,
          colors.mistBlue,
          colors.sageGreen,
          colors.white,
          colors.black,
        ],
      },
      {
        name: "iPhone 17 Air",
        storage: "256 GB, 512 GB, 1 TB",
        colors: [
          colors.skyBlue,
          colors.lightGold,
          colors.cloudWhite,
          colors.spaceBlack,
        ],
      },
      {
        name: "iPhone 17 Pro",
        storage: "256 GB, 512 GB, 1 TB",
        colors: [
          colors.silver,
          colors.cosmicOrange,
          colors.deepBlue,
        ],
      },
      {
        name: "iPhone 17 Pro Max",
        storage: "256 GB, 512 GB, 1 TB, 2 TB",
        colors: [
          colors.silver,
          colors.cosmicOrange,
          colors.deepBlue,
        ],
      },
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
      {
        name: "iPhone 16 / 16 Plus",
        storage: "128 GB, 256 GB, 512 GB",
        colors: [
          colors.ultramarine,
          colors.teal,
          colors.pink,
          colors.white,
          colors.black,
        ],
      },
      {
        name: "iPhone 16 Pro / 16 Pro Max",
        storage: "128 GB, 256 GB, 512 GB, 1 TB",
        colors: [
          colors.titaniumBlack,
          colors.titaniumWhite,
          colors.titaniumNatural,
          colors.titaniumDesert,
        ],
      },
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
      {
        name: "iPhone 15 / 15 Plus",
        storage: "128 GB, 256 GB, 512 GB",
        colors: [
          colors.black,
          colors.blue,
          colors.green,
          colors.yellow,
          colors.pink,
        ],
      },
      {
        name: "iPhone 15 Pro / 15 Pro Max",
        storage: "128 GB, 256 GB, 512 GB, 1 TB",
        colors: [
          colors.titaniumNatural,
          colors.titaniumBlue,
          colors.titaniumWhite,
          colors.titaniumBlack,
        ],
      },
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
      {
        name: "iPhone 14 / 14 Plus",
        storage: "128 GB, 256 GB, 512 GB",
        colors: [
          colors.midnight,
          colors.purple,
          colors.starlight,
          colors.productRed,
          colors.blue,
          colors.yellow,
        ],
      },
      {
        name: "iPhone 14 Pro / 14 Pro Max",
        storage: "128 GB, 256 GB, 512 GB, 1 TB",
        colors: [
          colors.deepPurple,
          colors.spaceBlack,
          colors.silver,
          colors.goldEnglish,
        ],
      },
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
      {
        name: "iPhone 13 / 13 mini",
        storage: "128 GB, 256 GB, 512 GB",
        colors: [
          colors.midnight,
          colors.starlight,
          colors.pink,
          colors.green,
          colors.productRed,
        ],
      },
      {
        name: "iPhone 13 Pro / 13 Pro Max",
        storage: "128 GB, 256 GB, 512 GB, 1 TB",
        colors: [
          colors.graphite,
          colors.silver,
          colors.gold,
          colors.sierraBlue,
          colors.alpineGreen,
        ],
      },
    ],
  },
  {
    id: 0,
    name: "iPhone 12",
    description:
      "Una línea muy buscada por su diseño moderno, buen rendimiento y excelente equilibrio entre calidad, cámara y experiencia diaria.",
    tone: "silver",
    image: iphone12ProMax,
    variants: [
      {
        name: "iPhone 12 / 12 mini",
        storage: "64 GB, 128 GB, 256 GB",
        colors: [
          colors.black,
          colors.white,
          colors.blue,
          colors.green,
          colors.purple,
          colors.productRed,
        ],
      },
      {
        name: "iPhone 12 Pro / 12 Pro Max",
        storage: "128 GB, 256 GB, 512 GB",
        colors: [
          colors.pacificBlue,
          colors.graphite,
          colors.silver,
          colors.gold,
        ],
      },
    ],
  },
];