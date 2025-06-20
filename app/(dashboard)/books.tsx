import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";

export default function Book() {
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <Text style={styles.heading}> Your Reading List</Text>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
