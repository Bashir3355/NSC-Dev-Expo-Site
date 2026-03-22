import { ScrollView, Text, StyleSheet } from "react-native";
import Hello from '../../components/Hello';
import Hero from "../../components/Hero";
import ContactUsBanner from "src/components/ContactUsBanner";

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Hero />
      <Text>Welcome to the Home Page!</Text>
      <Hello/>
      <ContactUsBanner />
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