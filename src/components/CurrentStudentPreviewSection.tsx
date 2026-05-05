import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export type CurrentStudentPreview = {
  id?: string;
  role: string;
  name: string;
  imageLabel: string;
};

type CurrentStudentPreviewSectionProps = {
  title?: string;
  subtitle?: string;
  students?: CurrentStudentPreview[];
  buttonLabel?: string;
  onSeeEveryonePress?: () => void;
};

const defaultStudents: CurrentStudentPreview[] = Array.from({ length: 4 }, (_, index) => ({
  id: `student-${index + 1}`,
  role: "Art Director",
  name: "Bob Smith",
  imageLabel: "Student Image*",
}));

function defaultAction() {
  console.log("See everyone pressed");
}

function StudentCard({ role, name, imageLabel }: CurrentStudentPreview) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.roleLabel}>{role}</Text>
        <Text style={styles.nameLabel}>{name}</Text>
      </View>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imagePlaceholderText}>{imageLabel}</Text>
      </View>
    </View>
  );
}

export default function CurrentStudentPreviewSection({
  title = "Meet the future talent",
  subtitle = "Current student management team",
  students = defaultStudents,
  buttonLabel = "See everyone",
  onSeeEveryonePress = defaultAction,
}: CurrentStudentPreviewSectionProps) {
  const visibleStudents = students.slice(0, 4);
  const studentRows = Array.from({ length: Math.ceil(visibleStudents.length / 2) }, (_, rowIndex) =>
    visibleStudents.slice(rowIndex * 2, rowIndex * 2 + 2)
  );

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.contentArea}>
        <View style={styles.headerBlock}>
          <Text style={styles.heading}>{title}</Text>
          <Text style={styles.subheading}>{subtitle}</Text>
        </View>

        <View style={styles.grid}>
          {studentRows.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={[styles.gridRow, rowIndex > 0 && styles.gridRowSpacing]}>
              {row.map((student, index) => (
                <View key={student.id ?? `${student.name}-${rowIndex}-${index}`} style={styles.cardColumn}>
                  <StudentCard role={student.role} name={student.name} imageLabel={student.imageLabel} />
                </View>
              ))}
              {row.length === 1 && <View style={styles.cardColumn} />}
            </View>
          ))}
        </View>

        <Pressable accessibilityRole="button" onPress={onSeeEveryonePress} style={styles.button}>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={40} color="#000000" style={styles.buttonIcon} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: "100%",
    maxWidth: 700,
    height: 1000,
    backgroundColor: "#D9D9D9",
    alignSelf: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  contentArea: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  headerBlock: {
    marginTop: 64,
  },
  heading: {
    width: 310,
    height: 38,
    color: "#000000",
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 32,
  },
  subheading: {
    width: 376,
    height: 28,
    marginTop: 11,
    color: "#000000",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 24,
  },
  grid: {
    width: "100%",
    marginTop: 71,
  },
  gridRow: {
    width: "100%",
    flexDirection: "row",
    columnGap: 24,
  },
  gridRowSpacing: {
    marginTop: 57,
  },
  cardColumn: {
    flex: 1,
  },
  card: {
    width: "100%",
    height: 276,
    backgroundColor: "transparent",
  },
  cardHeader: {
    height: 52,
    justifyContent: "flex-start",
  },
  roleLabel: {
    color: "#000000",
    fontFamily: "Inter-Italic",
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "italic",
    lineHeight: 20,
  },
  nameLabel: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 24,
    marginTop: 1,
  },
  imagePlaceholder: {
    width: "100%",
    height: 224,
    backgroundColor: "#989898",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholderText: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 13,
    textAlign: "center",
  },
  button: {
    width: 258,
    height: 46,
    alignSelf: "center",
    marginTop: 61,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 32,
    textAlign: "center",
  },
  buttonIcon: {
    marginLeft: 2,
  },
});
