import { View } from "react-native";
import StudentBanner from "../../components/StudentBanner";

export default function StudentPage() {
  return (
    <View>
      <StudentBanner
        title="Interested in Joining NSC?"
        buttonLabel="Apply Now"
        onPress={() => console.log("Apply Now clicked")}
      />
    </View>
  );
}