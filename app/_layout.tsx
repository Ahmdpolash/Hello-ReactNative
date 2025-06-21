import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/UserContext";

const RootLaout = () => {
  return (
    <UserProvider>
      <StatusBar style="auto" />
      <Stack>
        {/* individual */}
        <Stack.Screen name="index" options={{ title: "Home page" }} />



        {/* Groups */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
};

export default RootLaout;

const styles = StyleSheet.create({});
