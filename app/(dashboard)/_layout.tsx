import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "../../constants/Color";
import { useColorScheme } from "react-native";

export default function DashboardLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 10,
          height: 90,
        },
      }}
    >
      <Tabs.Screen name="profile" options={{ title: "Profile page" }} />
      <Tabs.Screen name="create" options={{ title: "Create page" }} />
      <Tabs.Screen name="books" options={{ title: "Books page" }} />
    </Tabs>
  );
}
