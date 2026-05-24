import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface StudentBannerProps {
  title: string;
  buttonLabel: string;
  onPress?: () => void;
}

export default function StudentBanner({
  title,
  buttonLabel,
  onPress,
}: StudentBannerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>
        Start your journey with North Seattle College today.
      </Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    padding: 24,
    backgroundColor: "#111827",
    borderRadius: 12,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 24,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
});