import React from "react";
import { View } from "react-native";

import StudentBanner from "../components/StudentBanner";

const meta = {
  title: "Components/StudentBanner",
  component: StudentBanner,

  args: {
    title: "Welcome Students",
    buttonLabel: "Apply Now",
  },

  decorators: [
    (Story: any) => (
      <View style={{ flex: 1, padding: 24 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const Default = {};