import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
import { router } from "expo-router";
import { colors, typography } from "@/constants/theme";
import { FAIcon, Icon } from "@/components/Icons";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.cream} />

      {/* TOP 75% - Image Background */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("@/assets/images/coffee-background.png")}
          style={styles.background}
          resizeMode="cover"
        ></ImageBackground>
      </View>

      {/* BOTTOM 25% - Text Content */}
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Fall in Love with Coffee in Blissful Delight!
          </Text>

          <Text style={styles.subtitle}>
            Welcome to our cozy coffee corner, where every cup is a delightful
            experience for you.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/home")}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            <FAIcon
              name={Icon.chevronRight}
              size={20}
              color={colors.white}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Top 75% - Image Section
  imageContainer: {
    flex: 0.75, // Takes 75% of screen
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  coffeeIcon: {
    marginTop: 40, // Adjust based on your design
  },

  // Bottom 25% - Content Section
  contentContainer: {
    flex: 0.35, // Takes 25% of screen
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.black,
    marginTop: -10, // Optional: creates overlap with image
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    elevation: 10,
  },
  content: {
    alignItems: "center",
    maxWidth: 300,
    width: "100%",
  },
  title: {
    fontSize: 34, // Slightly smaller for 25% space
    fontFamily: "",
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    marginTop: -70,
    marginBottom: 10,
    lineHeight: 50,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "System",
    color: colors.textLight,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  button: {
    backgroundColor: colors.brown,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 327, // Fixed width: 327px
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "600",
  },
  buttonIcon: {
    marginTop: 2,
  },
});
