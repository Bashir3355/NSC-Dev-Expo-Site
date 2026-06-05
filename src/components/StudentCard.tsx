import { View, Text, StyleSheet, Button } from "react-native";

type Props = {
  name: string;
  description: string;
};

export default function StudentCard({ name, description }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Button title="GitHub" onPress={() => {}} />
      <Button title="Student Page" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    gap: 10,
  },

  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: "#10914c",
    alignSelf: "center",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
  },
});