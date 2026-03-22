import { ScrollView, Text, StyleSheet } from "react-native";
import Hello from '../../components/Hello';
import Hero from "../../components/Hero";


export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Hero />
      <Text>Welcome to the Home Page!</Text>
      <Hello/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});