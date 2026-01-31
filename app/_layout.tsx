import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { colors } from "@/constants/theme";

// Initialize FontAwesome
library.add(fas);

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home/index" />
        <Stack.Screen name="detail/[id]" />
        <Stack.Screen name="order/index" />
        <Stack.Screen name="delivery/index" />
      </Stack>
    </SafeAreaProvider>
  );
}
