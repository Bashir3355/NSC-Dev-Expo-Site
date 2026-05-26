import { StyleSheet, Text, View, ViewStyle, useWindowDimensions } from "react-native";

export type ClientFrameworkStepCardProps = {
  headerTitle: string;
  subtitle: string;
  paragraphs: string[];
  style?: ViewStyle;
};

export default function ClientFrameworkStepCard({
  headerTitle,
  subtitle,
  paragraphs,
  style,
}: ClientFrameworkStepCardProps) {
  const { width } = useWindowDimensions();
  const isSmallMobile = width < 380;

  return (
    <View style={[styles.card, style]}>
      <View style={[styles.header, isSmallMobile && styles.headerSmall]}>
        <Text style={[styles.stepTitle, isSmallMobile && styles.stepTitleSmall]}>
          {headerTitle}
        </Text>
        <Text style={[styles.subtitle, isSmallMobile && styles.subtitleSmall]}>{subtitle}</Text>
      </View>

      <View style={[styles.body, isSmallMobile && styles.bodySmall]}>
        {paragraphs.map((paragraph, index) => (
          <Text
            key={`${headerTitle}-${index}`}
            style={[
              styles.paragraph,
              isSmallMobile && styles.paragraphSmall,
              index > 0 && styles.paragraphSpacing,
            ]}
          >
            {paragraph}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
  },
  header: {
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 14,
  },
  headerSmall: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
  },
  stepTitle: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 26,
    flexShrink: 1,
  },
  stepTitleSmall: {
    fontSize: 18,
    lineHeight: 24,
  },
  subtitle: {
    marginTop: 4,
    color: "#000000",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    flexShrink: 1,
  },
  subtitleSmall: {
    fontSize: 14,
    lineHeight: 19,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 20,
  },
  bodySmall: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 18,
  },
  paragraph: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 22,
    textAlign: "left",
    flexShrink: 1,
  },
  paragraphSmall: {
    fontSize: 14,
    lineHeight: 21,
  },
  paragraphSpacing: {
    marginTop: 12,
  },
});
