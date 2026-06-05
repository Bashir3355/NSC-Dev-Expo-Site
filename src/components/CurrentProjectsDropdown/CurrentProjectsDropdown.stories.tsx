import type { Meta, StoryObj } from "@storybook/react";
import { CurrentProjectsDropdown } from "./CurrentProjectsDropdown";

const meta: Meta<typeof CurrentProjectsDropdown> = {
  title: "Components/CurrentProjectsDropdown",
  component: CurrentProjectsDropdown,
};

export default meta;

type Story = StoryObj<typeof CurrentProjectsDropdown>;

export const Default: Story = {
  args: {},
};

export const CustomOptions: Story = {
  args: {
    options: [
      { id: "proj1", label: "Custom Project 1" },
      { id: "proj2", label: "Custom Project 2" },
    ],
  },
};
