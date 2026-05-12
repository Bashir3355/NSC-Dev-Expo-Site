import { View, Image, Text, StyleSheet, ImageSourcePropType } from "react-native";

type CompanyCardProps = {
  name: string;
  logo?: ImageSourcePropType;
};

export default function CompanyCard({ name, logo }: CompanyCardProps) {
  return (
    <View style={styles.card}>
      {logo ? (
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      ) : (
        <Text style={styles.placeholderText}>
          Company{"\n"}Logo*{"\n\n"}{name}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    backgroundColor: "#6B6B6B",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 90,
  },
  placeholderText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 38,
  },
});