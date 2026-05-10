import type { Meta, StoryObj } from "@storybook/react";
import ContactUsForm from "../components/ContactUsForm";

const meta = {
  title: "Components/ContactUsForm",
  component: ContactUsForm,
} satisfies Meta<typeof ContactUsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};