import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

type StudentBannerProps = {
  title: string;
  buttonLabel: string;
  onPress?: () => void;
};

export default function StudentBanner({
  title,
  buttonLabel,
  onPress,
}: StudentBannerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111827",
    padding: 20,
    borderRadius: 16,
    margin: 16,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    marginBottom: 16,
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});