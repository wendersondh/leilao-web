import type { Meta, StoryObj } from "@storybook/react";
import { TemporizadorLeilao } from "../components/TemporizadorLeilao";

const meta: Meta<typeof TemporizadorLeilao> = {
  title: "Leilao/TemporizadorLeilao",
  component: TemporizadorLeilao,
};

export default meta;
type Story = StoryObj<typeof TemporizadorLeilao>;

export const Curto: Story = {
  args: {
    segundos: 30,
  },
};

export const UmMinuto: Story = {
  args: {
    segundos: 60,
  },
};

export const UmaHora: Story = {
  args: {
    segundos: 3661,
  },
};

export const Encerrado: Story = {
  args: {
    segundos: 0,
  },
};
