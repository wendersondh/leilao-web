import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header/Header";

const meta: Meta<typeof Header> = {
  title: "Componentes/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Padrao: Story = {};
