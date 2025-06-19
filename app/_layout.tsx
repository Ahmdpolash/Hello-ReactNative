import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLaout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        {/* Groups */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        {/* individual */}

        <Stack.Screen name="index" options={{ title: "Home page" }} />
      </Stack>
    </>
  );
};

export default RootLaout;

const styles = StyleSheet.create({});
