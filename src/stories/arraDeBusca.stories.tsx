import type { Meta, StoryObj } from "@storybook/react";
import { BarraDeBusca } from "../components/BarraDeBusca/BarraDeBusca";

const meta: Meta<typeof BarraDeBusca> = {
  title: "Componentes/BarraDeBusca",
  component: BarraDeBusca,
};

export default meta;

type Story = StoryObj<typeof BarraDeBusca>;

export const Padrao: Story = {
  args: {
    aoBuscar: (texto: string) => {
      alert(`Buscando por: ${texto}`);
    },
  },
};
