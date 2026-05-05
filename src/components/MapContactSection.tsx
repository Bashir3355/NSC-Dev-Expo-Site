import { StyleSheet, Text, View } from "react-native";

type MapContactSectionProps = {
  mapLabel?: string;
  institutionName?: string;
  addressLines?: string[];
  emailLabel?: string;
  emailAddress?: string;
  phoneLabel?: string;
  phoneNumber?: string;
};

export default function MapContactSection({
  mapLabel = "google map*",
  institutionName = "North Seattle College",
  addressLines = ["9600 College Way N,", "Seattle, WA 98103"],
  emailLabel = "Email",
  emailAddress = "northseattle.appdev@gmail.com",
  phoneLabel = "Phone",
  phoneNumber = "206.934.3600",
}: MapContactSectionProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.mapContainer}>
        <Text style={styles.mapLabel}>{mapLabel}</Text>
      </View>

      <View style={styles.contactSection}>
        <View style={styles.infoBlockWithGap}>
          <Text style={styles.institutionName}>{institutionName}</Text>
          {addressLines.map((line) => (
            <Text key={line} style={styles.supportingText}>
              {line}
            </Text>
          ))}
        </View>

        <View style={styles.infoBlockWithGap}>
          <Text style={styles.sectionLabel}>{emailLabel}</Text>
          <Text style={[styles.supportingText, styles.underlinedText]}>
            {emailAddress}
          </Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.sectionLabel}>{phoneLabel}</Text>
          <Text style={styles.regularValueText}>{phoneNumber}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: "flex-start",
    backgroundColor: "transparent",
  },
  mapContainer: {
    width: 498,
    height: 376,
    backgroundColor: "#D9D9D9",
    borderWidth: 0,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 38,
  },
  mapLabel: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 32,
    fontWeight: "400",
    lineHeight: 32,
  },
  contactSection: {
    width: 493,
    height: 341,
    backgroundColor: "transparent",
    borderWidth: 0,
    alignItems: "flex-start",
  },
  infoBlock: {
    alignItems: "flex-start",
  },
  infoBlockWithGap: {
    alignItems: "flex-start",
    marginBottom: 66,
  },
  institutionName: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "left",
  },
  sectionLabel: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "left",
  },
  supportingText: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "left",
  },
  regularValueText: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "left",
  },
  underlinedText: {
    fontWeight: "400",
    textDecorationLine: "underline",
  },
});
