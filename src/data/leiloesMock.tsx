import type { Produto } from "../types/Produto";

export const produtosMock: Produto[] = [
  {
    id: 1,
    titulo: "PlayStation 5",
    descricao: "Console em perfeito estado",
    imagem:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
    precoMinimo: 3000,
    lanceAtual: 3200,
    aumentoMinimo: 50,
    tempoRestante: 300000,
    categoria: "Eletrônicos",
  },
  {
    id: 2,
    titulo: "Notebook Gamer Acer Nitro 5",
    descricao: "RTX 3050, i5 11ª geração, 16GB RAM",
    imagem:
      "https://images3.kabum.com.br/produtos/fotos/467613/notebook-gamer-asus-rog-strix-g16-rtx-4060-16gb-ram-brinde-controle-ps4-g614jv-n3094w_1721229589_gg.jpg",
    precoMinimo: 4200,
    lanceAtual: 4300,
    aumentoMinimo: 100,
    tempoRestante: 120,
    categoria: "Informática",
  },
  {
    id: 3,
    titulo: "iPhone 13",
    descricao: "128GB, seminovo, bateria 92%",
    imagem:
      "https://pplware.sapo.pt/wp-content/uploads/2021/09/iphone_13_pro_max00.jpg",
    precoMinimo: 3500,
    lanceAtual: 3600,
    aumentoMinimo: 50,
    tempoRestante: 300,
    categoria: "Celulares",
  },
  {
    id: 4,
    titulo: "iPhone 13",
    descricao: "128GB, seminovo, bateria 92%",
    imagem:
      "https://pplware.sapo.pt/wp-content/uploads/2021/09/iphone_13_pro_max00.jpg",
    precoMinimo: 3500,
    lanceAtual: 3600,
    aumentoMinimo: 50,
    tempoRestante: 300,
    categoria: "Celulares",
  },
];