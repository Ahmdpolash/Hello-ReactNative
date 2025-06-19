import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLaout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home page" }} />
      </Stack>
    </>
  );
};

export default RootLaout;

const styles = StyleSheet.create({});
