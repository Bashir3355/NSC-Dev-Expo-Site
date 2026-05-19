import { View, Text } from 'react-native';
import Hello from '../../components/Hello';
import Hero from "../../components/Hero";
import StudentBanner from "../../components/StudentBanner";

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

  <Hero />

  <StudentBanner
    title="Interested in Joining NSC?"
    buttonLabel="Apply Now"
    onPress={() => console.log("Apply Now pressed")}
  />

  <Text>Welcome to the Home Page!</Text>

  <Hello />

</View>
  );
}
