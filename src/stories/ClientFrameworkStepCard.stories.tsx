import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import ClientFrameworkStepCard, {
  ClientFrameworkStepCardProps,
} from "../components/ClientFrameworkStepCard";

const stepCards: ClientFrameworkStepCardProps[] = [
  {
    headerTitle: "1.  Discover",
    subtitle: "Define goals and pain points",
    paragraphs: [
      "To kick things off you will be meeting with our department head and discuss in detail what problems you need solving. To kick things off you will be meeting with our department head and discuss in detail what problems you need solving.",
      "To kick things off you will be meeting with our department head and discuss in detail what problems you need solving.To kick things off you will be meeting with our department head and discuss in detail what problems you need solving.",
    ],
  },
  {
    headerTitle: "2.  Blueprinting",
    subtitle: "Wireframing and logic flow",
    paragraphs: [
      "Placeholder text to fill this box up with text. Pay no attention to this body of text as it is only for looks and filler. Placeholder text to fill this box up with text. Pay no attention to this body of text as it is only for looks and filler.  Placeholder text to fill this box up with text. Pay no attention to this body of text as it is only for looks and filler. Placeholder text to fill this box up with text. Pay no attention to this body of text as it is only for looks and filler.",
    ],
  },
];

const meta = {
  title: "Components/ClientFrameworkStepCard",
  component: ClientFrameworkStepCard,
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          width: "100%",
          paddingHorizontal: 16,
          paddingVertical: 24,
          alignItems: "center",
          backgroundColor: "#F3F3F3",
        }}
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ClientFrameworkStepCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: stepCards[0],
};

export const ClientEngagementFramework: Story = {
  render: () => (
    <View style={{ width: "100%", maxWidth: 480 }}>
      {stepCards.map((stepCard, index) => (
        <View key={stepCard.headerTitle} style={index > 0 ? { marginTop: 24 } : undefined}>
          <ClientFrameworkStepCard
            headerTitle={stepCard.headerTitle}
            subtitle={stepCard.subtitle}
            paragraphs={stepCard.paragraphs}
          />
        </View>
      ))}
    </View>
  ),
};
