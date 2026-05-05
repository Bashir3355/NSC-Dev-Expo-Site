import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import CurrentStudentPreviewSection from "../components/CurrentStudentPreviewSection";

const meta = {
  title: "Components/CurrentStudentPreviewSection",
  component: CurrentStudentPreviewSection,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", padding: 24 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CurrentStudentPreviewSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
