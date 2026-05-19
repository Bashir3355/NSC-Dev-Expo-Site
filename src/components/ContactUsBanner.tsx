import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ContactUsBanner() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.title}>
          Interested in Working with the Tech Hub?
        </Text>

        <Text style={styles.subtitle}>
          The North Seattle Tech Hub is always looking to connect with new
          people. If you are interested, please fill out the form below.
        </Text>
      </View>

      {/* Contact Layout */}
      <View style={styles.layout}>
        
        {/* Left Side */}
        <View style={styles.leftCard}>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>
              Image Placeholder
            </Text>
          </View>

          <Text style={styles.cardTitle}>
            Collaborate With Us
          </Text>

          <Text style={styles.cardText}>
            NSC Tech Hub connects students, technology, and creative projects
            together through collaboration and innovation.
          </Text>
        </View>

        {/* Right Side */}
        <View style={styles.form}>
          
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#94a3b8"
            style={styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#94a3b8"
            style={styles.input}
          />

          <Text style={styles.label}>Message</Text>
          <TextInput
            multiline
            numberOfLines={6}
            placeholder="Type your message"
            placeholderTextColor="#94a3b8"
            style={styles.textarea}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Send Message
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#050816",
    padding: 20,
    minHeight: "100%",
  },

  hero: {
    marginBottom: 40,
    alignItems: "center",
  },

  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
    marginBottom: 16,
  },

  subtitle: {
    color: "#cbd5e1",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 700,
  },

  layout: {
    gap: 20,
  },

  leftCard: {
    backgroundColor: "#0f172a",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1e293b",
  },

  placeholder: {
    height: 250,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#475569",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827",
    marginBottom: 20,
  },

  placeholderText: {
    color: "#94a3b8",
  },

  cardTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },

  cardText: {
    color: "#cbd5e1",
    lineHeight: 24,
    fontSize: 15,
  },

  form: {
    backgroundColor: "#0f172a",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1e293b",
  },

  label: {
    color: "white",
    marginBottom: 8,
    fontWeight: "700",
  },

  input: {
    backgroundColor: "#020617",
    borderColor: "#334155",
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    color: "white",
    marginBottom: 18,
  },

  textarea: {
    backgroundColor: "#020617",
    borderColor: "#334155",
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    color: "white",
    marginBottom: 18,
    textAlignVertical: "top",
    height: 140,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});