import StudentBanner from "../components/StudentBanner";

export default function StudentBannerStory() {
  return (
    <StudentBanner
      title="Interested in Joining NSC?"
      buttonLabel="Apply Now"
      onPress={() => console.log("Button pressed")}
    />
  );
}