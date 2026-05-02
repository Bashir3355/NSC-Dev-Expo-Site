import React from "react";
import { View } from "react-native";
import ContactUsForm from "../components/ContactUsForm";

export default {
  title: "Components/ContactUsForm",
  component: ContactUsForm,
};

export const Default = () => (
  <View style={{ padding: 20, backgroundColor: "#fff" }}>
    <ContactUsForm />
  </View>
);