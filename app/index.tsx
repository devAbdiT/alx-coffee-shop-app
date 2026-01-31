import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import { colors, typography } from "@/constants/theme";
import { FAIcon, Icon } from "@/components/Icons";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      {/* Status Bar Time */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ImageBackground
        source={require("@/assets/images/coffee-background.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            {/* Coffee Icon */}
            <FAIcon
              name={Icon.coffee}
              size={80}
              color={colors.primary}
              style={styles.coffeeIcon}
            />

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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  time: {
    fontSize: 16,
    fontFamily: "System",
    color: colors.black,
    fontWeight: "600",
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
  coffeeIcon: {
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "System",
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
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "600",
  },
  buttonIcon: {
    marginTop: 2,
  },
});
