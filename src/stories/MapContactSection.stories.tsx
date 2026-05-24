import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import MapContactSection from "../components/MapContactSection";

const meta = {
  title: "Components/MapContactSection",
  component: MapContactSection,
  decorators: [
    (Story) => (
      <View
        style={{
          padding: 24,
          backgroundColor: "#FFFFFF",
          alignItems: "flex-start",
        }}
      >
        <Story />
      </View>
    ),
  ],
  args: {
    mapLabel: "google map*",
    institutionName: "North Seattle College",
    addressLines: ["9600 College Way N,", "Seattle, WA 98103"],
    emailLabel: "Email",
    emailAddress: "northseattle.appdev@gmail.com",
    phoneLabel: "Phone",
    phoneNumber: "206.934.3600",
  },
} satisfies Meta<typeof MapContactSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
