import type { Meta, StoryObj } from "@storybook/react";
import { ListaDeProdutos } from "../components/ListaDeProdutos";

const meta: Meta<typeof ListaDeProdutos> = {
  title: "Leilao/ListaDeProdutos",
  component: ListaDeProdutos,
};

export default meta;
type Story = StoryObj<typeof ListaDeProdutos>;

export const SemFiltro: Story = {
  args: {},
};

export const ComFiltro: Story = {
  args: {
    filtro: "PlayStation",
  },
};
