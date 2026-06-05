import { SafeAreaView } from "react-native";
import StudentCard from "../../components/StudentCard";

export default function Test() {
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <StudentCard
        name="Bashir Abdullahi"
        description="I work on design, front-end components, and student project pages for the NSC Dev Expo Site."
      />
    </SafeAreaView>
  );
}