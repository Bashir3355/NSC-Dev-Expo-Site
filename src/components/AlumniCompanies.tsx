import { View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CompanyCard from "./CompanyCard";

export type Company = {
  name: string;
  logo?: ImageSourcePropType;
};

type AlumniCompaniesProps = {
  title?: string;
  companies?: Company[];
  pageName?: string;
};

const defaultCompanies: Company[] = [
  { name: "Company1" },
  { name: "Company2" },
  { name: "Company3" },
  { name: "Company4" },
  { name: "Company5" },
  { name: "Company6" },
  { name: "Company7" },
  { name: "Company8" },
];

export default function AlumniCompanies({
  title = "Where our Alumni are now",
  companies = defaultCompanies,
  pageName = "home",
}: AlumniCompaniesProps) {
  const isHomePage = pageName.toLowerCase() === "home";

  return (
    <LinearGradient
      colors={isHomePage ? ["#1A1A1A", "#808080"] : ["#808080", "#1A1A1A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      <Text style={styles.title}>{title}</Text>

      <View style={styles.grid}>
        {companies.map((company, index) => (
          <CompanyCard
            key={`${company.name}-${index}`}
            name={company.name}
            logo={company.logo}
          />
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 40,
    alignSelf: "flex-start",
    marginLeft: 40,
  },

  grid: {
    width: 700,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 40,
  },
});
