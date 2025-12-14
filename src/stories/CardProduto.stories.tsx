import type { Meta, StoryObj } from "@storybook/react";
import { CardProduto } from "../components/CardProduto";
import type { Produto } from "../types/Produto";

const produtoMock: Produto = {
  id: 1,
  titulo: "PlayStation 5",
  descricao: "Console em perfeito estado",
  imagem:
    "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
  precoMinimo: 3000,
  lanceAtual: 3200,
  aumentoMinimo: 50,
  tempoRestante: 120,
  categoria: "Eletrônicos",
};

const meta: Meta<typeof CardProduto> = {
  title: "Leilao/CardProduto",
  component: CardProduto,
};

export default meta;
type Story = StoryObj<typeof CardProduto>;

export const Padrao: Story = {
  args: {
    produto: produtoMock,
  },
};

export const QuaseEncerrado: Story = {
  args: {
    produto: {
      ...produtoMock,
      tempoRestante: 10,
    },
  },
};
