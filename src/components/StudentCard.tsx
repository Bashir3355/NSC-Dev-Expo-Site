import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type StudentCardProps = {
  name: string;
  description: string;
};

export default function StudentCard({ name, description }: StudentCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageBox} />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.darkButton}>
          <Text style={styles.darkButtonText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lightButton}>
          <Text style={styles.lightButtonText}>Student Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    margin: 16,
    maxWidth: 320,
  },
  imageBox: {
    height: 150,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  darkButton: {
    backgroundColor: "#111111",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  darkButtonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  lightButton: {
    backgroundColor: "#eeeeee",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  lightButtonText: {
    color: "#111111",
    fontWeight: "600",
  },
});