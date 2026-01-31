// app/index.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import { colors, typography } from "@/constants/theme";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ImageBackground
        source={require("@/assets/images/coffee-background.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>
              Fall in Love with Coffee in Blissful Delight!
            </Text>
            <Text style={styles.subtitle}>
              Welcome to our cozy coffee corner, where every cup is a delightful
              for you.
            </Text>

            <Link href="/home" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  statusBar: {
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "flex-end",
  },
  time: {
    fontSize: 16,
    fontFamily: typography.fontFamily,
    color: colors.black,
  },
  background: {
    flex: 1,
    width,
    height,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(249, 242, 237, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    alignItems: "center",
    maxWidth: 300,
  },
  title: {
    fontSize: 32,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: typography.fontFamilySemiBold,
  },
});
