// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }

// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants/theme";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.cream },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="home/index" />
        <Stack.Screen name="detail/[id]" />
        <Stack.Screen name="order/index" />
        <Stack.Screen name="delivery/index" />
      </Stack>
    </>
  );
}
